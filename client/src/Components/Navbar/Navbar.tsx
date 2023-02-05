import icons from '../../assets/icons-navbar/icons-navbar';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="flex bg-gray-200">
      <div className="flex w-full justify-between  h-14 mt-2 mb-2 mx-5">

        <div className="bg-gray-3">
          <img src={icons.Logo} className="w-14 h-14" alt="" />
        </div>

        <div>SEARCHBAR</div>

        <div className="items-center flex-shrink-0 flex space-x-3">
          <button className="self-center px-8 py-3 font-semibold rounded bg-yellow-400 text-gray-900">Sign in</button>
          <Link to='/formCreateProduct'>
            <button className="self-center px-2 py-3 font-semibold rounded bg-yellow-400 text-gray-900">Create Product</button>
          </Link>
          <img src={icons.Cart} alt="Shopping_Cart" className='h-12 w-12 cursor-pointer' />
        </div>

      </div>
    </header>
  );
}
