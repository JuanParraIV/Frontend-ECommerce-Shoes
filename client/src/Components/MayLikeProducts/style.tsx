
import styled from "styled-components";
import tw from "twin.macro";

export const MayLikeProductWrapper = styled.div`
  ${tw` mt-[120px] `}
  h2 {
    ${tw` text-center m-[50px] text-yellow-400 text-2xl `}
  }
  `;
export const Marquee = styled.div`${tw` relative h-[400px] w-full overflow-hidden`}`;
export const MayLikeProductsContainer = styled.div`${tw` absolute flex justify-center gap-[15px] mt-5  `}`;
export const Track = styled.div`${tw`absolute whitespace-nowrap animate-marquee2 w-[180%] will-change-transform `}
  &:hover${tw`animate-marquee2 paused`}`;

export const ProductsHeading = styled.div`${tw`text-center my-10 mx-0`}
  h2{
    ${tw`text-4xl`}
  }
  p{
    ${tw`text-base font-extrabold`}
  }
  span{
    ${tw`text-yellow-400`}
  }`;
