import styled from "styled-components";
import tw from "twin.macro";

export const ProductDetailContainer = styled.div`
  ${tw`rounded-2xl flex gap-10 m-10 mt-[60px] p-10 md:flex-wrap md:m-5 bg-[#374151]`}
  `;
export const ProductDetailDesc = styled.div`
  ${tw``}
  h4 {
    ${tw`mt-[10px] text-yellow-400`}
  }
  p {
    ${tw`mt-[10px]`}
  }
  `;
export const Price = styled.p`
  ${tw`font-semibold text-2xl mt-8 text-red-600`}`;
export const Quantity = styled.div`
  ${tw`flex gap-5 mt-[10px]  text-yellow-400`}`;

export const Bottom = styled.div`
${tw`
px-3
mt-[30px]
justify-between
`}`;
export const QuantityDesc = styled.div`
  ${tw` flex border border-gray-500
p-1`}
  span {
    ${tw`cursor-pointer`}
  }
  `;
export const Minus = styled.span`
  ${tw`flex
text-base
py-1.5
px-2
text-red-500
border-r border-gray-500`}`;
export const Num = styled.span`
  ${tw` px-3
flex
text-xl
text-yellow-600
 border-gray-500`}`;
export const Plus = styled.span`
  ${tw`flex
text-base
py-1.5
px-2
text-green-500
border-l border-gray-500`}`;

export const ButtonContainer = styled.div`
  ${tw`flex gap-5`}`;

export const AddCart = styled.button`
  transform: scale(1, 1);
  transition: transform 0.5s ease;
  ${tw`px-[10px] py-5 border border-solid border-black mt-10 text-lg font-medium bg-yellow-400 cursor-pointer w-[200px]`}
  &hover:transform: scale(1.1, 1.1);
  `;
export const BuyNow = styled.button`
transform: scale(1, 1);
transition: transform 0.5s ease;
${tw`w-[200px] px-[10px] py-5 bg-gray-500 text-yellow-400 border-none mt-10 text-lg font-medium cursor-pointer `}
&hover:transform: scale(1.1, 1.1);
`;
