import styled from "styled-components";
import tw from "twin.macro";

export const Quantity = styled.div`
  ${tw`flex gap-5 mt-[10px]  text-yellow-400`}`;

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
