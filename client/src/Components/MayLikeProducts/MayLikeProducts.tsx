import React from 'react';
import { Marquee, MayLikeProductWrapper, MayLikeProductsContainer, ProductsHeading } from './style';
import Product from '../Product/Product';
import { useFetchAllSneaker } from '@/App/hooks/useSneakers';
import { useStore, StoreState} from '@/App/store/useSneakerStore';

const MayLikeProducts = () => {
  const { sneakers, fetchSneakers } = useStore() as StoreState;

  const { data, isLoading } = useFetchAllSneaker();
  return (
    <MayLikeProductWrapper>
      <ProductsHeading>
        <h2><span>Best</span> Selling Products</h2>
        <p><span>Sneakers</span> of many variations</p>
      </ProductsHeading>
      <Marquee>
        <MayLikeProductsContainer>
          {sneakers?.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </MayLikeProductsContainer>
      </Marquee>
    </MayLikeProductWrapper>
  );
};

export default MayLikeProducts

