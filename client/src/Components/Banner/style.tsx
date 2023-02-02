import tw from 'twin.macro';
import styled from 'styled-components';

export const CarouselContainer = styled.div`
 ${tw` relative `}`;
export const CarouselBorder = styled.div`
 ${tw` absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20 `}`;
export const CarouselTextContainer = styled.div`${tw`absolute top-1/2 w-full text-center`}`;
export const CarouselText = styled.p`
  ${tw`text-white text-sm sm:text-lg`}`;
export const CarouselTextButton = styled.button`
   ${tw`bg-yellow-400 py-4 px-10  shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-200 `}`;
