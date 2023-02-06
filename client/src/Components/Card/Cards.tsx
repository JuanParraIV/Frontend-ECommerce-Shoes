import React from "react";
import {Body, CardStyle, Image, ProductTitle, ButtonStyle, ButtonIcon } from './style';
import corazon from '../../assets/icons-card/corazon.png';
import ojo from '../../assets/icons-card/ojo.png';
import { SneakersType } from '@/Typing/Sneakers.type';



type ProductProps = {
    product: SneakersType
  };
  

const Card = ({product}: ProductProps) => {

  return (
    <div>
        <Body>
            <CardStyle>
                <Image>
                  <img src={product.grid_picture_url} alt= 'image not found'  width={240} height={240} />
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
                            {product.retail_price_cents}
                        </span>
                    </div>

                    <div className="mt-5 flex gap-2">
                        <ButtonStyle>
                          <button>Add to Cart</button>
                        </ButtonStyle>
                        <ButtonIcon>
                        <button>
                            <img className="opacity-50 w-4" src={corazon} alt='add to wishlist'/>
                        </button>
                        </ButtonIcon>
                        <ButtonIcon>
                        <button>
                            <img className="opacity-50 w-4" src={ojo} alt='add to wishlist'/>
                        </button>
                        </ButtonIcon>
                    </div>
                  

                    

                  </div>
                </Image>
            </CardStyle>
        </Body>
      
    </div>
  )
}

export default Card;