import React from 'react';
import { Marquee, MayLikeProductWrapper, MayLikeProductsContainer, ProductsHeading } from './style';
import Product from '../Product/Product';
import dates from '../../../sneaker.json'


type Props = {
};

const MayLikeProducts = (props: any) => {
  return (
    <MayLikeProductWrapper>
      <ProductsHeading>
        <h2><span>Best</span> Selling Products</h2>
        <p><span>Sneakers</span> of many variations</p>
      </ProductsHeading>
      <Marquee>
        <MayLikeProductsContainer>
          {dates.sneakers?.map((info) => (
            <Product key={info.id}
            brand_name={info.brand_name}
            color={info.color}
            gender={info.gender}
            grid_picture_url={info.grid_picture_url}
            retail_price_cents={info.retail_price_cents}
            />
          ))}
        </MayLikeProductsContainer>
      </Marquee>
    </MayLikeProductWrapper>
  );
};

export default MayLikeProducts

