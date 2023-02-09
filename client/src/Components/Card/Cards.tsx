import React from "react";
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



type ProductProps = {
  product: SneakersType;
  isFavorite: boolean;
  quantity: {};
  id:any
};

const Card = ({ product, isFavorite }: ProductProps) => {
  const navigate = useNavigate();
  const { addFavoriteSneaker, removeFavoriteSneaker } = FavoriteSneakerStore(state => state);
  const { sneakers, fetchSneakers } = useSneakerStore(state => state);
  // console.log("product",product)
 



  const handleFavorite = () => {
    if (isFavorite) {
      removeFavoriteSneaker(product.id);
      return;
    }
    addFavoriteSneaker(product.id);
  };
  return (
    <>
        <CardStyle >
                    <ButtonIcon>
                      <button onClick={handleFavorite}>
                        {
                          !isFavorite ? <img className="opacity-40 w-4" src={corazon} alt='remove to wishlist' /> : <img className=" w-5" src={corazonrojo} alt='add to wishlist' />
                        }
                      </button>
                    </ButtonIcon>
          <Image>
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

              <div className="mt-5 flex gap-2">
               

              <Link to={`/product/${product.id}`}>
                <ButtonStyle>
                  <button>Detail</button>
                </ButtonStyle>
                </Link>

              </div>
            </div>
          </Image>
        </CardStyle>
    </>
  );
};

export default Card;
