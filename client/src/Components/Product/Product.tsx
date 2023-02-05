import React from 'react';
import { ProductCard, ProductContainer, ProductImage, ProductName, ProductPrice } from './style';

type Props = {
  brand_name: string;
  color: string;
  gender: string[];
  grid_picture_url: string;
  retail_price_cents?: any;
};

const Product = ({ brand_name, color, gender, retail_price_cents, grid_picture_url }: Props) => {
  return (
    <ProductContainer>
      {/* <Link href={`/product/${slug.current}`}> */}
      <ProductCard>
        <ProductImage
          src={grid_picture_url}
          alt=""
          width={200}
          height={200}
        />
        <ProductName>{brand_name}</ProductName>
        <ProductName>{color}</ProductName>
        <ProductPrice>$ {retail_price_cents}</ProductPrice>
      </ProductCard>
      {/*       </Link> */}
    </ProductContainer>
  );
};

export default Product;
