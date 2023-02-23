import React from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { slide as Menu } from 'react-burger-menu'
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../responsive';
import menuStyles from '../menuStyles';
import { useNavigate } from 'react-router-dom';

const NavListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `}
`;
const NavListItem = styled.li<{menu?:any}>`
  ${tw`
    text-sm
    md:text-base
    text-yellow-400
    font-medium
    mr-1
    items-center
    justify-center
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-orange-500
  `}
  ${({menu}) => menu && css`
    ${tw`
      text-yellow-400
      text-xl
      mb-3
      focus:text-white
    `};
  `};
`;


export const NavItems = () => {
 const navigate= useNavigate()
  const isMobile = useMediaQuery({ maxWidth: SCREENS.md });
  if(isMobile) {
    return (
      <Menu  right styles={menuStyles}>
      <NavListContainer>
        <NavListItem menu>
          <a onClick={()=>navigate('/')}>Home</a>
        </NavListItem>
        <NavListItem menu>
          <a onClick={()=>navigate('/aboutUs')}>About Us</a>
        </NavListItem>
      </NavListContainer>
      </Menu>
    )
  }

  return (
      <NavListContainer>
        <NavListItem>
          <a onClick={()=>navigate('/')}>Home</a>
        </NavListItem>
        <NavListItem>
        <a onClick={()=>navigate('/aboutUs')}>About Us</a>
        </NavListItem>
      </NavListContainer>

  )
}

export default NavItems
