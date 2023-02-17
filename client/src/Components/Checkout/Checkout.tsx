import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import swal from 'sweetalert';
import api from '@/Api/backend_sneakers';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card } from '../Cart/style';
import { useAuthStore } from '@/App/store/useAuthStore';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { CartStore } from '@/App/store/useCartStore';
import { useGoogleAuthStore, userGoogleType } from '@/App/store/useAuthGoogleStore';
import { StyledCheckout, StyledResume } from './style';
import secure from '../../assets/secure.png';
import stripe_secure from '../../assets/stripe_secure.webp';

const stripePromise = loadStripe('pk_test_51MbTIzJhcFAZvo867sTSmXA8sbtVQj5xILw6joZiLAfNvTYKgKlqP4VeNLUiy5H0QMF5KSGdhWjhzBfTEvZe4uZp00XxU2qf34');

interface UserInfo {
  cus_name: string;
  cus_email: string;
  cus_phone: number | string;
  cus_address: string;
  cus_city: string;
  cus_country: string;
  cus_zip: string;
  cus_cardelement?: boolean;
}

interface Errors {
  cus_name?: string;
  cus_email?: string;
  cus_phone?: string;
  cus_address?: string;
  cus_city?: string;
  cus_country?: string;
  cus_zip?: string;
  cus_cardelement?: boolean;
}
interface FormData {
  id?: number,
  userName: string;
  firstName: string;
  lastName: string;
  contactNumber: string;
  buyerAddress: string;
  email: string;
  password: string;
  dni: string;
}

function validate(userInfo: UserInfo): Errors {
  let errors: Errors = {};

  if (!userInfo.cus_name) {
    errors.cus_name = "Input required";
  } else if (!userInfo.cus_email) {
    errors.cus_email = "Input required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userInfo.cus_email)
  ) {
    errors.cus_email = "Invalid email address";
  } else if (!userInfo.cus_phone) {
    errors.cus_phone = "Input required";
  } else if (`${userInfo.cus_phone}`.length < 10) {
    errors.cus_phone = "should have 10 digits at least";
  } else if (!userInfo.cus_address) {
    errors.cus_address = "Input required";
  } else if (!userInfo.cus_city) {
    errors.cus_city = "Input required";
  } else if (!userInfo.cus_country) {
    errors.cus_country = "Input required";
  } else if (!userInfo.cus_zip) {
    errors.cus_zip = "Input required";
  }

  return errors;
}

