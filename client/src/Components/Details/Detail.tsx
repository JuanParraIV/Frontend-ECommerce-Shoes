import React, { useEffect, useState } from "react";
import {
  MinusSmallIcon, PlusSmallIcon, ArrowDownIcon
} from "@heroicons/react/24/outline";
//import { useStateContext } from "../../context/StateContext";
import MayLikeProducts from "../MayLikeProducts/MayLikeProducts";
import { useParams } from "react-router-dom";
import { useSneakerStore } from "@/App/store/useSneakerStore";
import { AddCart, Bottom, ButtonContainer, BuyNow, Minus, Num, Plus, Price, ProductDetailContainer, ProductDetailDesc, Quantity, QuantityDesc } from "./style";

export const Details = ({ singleSneaker }) => {
  console.log(singleSneaker);
  const {
    id, brand_name, category_name, name, color, retail_price_cents, size_range, grid_picture_url, original_picture_url, main_picture_url, details, has_stock, status, brandId, categoryId } = singleSneaker;
  //const { decQty, incQty, qty, onAdd,setShowCart} = useStateContext();

  const handleBuyNow = () => {
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
              <Minus>
                <MinusSmallIcon />
              </Minus>
              <Num>{0}</Num>
              <Plus>
                <PlusSmallIcon />
              </Plus>
            </QuantityDesc>
          </Quantity>
          <ButtonContainer>
            <AddCart
              type="button"
            >
              Add to Cart
            </AddCart>
            <BuyNow type="button" onClick={handleBuyNow}>
              Buy Now
            </BuyNow>
          </ButtonContainer>
        </ProductDetailDesc>
      </ProductDetailContainer>
      <MayLikeProducts />
    </>
  );
};
