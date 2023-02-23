import icons from '@/assets/icons-navbar/icons-navbar';
import { Bars3Icon, XMarkIcon, StarIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from 'react-router-dom';
import { ImageLogoContainer, NavBarContainer, NavBarHeader } from './style';
import SearchBar from '../SearchBar/SearchBar';
import { useAuthStore } from '@/App/store/useAuthStore';
import { useAuth0 } from '@auth0/auth0-react';
import SubmitButton from '../Shared/Form/submitButton';
import { CartStore } from '@/App/store/useCartStore';
import { useGoogleAuthStore } from '@/App/store/useAuthGoogleStore';
import UserPanel from '../UserPanel/UserPanel';
import NavItems from './NavItems/NavItems';

export const Navbar: React.FC = () => {
  const { totalQty } = CartStore(state => state);
  const { isAuthenticated, token, logoutStore } = useAuthStore();
  const { isGoogleAuthenticated, tokenGoogle, logoutGoogleStore } = useGoogleAuthStore();

  const navigate = useNavigate();


  const loggedIn = isAuthenticated || isGoogleAuthenticated; // Variable para verificar si el usuario

  return (
    <>
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
          <NavItems />
          <div className="flex items-center text-white  text-xs space-x-6 mx-14 whitespace-nowrap">
            {/* Botones de Log In/Log Out */}
            <div className="cursor-pointer link">
              {loggedIn ? (

                <UserPanel/>
              ) : (
                <Link to={'/login'}>
                  <SubmitButton text='Log in' />
                </Link>
              )}
            </div>

            {/* Botón del carrito */}
            <button>
              <div className="relative link flex items-center">
                <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black">
                  {totalQty}
                </span>
                <Link to={'/shoppingCart'}>
                  <ShoppingCartIcon className="h-10" />
                </Link>
                <p className="hidden md:inline font-extrabold md: text-sm mt-2">Basket</p>
              </div>
            </button>
          </div>
        </NavBarContainer>
        {/* Botton Nav */}
      </NavBarHeader>
    </>
  );
};

export default Navbar;

