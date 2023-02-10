import React, { useEffect, useState } from "react";
import {
  MinusSmallIcon, PlusSmallIcon, ArrowDownIcon
} from "@heroicons/react/24/outline";
//import { useStateContext } from "../../context/StateContext";
import MayLikeProducts from "../MayLikeProducts/MayLikeProducts";
import { useParams } from "react-router-dom";
import { useSneakerStore } from "@/App/store/useSneakerStore";
import { AddCart, Bottom, ButtonContainer, BuyNow, Minus, Num, Plus, Price, ProductDetailContainer, ProductDetailDesc, Quantity, QuantityDesc } from "./style";
import { ShoppingCartStore } from "@/App/store/useShoppingCart";

type Props = {
  singleSneaker: any
}
export const Details = ({ singleSneaker }: Props) => {

  const {
    id, brand_name, category_name, name, color, retail_price_cents, size_range, grid_picture_url, original_picture_url, main_picture_url, details, has_stock, status, brandId, categoryId } = singleSneaker;
  
  
  const {addProduct, products1} = ShoppingCartStore()
    console.log( "products", products1);


  const [quantity, setQuantity]= useState(1)

  const handleQuantity = (type:string) => {
    if (type === "dec") {
      quantity!==1 && setQuantity(quantity - 1);
    }
    if (type === "asc") {
       setQuantity(quantity + 1)
    }
  };
  const obj= { 
    ...singleSneaker,
    quantity,
    price:retail_price_cents*quantity,
    price2: retail_price_cents

  }

  // const arr= [...singleSneaker]
  console.log("objeto",obj)

  const handleClick = () => {
      addProduct(obj)   
}; 

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
              <Minus onClick={()=>handleQuantity("dec")}>
                <MinusSmallIcon />
              </Minus>
              <Num>{quantity}</Num>

              <Plus onClick={()=>handleQuantity("asc")}>
              
                <PlusSmallIcon />
              </Plus>
            </QuantityDesc>
          </Quantity>
          <Price>Total = ${retail_price_cents*quantity}</Price>
          <ButtonContainer >
            <AddCart
              type="button"
            >

              <button onClick={handleClick}>

              Add to Cart
              </button>
            </AddCart>
          </ButtonContainer>
        </ProductDetailDesc>
      </ProductDetailContainer>
      <MayLikeProducts />
    </>
  );
};
