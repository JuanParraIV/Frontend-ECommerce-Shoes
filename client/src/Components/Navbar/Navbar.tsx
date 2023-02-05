import icons from '../../assets/icons-navbar/icons-navbar'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex bg-gray-200 flex-col">
         <div className="flex justify-between  h-12 mt-2 mb-2 mx-5">
          
         <div className="bg-gray-3">
          <img src={icons.Logo} className="w-14 h-14" alt="" />
          </div>

          <div>SEARCHBAR</div>
          
          <div className="items-center flex-shrink-0 flex space-x-3">
			      <button className="self-center px-8 py-3 font-semibold rounded bg-yellow-400 text-gray-900">Sign in</button>
            <img src={icons.Cart} alt="Shopping_Cart" className='h-12 w-12 cursor-pointer' />
		      </div>

         </div>

         <div>
         <div className="flex justify-center bg-gray-500 py-2 mt-2">
        	<ul className="flex">
          		<li className="mr-6">
            <Link to={"/vino"}>
              <option className="text-yellow-400 text-lg font-bold hover:text-yellow-500 cursor-pointer">
                AIR JORDAN
              </option>
            </Link>
          </li>

          <li className="mr-6">
            <Link to={"/whisky"}>
              <option className="text-yellow-400 text-lg font-bold hover:text-yellow-500 cursor-pointer">
                ADIDAS
              </option>
            </Link>
          </li>

          <li className="mr-6">
            <Link to={"/cristaleria"}>
              <option
                value="cristaleria"
                className="text-yellow-400 text-lg font-bold hover:text-yellow-500 cursor-pointer"
              >
                NIKE
              </option>
            </Link>
          </li>
        </ul>
      </div>
         </div>
    </header>
  )
}
