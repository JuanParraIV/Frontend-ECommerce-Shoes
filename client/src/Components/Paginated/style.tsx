import styled from "styled-components";
import tw from "twin.macro";

export const StyledNav = styled.nav`
  ${tw`
    flex items-center justify-center gap-0 max-h-10 list-none
  `}
`;
export const StyledLi = styled.li`
  ${tw` py-1 px-3 m-1 flex text-center rounded shadow hover:border-b-2 hover:border-black hover:scale-110 cursor-pointer active:rounded-md active:bg-amber-300 active:px-4 active:py-1.5
`}
`;
export const StyledButton = styled.button`
  ${tw` py-1 px-3 m-1 flex text-center rounded shadow hover:border-b-2 hover:border-amber-300 cursor-pointer active:rounded-md bg-amber-300 active:px-4 active:py-1.5 hover:-translate-y-1 hover:scale-105 duration-300
`}
`;