function Checkout() {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const { cartItems, totalPrice, totalQty } = CartStore(state => state);
  const { token, profile, isAuthenticated } = useAuthStore(state => state);
  const { tokenGoogle, profileGoogle, isGoogleAuthenticated } = useGoogleAuthStore(state => state);

  const [user, setUser] = useState<FormData>();
  const [userGoogle, setUserGoogle] = useState<userGoogleType>();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    cus_name: "",
    cus_email: "",
    cus_phone: "",
    cus_address: "",
    cus_city: "",
    cus_country: "",
    cus_zip: "",
    cus_cardelement: false,
  });

  const [errors, setErrors] = useState<Errors>({
    cus_name: "",
    cus_email: "",
    cus_phone: "",
    cus_address: "",
    cus_city: "",
    cus_country: "",
    cus_zip: "",
    cus_cardelement: false,
  });

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;

    setUserInfo((prevUserInfo: UserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));

    setErrors(validate({
      ...userInfo,
      [name]: value,
    }));
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setErrors(validate(userInfo));

    if (!stripe || !elements) {
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)!
      });

      if (error) {
        throw new Error('Failed to create payment method');
      }

      const userType = isAuthenticated ? 'user' : isGoogleAuthenticated ? 'googleUser' : undefined;
      const paymentData = {
        id: paymentMethod.id,
        items: cartItems,
        amount: totalPrice,
        token: { token: isAuthenticated ? token : isGoogleAuthenticated ? tokenGoogle : undefined, userType },
        userInfo,
      }
      const JPD=JSON.stringify(paymentData)
      console.log(JPD)

      const response = await api.post('/payment', JPD, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${paymentData.token.token}`, },

      });

      console.log(response.data);

      const cardElement = elements.getElement(CardElement);
      if (cardElement) {
        cardElement.clear();
      }

      setUserInfo({
        cus_name: '',
        cus_email: '',
        cus_phone: '',
        cus_address: '',
        cus_city: '',
        cus_country: '',
        cus_zip: '',
      });
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }
  };
  const onChangeCardElement = async (): Promise<void> => {
    if (!stripe || !elements) {
      return;
    }


    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      // Handle error
      return;
    }


    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    let booleanCardelement: boolean = error ? false : true;


    setUserInfo((prevUserInfo: UserInfo) => ({
      ...prevUserInfo,
      cus_cardelement: booleanCardelement,
    }));
  };
  console.log('isAuthenticated', isAuthenticated);
  console.log('isGoogleAuthenticated', isGoogleAuthenticated);
  console.log('UserInfo', userInfo);
  useEffect(() => {
    if (isGoogleAuthenticated && profileGoogle) {
      const { given_name, family_name, email } = profileGoogle;
      setUserGoogle(profileGoogle);
      setUserInfo({
        cus_name: `${given_name} ${family_name}`,
        cus_email: email,
        cus_phone: '',
        cus_address: '',
        cus_city: '',
        cus_country: '',
        cus_zip: '',
        cus_cardelement: false,
      });
    }
  }, [isGoogleAuthenticated, profileGoogle]);


  useEffect(() => {
    if (isAuthenticated) {
      const { firstName, lastName, email, contactNumber, buyerAddress } = profile || {};
      const fullName = `${firstName || ''} ${lastName || ''}`.trim();
      setUser(fullName || email);
      setUserInfo({
        cus_name: fullName,
        cus_email: email,
        cus_phone: contactNumber || '',
        cus_address: buyerAddress || '',
        cus_city: '',
        cus_country: '',
        cus_zip: '',
        cus_cardelement: false,
      });
    }
  }, [isAuthenticated, profile, setUser, setUserInfo]);

  return (
    <StyledCheckout>
      <div className="leading-loose ">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl m-2 pt-5 px-10 bg-white rounded shadow-xl">
          <h1 className="text-center font-bold text-4xl border-b-2 pb-4">
            Checkout
          </h1>
          <br></br>
          <div className="">
            <label className="block text-sm text-gray-00" htmlFor="cus_name">
              Name
            </label>
            <input
              className="w-full px-5 py-0 text-gray-700 bg-gray-200 rounded"
              id="cus_name"
              name="cus_name"
              type="text"
              value={userInfo.cus_name}
              placeholder="Your Name"
              aria-label="Name"
              onChange={(e) => onChange(e)}
            />
            {errors.cus_name && (
              <p className="text-xs text-red-600">{errors.cus_name}</p>
            )}
          </div>

          <div className="mt-2">
            <label className="block text-sm text-gray-600" htmlFor="cus_email">
              Email
            </label>
            <input
              className="w-full px-5  py-0 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              name="cus_email"
              type="text"
              value={userInfo.cus_email}
              placeholder="Your Email"
              onChange={(e) => onChange(e)}
              aria-label="Email"
            />
            {errors.cus_email && (
              <p className="text-xs text-red-600">{errors.cus_email}</p>
            )}
          </div>

          <div className="mt-2">
            <label className=" block text-sm text-gray-600" htmlFor="cus_email">
              Phone
            </label>
            <input
              className="w-full px-2 py-0 text-gray-700 bg-gray-200 rounded"
              id="cus_phone"
              name="cus_phone"
              type="number"
              value={userInfo.cus_phone}
              placeholder="number phone"
              onChange={(e) => onChange(e)}
              aria-label="Email"
            />
            {errors.cus_phone && (
              <p className="text-xs text-red-600">{errors.cus_phone}</p>
            )}
          </div>

          <div className="mt-2">
            <label className=" block text-sm text-gray-600" htmlFor="cus_email">
              Address
            </label>
            <input
              className="w-full px-2 py-0 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              name="cus_address"
              type="text"
              value={userInfo.cus_address}
              placeholder="Street"
              onChange={(e) => onChange(e)}
              aria-label="Email"
            />
            {errors.cus_address && (
              <p className="text-xs text-red-600">{errors.cus_address}</p>
            )}
          </div>

          <div className="mt-2">
            <label className=" text-sm block text-gray-600" htmlFor="cus_email">
              City
            </label>
            <input
              className="w-full px-2 py-0 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              name="cus_city"
              type="text"
              value={userInfo.cus_city}
              placeholder="City"
              onChange={(e) => onChange(e)}
              aria-label="Email"
            />
            {errors.cus_city && (
              <p className="text-xs text-red-600">{errors.cus_city}</p>
            )}
          </div>


          <div className="inline-block mt-2 w-1/2 pr-1">
            <label className="block text-sm text-gray-600" htmlFor="cus_email">
              Country
            </label>
            <input
              className="w-full px-2 py-0 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              name="cus_country"
              type="text"
              value={userInfo.cus_country}
              placeholder="Country"
              onChange={(e) => onChange(e)}
              aria-label="Email"
            />
            {errors.cus_country && (
              <p className="text-xs text-red-600">{errors.cus_country}</p>
            )}
          </div>

          <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
            <label className="block text-sm text-gray-600" htmlFor="cus_email">
              Zip
            </label>
            <input
              className="w-full px-2 py-0 text-gray-700 bg-gray-200 rounded"
              id="cus_email"
              name="cus_zip"
              type="number"
              value={userInfo.cus_zip}
              placeholder="Zip"
              onChange={(e) => onChange(e)}
              aria-label="Email"
            />
            {errors.cus_zip && (
              <p className="text-xs text-red-600">{errors.cus_zip}</p>
            )}
          </div>

          <div className="mt-2">
            <label className="block text-sm text-gray-600">
              Payment information
            </label>
            <CardElement
              className="w-full px-5  py-2 text-gray-700 bg-gray-200 rounded"
              onChange={() => {
                onChangeCardElement();
              }}
            />
          </div>

          <div className="mt-4">
            {Object.keys(errors).length === 0 && (
              <>
                {userInfo.cus_name &&
                  userInfo.cus_email &&
                  userInfo.cus_phone &&
                  userInfo.cus_address &&
                  userInfo.cus_city &&
                  userInfo.cus_country &&
                  userInfo.cus_zip !== "" &&
                  elements?.getElement(CardElement) &&
                  userInfo.cus_cardelement === true ? (
                  <div className="flex items-center justify-center">
                    {processing ? (
                      <p>...Loading</p>
                    ) : (
                      <button
                        className="px-4  text-black font-light tracking-wider bg-yellow-400  min-w-full rounded-md"
                        type="submit"
                        disabled={!stripe}
                      >
                        <span className="font-semibold">
                          Pay with Stripe{" $"}
                          {totalPrice}
                        </span>
                      </button>
                    )}
                  </div>
                ) : (
                  <span className="font-bold text-xl">
                    Total: ${totalPrice}
                  </span>
                )}
              </>
            )}
            <div className="flex flex-wrap">
              <img className="w-80" src={stripe_secure} alt="Stripe_security" />
              <img
                className="w-10 h-10 mt-4 mr-1"
                src={secure}
                alt="Stripe_security"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="leading-loose max-w-md max-h-screen overflow-auto m-4 p-10 bg-white rounded shadow-xl">
        <h2 className="text font-bold text-2xl">Resume items:</h2>
        {cartItems.map((item, index) => {
          return (
            <StyledResume key={index}>
              <img src={item.grid_picture_url} alt={item.name} />
              <p key={index}>{item.brand_name}</p>
              <h2>{item.name}</h2>
              <p>{`$${item.retail_price_cents}`}</p>
              <b>{`Status:`}</b> <span>{`${item.status}`}</span>
              <span className="bg-black text-justify !important rounded-sm absolute top-2 left-0 text-xl text-white font-semibold">
                {`X ${item.quantity}`}
              </span>
            </StyledResume>
          );
        })}
        <p></p>
      </div>
    </StyledCheckout>
  );
}

export function CheckoutWithStripe(): JSX.Element {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
}

