import styled from "styled-components";
import tw from "twin.macro";

export const ProductContainer = styled.div`${tw`cursor-pointer hover:scale-105 transform transition duration-300 ease-out`}`;
export const ProductCard = styled.div`${tw`relative h-80 w-80`}`;
export const ProductImage = styled.img`${tw``}`;
export const ProductName = styled.p`${tw`text-2xl mt-3`}`;
export const ProductPrice = styled.p`${tw`font-extrabold mt-1.5 text-red-600`}`;
