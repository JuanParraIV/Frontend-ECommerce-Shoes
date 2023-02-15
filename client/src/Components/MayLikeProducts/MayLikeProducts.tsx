import { Marquee, MayLikeProductWrapper, MayLikeProductsContainer, ProductsHeading } from './style';
import Product from '../Product/Product';
import { useSneakerStore } from '@/App/store/useSneakerStore';

const MayLikeProducts = () => {
  const { sneakers } = useSneakerStore(state => state);
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

