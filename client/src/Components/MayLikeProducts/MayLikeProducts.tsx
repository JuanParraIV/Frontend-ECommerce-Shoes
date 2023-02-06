import React from 'react';
import { Marquee, MayLikeProductWrapper, MayLikeProductsContainer, ProductsHeading } from './style';
import Product from '../Product/Product';
import dates from '../../../sneaker.json';
import { SneakersType } from '@/Typing/Sneakers.type';
import { useFetchAllSneaker } from '@/App/hooks/useSneakers';

const MayLikeProducts = () => {
  const { data, isLoading } = useFetchAllSneaker();
  return (
    <MayLikeProductWrapper>
      <ProductsHeading>
        <h2><span>Best</span> Selling Products</h2>
        <p><span>Sneakers</span> of many variations</p>
      </ProductsHeading>
      <Marquee>
        <MayLikeProductsContainer>
          {data?.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </MayLikeProductsContainer>
      </Marquee>
    </MayLikeProductWrapper>
  );
};

export default MayLikeProducts

