import icons from '../../assets/icons-navbar/icons-navbar';

import { Bars3Icon, XMarkIcon, StarIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';
import { ImageLogoContainer, NavBarContainer, NavBarHeader } from './style';
import SearchBar from '../SearchBar/SearchBar';

export default function Navbar() {
  return (
    <NavBarHeader>
      <NavBarContainer>
        {/* Nav Bar Logo */}
        <ImageLogoContainer>
          <Link to='/'>
            <img
              src={icons.Logo}
              alt="Jm-zon"
              className="cursor-pointer w-[150px] h-[40px] object-contain"
            />
          </Link>
        </ImageLogoContainer>

        {/* Custom search Element */}
        <SearchBar/>
        <div className="flex items-center text-white  text-xs space-x-6 mx-6 whitespace-nowrap">
          <div
            className="cursor-pointer link"
          >
            <p className="hover:underline">
              {"Sign In"}
            </p>
            <p className="font-extrabold md: text-sm">Account & Lists</p>
          </div>

          <div className="cursor-pointer link">
            <p>Returns</p>
            <p className="font-extrabold md: text-sm">& Orders</p>
          </div>

          <div
            className=" relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black">
              {0}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md: text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </NavBarContainer>
      {/* Botton Nav */}
      <div className="flex items-center bg-gray-500 text-white text-sm space-x-3 p-2 pl-6">
        <p className="link flex items-center">
          <Bars3Icon className="h-6 mr-1 cursor-pointer" />
          All
        </p>

        <p className="link">Most</p>
        <p className="link">Products</p>
        <p className="link">Customer Service</p>
        <Link to='/formCreateProduct'>
          <p className="link hidden lg:inline-flex hover:underline">Registry</p>
        </Link>
      </div>
    </NavBarHeader>
  );
}
