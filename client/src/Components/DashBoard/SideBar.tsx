import { useAuthStore } from '@/App/store/useAuthStore';
import { CartStore } from '@/App/store/useCartStore';
import React, { useState } from 'react'
import { RiDashboardLine, RiBarChartGroupedLine, RiContactsLine, RiShoppingBag3Line, 
    RiLogoutBoxLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';    




const SideBar = () => {
    const [sidebar, setSidebar] = useState(false)
    const { logoutStore} = useAuthStore();
    const{clearCart} = CartStore(state=>state) 
    const navigate = useNavigate()

    function handleLogOut() {
    logoutStore();
    clearCart()
        navigate('/')
      }


    return (
    <div>
         <div className={`fixed lg:static w-[80%] md:w-[40%] lg:w-full top-0 z-50 bg-white transition-all ${sidebar? '-left-0' : '-left-full'}  w-full h-full over-flow-y-scroll col-span-1 p-8 border-r`}>
            {/* <Logo/> */}
            <div className='text-center p-8'>
                <h1 className='uppercase font-bold tracking-[4px]'>Admin Board</h1>
            </div>
            <div className=' flex flex-col justify-between h-[500px]'>
            <nav>
                <ul>
                    <li>               
                      <Link to='/mainpaneladmin' 
                      className='flex items-center gap-4 hover:bg-orange-500 p-4 text-gray-400  hover:text-white rounded-lg 
                      transition-colors font-semibold'>
                       <RiShoppingBag3Line/>
                        Products
                      </Link>
                    </li>
                    <li>               
                      <Link to='/carduser' 
                      className='flex items-center gap-4 hover:bg-orange-500 p-4 text-gray-400  hover:text-white rounded-lg 
                      transition-colors font-semibold'>
                       <RiContactsLine/>
                         Users
                      </Link>
                    </li>
                    <li>               
                      <Link to='/orders' 
                      className='flex items-center gap-4 hover:bg-orange-500 p-4 text-gray-400  hover:text-white rounded-lg 
                      transition-colors font-semibold'>
                       <RiBarChartGroupedLine/>
                         Orders
                      </Link>
                    </li>
                   
                </ul>
            </nav>
            {/* menu */}
            {/* image and logout */}
            <div className='flex flex-col gap-4'>
                {/* <img src={dibujo}  alt='image'/> */}
                {/* uptade */}
                <div className='bg-orange-100 p-8 flex flex-col gap-4 rounded-3xl '>
                    <h3 className='text-xl text-center'>Sneakers</h3>
                    <p className='text-gray-500 text-center'>Admin your Page</p>
                </div>
                <button onClick={handleLogOut}
                 className='flex items-center gap-4 hover:bg-orange-500 p-4 text-gray-400  hover:text-white rounded-lg 
                 transition-colors font-semibold'>
                <RiLogoutBoxLine/>
                Logout
                </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar
