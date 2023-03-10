import tw from 'twin.macro';
import styled from 'styled-components';

export const CardStyle = styled.div`
${tw`relative flex flex-col m-5 bg-white z-30 cursor-pointer`}`;

export const Image = styled.div`
${tw`w-full h-full object-cover rounded-md shadow-xl  transition ease-in-out delay-150 bg-gray-200 hover:-translate-y-1 hover:scale-105 hover:bg-white duration-300  `}`;

export const ProductTitle = styled.div`
${tw`overflow-ellipsis overflow-hidden whitespace-nowrap`}`;

export const ButtonStyle = styled.div`
${tw`bg-yellow-500/80 hover:bg-yellow-500/90 px-10 py-2 rounded-md
text-white font-medium tracking-wider transition `}`;


export const ButtonIcon = styled.div`
${tw`flex-grow flex justify-center px-5 py-3 items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md`}`;

export const ButtonRemove = styled.div`
${tw`bg-red-500/80 hover:bg-red-500/90 px-3 py-2 rounded-md
text-white font-medium tracking-wider transition `}`;


