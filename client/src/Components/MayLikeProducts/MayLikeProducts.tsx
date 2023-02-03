import React from 'react';
import { Marquee, MayLikeProductWrapper, MayLikeProductsContainer, ProductsHeading } from './style';
import Product from '../Product/Product';

type Props = {};

const MayLikeProducts = (props: Props) => {
  return (
    <MayLikeProductWrapper className="maylike-products-wrapper">
      <ProductsHeading className="products-heading">
        <h2><span>Best</span> Selling Products</h2>
        <p><span>Sneakers</span> of many variations</p>
      </ProductsHeading>
      <Marquee className="marquee">
        <MayLikeProductsContainer className="maylike-products-container track">
          {/* {products?.map((item) => (
            <Product key={item._id} product={item} />
          ))} */}
        </MayLikeProductsContainer>
      </Marquee>
    </MayLikeProductWrapper>
  );
};

export default MayLikeProducts

