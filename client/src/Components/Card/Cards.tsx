import React, { useEffect, useState } from "react";
import { CardStyle, Image, ProductTitle, ButtonStyle, ButtonIcon, ButtonRemove } from './style';
import corazon from '../../assets/icons-card/corazon.png';
import ojo from '../../assets/icons-card/ojo.png';
import corazonrojo from '../../assets/icons-card/corazonrojo.png';
import { SneakersType } from '@/Typing/Sneakers.type';
import { FavoriteSneakerStore } from '@/App/store/useFavoriteSneakerStore';
import { formatCurrency } from '../../Utilities/formatCurrency';
import { stat } from "fs";
import { remove } from "@antfu/utils";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { useSneakerStore } from "@/App/store/useSneakerStore";
import { useAuthStore } from "@/App/store/useAuthStore";
import { useGoogleAuthStore } from "@/App/store/useAuthGoogleStore";
import { CartItem, CartStore } from "@/App/store/useCartStore";
import api from "@/Api/backend_sneakers";




type ProductProps = {
  product: SneakersType;
  isFavorite: boolean;
};

const Card = ({ product, isFavorite }: ProductProps) => {
  const navigate = useNavigate();
  const { addFavoriteSneaker, removeFavoriteSneaker } = FavoriteSneakerStore(state => state);
  const { token, profile, isAuthenticated } = useAuthStore(state => state);
  const { tokenGoogle, profileGoogle, isGoogleAuthenticated } = useGoogleAuthStore(state => state);
  const singleSneaker = useSneakerStore(state => state.singleSneaker);
  console.log("un tennis", singleSneaker);
  const { addToCart, cartItems, totalPrice } = CartStore(state => state);
  console.log(cartItems);


const newSingleSneaker: SneakersType={
    id:product.id,
    brand_name:product.brand_name,
    category_name:product.category_name,
    name:product.name,
    color:product.color,
    retail_price_cents:product.retail_price_cents,
    size_range:product.size_range,
    grid_picture_url:product.grid_picture_url,
    original_picture_url:product.original_picture_url,
    main_picture_url:product.main_picture_url,
    details:product.details,
    stock:product.stock,
    status:product.status,
    brandId:product.brandId,
    categoryId:product.categoryId,
    isBanned:product.isBanned,
    rating:product.rating,
  }

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavoriteSneaker(product.id);
      return;
    }
    addFavoriteSneaker(product.id);
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
    addToCart(newSingleSneaker, 1);
  };

  useEffect(() => {
    postTrolley(cartItems, totalPrice);
  }, [cartItems]);
  return (
    <>

      <CardStyle >
        <Image>
          <Link to={`/product/${product.id}`}>

            <img src={product.grid_picture_url} alt='image not found' width={300} height={250} />
            <div className="p-5 flex flex-col  gap-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs bg-gray-100">{product.color}</span>
                <span className="px-3 py-1 rounded-full text-xs bg-gray-100">{product.status}</span>
              </div>
              <ProductTitle>
                <h2>{product.brand_name}</h2>
              </ProductTitle>
              <div>
                <span className="text-xl font-bold">
                  {formatCurrency(product.retail_price_cents)}
                </span>
              </div>
            </div>
          </Link>



          <div className="flex items-center justify-center space-x-1.5 mx-auto rounded-lg bg-yellow-500/80 hover:bg-yellow-500/90 px-4 py-1.5 text-black duration-100" onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

            <button className="text-sm">Add to cart</button>
          </div>
        </Image>
        <ButtonIcon>
          <button onClick={handleFavorite}>
            {
              !isFavorite ? <img className="opacity-40 w-4" src={corazon} alt='remove to wishlist' /> : <img className=" w-5" src={corazonrojo} alt='add to wishlist' />
            }
          </button>
        </ButtonIcon>

      </CardStyle>

    </>
  );
};

export default Card;
