import React, { useEffect, useState } from "react";
import {
  MinusSmallIcon, PlusSmallIcon, ArrowDownIcon
} from "@heroicons/react/24/outline";
//import { useStateContext } from "../../context/StateContext";
import MayLikeProducts from "../MayLikeProducts/MayLikeProducts";
import { Link, useParams } from "react-router-dom";
import { useSneakerStore } from "@/App/store/useSneakerStore";
import { AddCart, Continue, Bottom, ButtonContainer, BuyNow, Minus, Num, Plus, Price, ProductDetailContainer, ProductDetailDesc, Quantity, QuantityDesc } from "./style";
import { CartItem, CartStore } from "@/App/store/useCartStore";
import { useGoogleAuthStore } from "@/App/store/useAuthGoogleStore";
import { useAuthStore } from "@/App/store/useAuthStore";
import api from "@/Api/backend_sneakers";
import swal from "sweetalert";


export const Details = () => {
  const { token, profile, isAuthenticated } = useAuthStore(state => state);
  const { tokenGoogle, profileGoogle, isGoogleAuthenticated } = useGoogleAuthStore(state => state);
  const singleSneaker = useSneakerStore(state => state.singleSneaker);
  console.log("un tennis",singleSneaker);
  const { addToCart, cartItems, totalPrice } = CartStore(state => state);
  console.log(cartItems);

  const {
    id, brand_name, category_name, name, color, retail_price_cents, size_range, grid_picture_url, original_picture_url, main_picture_url, details, status, brandId, categoryId } = singleSneaker;

  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: string) => {
    if (type === "dec") {
      quantity !== 1 && setQuantity(quantity - 1);
    }
    if (type === "asc") {
      setQuantity(quantity + 1);
    }
  };

  const postTrolley = async (cartItems: CartItem[], totalPrice: number) => {
    try {
      const userType = isAuthenticated ? 'user' : isGoogleAuthenticated ? 'googleUser' : undefined;
      const trolleyData = {
        items: cartItems,
        amount: totalPrice,
        token: { token: isAuthenticated ? token : isGoogleAuthenticated ? tokenGoogle : undefined, userType },
      };

      const response = await api.post('/trolley', trolleyData, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${trolleyData.token.token}`, },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async () => {
    addToCart(singleSneaker, quantity);
  };

  useEffect(() => {
    postTrolley(cartItems, totalPrice);
  }, [cartItems])


  return (
    <>
      <ProductDetailContainer>
        <div>
          <img
            src={original_picture_url}
            alt=""
            className="rounded-2xl bg-yellow-400 w-[400px] h-[400px] cursor-pointer  transition ease-in-out duration-75 hover:bg-transparent md:w-[350px] md:h-[350px] hover:bg-gray-500"
          />
        </div>
        <ProductDetailDesc>
          <h1>{name}</h1>
          <h4>Details: </h4>
          <p>{details}</p>
          <Price>${retail_price_cents}</Price>
          <Quantity >
            <h3>Quantity:</h3>
            <QuantityDesc >
              <Minus onClick={() => handleQuantity("dec")}>
                <MinusSmallIcon />
              </Minus>
              <Num>{quantity}</Num>

              <Plus onClick={() => handleQuantity("asc")}>

                <PlusSmallIcon />
              </Plus>
            </QuantityDesc>
          </Quantity>

          <Price>Total = ${retail_price_cents * quantity}</Price>
          <ButtonContainer >

            <AddCart
              onClick={handleClick}
              type="button"
            >
              <button onClick={handleClick} />
              Add to Cart
            </AddCart>
            <Continue>
              <Link to='/'>
                <button>Continue Shopping</button>
              </Link>
            </Continue>

          </ButtonContainer>
        </ProductDetailDesc>
      </ProductDetailContainer>
      <MayLikeProducts />
    </>
  );
};
