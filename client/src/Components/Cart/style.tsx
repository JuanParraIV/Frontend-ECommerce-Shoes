import styled from "styled-components";
import tw from "twin.macro";


export const ProductContainer = styled.div`
  ${tw`rounded-2xl flex gap-10 m-10 mt-[60px] p-10 md:flex-wrap md:m-5 bg-gray-100   `}
  `;

export const CardStyle = styled.div`
${tw`border border-gray-200  p-8 m-8 max-w-sm rounded overflow-hidden shadow-lg cursor-pointer`}`;


export const Image = styled.div`
${tw`h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden `}`;

export const Card = styled.div`
${tw `border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t
lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col 
justify-between leading-normal`}`

export const Text = styled.div` ${tw``}
h5 {
  ${tw`text-yellow-400 font-bold`}
}
p {
  ${tw`text-red-400 font-bold`}
}`

export const Continue = styled.div`
${tw `bg-yellow-500/80 hover:bg-yellow-500/90 w-64 px-10 py-2 m-8 rounded-md
text-white font-medium tracking-wider transition `}`

export const Delete = styled.div`
${tw `bg-red-500/80 hover:bg-red-500/90 w-24 h-10 px-7 py-2 m-8 rounded-md
text-white font-medium tracking-wider transition `}`

export const ProductDetail = styled.div`
  ${tw``}
  h5 {
    ${tw`mt-[10px] text-yellow-400 font-bold`}
  }
  p {
    ${tw`mt-[10px]`}
  }
  `;
export const Buy = styled.div`
${tw `bg-yellow-500/80 hover:bg-gray-500/90 w-48 h-10 px-14 py-2 m-8 rounded-md
text-white font-medium tracking-wider transition flex justify-end `}`

