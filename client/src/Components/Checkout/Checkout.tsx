import React, { useState } from 'react'
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

const stripePromise = loadStripe('pk_test_51MbTIzJhcFAZvo867sTSmXA8sbtVQj5xILw6joZiLAfNvTYKgKlqP4VeNLUiy5H0QMF5KSGdhWjhzBfTEvZe4uZp00XxU2qf34')


interface CheckoutProps {
  onSuccess: () => void;
}

function Checkout(props: CheckoutProps): JSX.Element {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)!
    });

    setProcessing(false);

    if (error) {
      console.error(error);
    } else {
      props.onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || !elements || processing}>
        {processing ? 'Processing...' : 'Pay'}
      </button>
    </form>
  );
}

export function CheckoutWithStripe(): JSX.Element {
  return (
    <Elements stripe={stripePromise}>
      <Checkout onSuccess={() => console.log('Payment successful!')} />
    </Elements>
  );
}
