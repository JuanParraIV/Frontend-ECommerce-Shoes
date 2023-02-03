import React from 'react'
import { ProductCard, ProductContainer, ProductImage, ProductName, ProductPrice } from './style';

type Props = {
  image:string,
  name:string,
  slug:unknown,
  price:number
}

const Product = (product:Props) => {
  const { image, name, slug, price }=product;
  return (
    <ProductContainer>
      {/* <Link href={`/product/${slug.current}`}> */}
        <ProductCard>
          <ProductImage
            src={image}
            alt=""
            width={250}
            height={250}
          />
          <ProductName>{name}</ProductName>
          <ProductPrice>$ {price}</ProductPrice>
        </ProductCard>
{/*       </Link> */}
    </ProductContainer>
  );
};

export default Product
