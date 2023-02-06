import React from 'react';
import { ProductCard, ProductContainer, ProductImage, ProductName, ProductPrice } from './style';
import { SneakersType } from '@/Typing/Sneakers.type';

type ProductProps = {
  product: SneakersType
};

const Product = ({product}: ProductProps) => {
  return (
    <ProductContainer>
      {/* <Link href={`/product/${slug.current}`}> */}
      <ProductCard>
        <ProductImage
          src={product.grid_picture_url}
          alt=""
          width={200}
          height={200}
        />
        <ProductName>{product.brand_name}</ProductName>
        <ProductName>{product.color}</ProductName>
        <ProductPrice>$ {product.retail_price_cents}</ProductPrice>
      </ProductCard>
      {/*       </Link> */}
    </ProductContainer>
  );
};

export default Product;
