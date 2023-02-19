import styled from 'styled-components';
import tw from "twin.macro";

export const AboutUsContainer = styled.div`
${tw`
  max-w-screen-2xl
  mx-auto
  -mt-4
  -mb-40
`}
`;

export const AboutUsList = styled.ul`
${tw`
  pt-0
  border-[10px]
  border-white
  inline-block
  relative
  top-0
  left-[23%]
  translate-x-1/2
  translate-y-1/2
  mb-12
  text-[5rem]
`}
li {
  ${tw`
    md:text-[3rem]
    list-none
    text-black
    rounded-[10rem]
    float-left
    transition duration-[0.9s]
    mt-0
  `}
}
&:hover li{
  transform: rotateY(360deg)
}
&:hover li:nth-child(1){
  ${tw`
    delay-[0.8s]
  `}
}
&:hover li:nth-child(2){
  ${tw`
    delay-[0.6s]
  `}
}
&:hover li:nth-child(3){
  ${tw`
    delay-[0.3s]
  `}
}
`;

export const MainProfileCard = styled.div`
${tw`
  flex
  flex-wrap
  justify-center
  items-center
  mb-[13rem]
`}
`;
