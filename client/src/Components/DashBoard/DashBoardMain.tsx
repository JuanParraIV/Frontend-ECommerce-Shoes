import { useAuthStore } from '@/App/store/useAuthStore';
import { CartStore } from '@/App/store/useCartStore';
import React, {useEffect, useLayoutEffect, useState} from 'react'
import { RiDashboardLine, RiBarChartGroupedLine, RiContactsLine, RiShoppingBag3Line, RiLogoutBoxLine, 
    RiMenu3Line, RiCloseLine, RiNotificationLine, RiArrowDropDownLine, RiSearchLine, RiFilter3Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import dibujo from '../../assets/icons-DashBoard/dibujo.svg'
import CardsDashboard from '../CardsDashBoard/CardsDashBoard';
import { useNavigate } from 'react-router-dom';
import { useSneakerStore } from '@/App/store/useSneakerStore';

const DashBoard = () => {

  const [sidebar, setSidebar] = useState(false)
  const { token, logoutStore, clearToken} = useAuthStore();
  const{clearCart} = CartStore(state=>state) 
  const navigate = useNavigate()
  const {fetchSneakers} = useSneakerStore()

   function handleLogOut() {
    logoutStore();
    clearCart()
    navigate('/')
  }


  const handleSidebar = () => {
    setSidebar(!sidebar)
  }

  useEffect(()=>{
    fetchSneakers()
  },[])

  return (
    <div className='min-h-screen grid grid-col-1 lg:grid-cols-6'>
        {/* sidebar */}
        <div className={`fixed lg:static w-[80%] md:w-[40%] lg:w-full top-0 z-50 bg-white transition-all ${sidebar? '-left-0' : '-left-full'}  w-full h-full over-flow-y-scroll col-span-1 p-8 border-r`}>
            {/* <Logo/> */}
            <div className='text-center p-8'>
                <h1 className='uppercase font-bold tracking-[4px]'>Admin Board</h1>
            </div>
            <div className=' flex flex-col justify-between h-[500px]'>
            <nav>
                <ul>
                    <li>               
                      <Link to='#' 
                      className='flex items-center gap-4 hover:bg-orange-500 p-4 text-gray-400  hover:text-white rounded-lg 
                      transition-colors font-semibold'>
                       <RiShoppingBag3Line/>
                        Products
                      </Link>
                    </li>
                    <li>               
                      <Link to='#' 
                      className='flex items-center gap-4 hover:bg-orange-500 p-4 text-gray-400  hover:text-white rounded-lg 
                      transition-colors font-semibold'>
                       <RiContactsLine/>
                         Admin
                      </Link>
                    </li>
                    <li>               
                      <Link to='#' 
                      className='flex items-center gap-4 hover:bg-orange-500 p-4 text-gray-400  hover:text-white rounded-lg 
                      transition-colors font-semibold'>
                       <RiBarChartGroupedLine/>
                         History
                      </Link>
                    </li>
                   
                </ul>
            </nav>
            {/* menu */}
            {/* image and logout */}
            <div className='flex flex-col gap-4'>
                <img src={dibujo}  alt='image'/>
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
        {/* Btn menu movil */}
        <button onClick={handleSidebar}
         className='block lg:hidden absolute bottom-4 right-4 bg-orange-400 p-2 text-white rounded-full text-2xl'
         >
            {sidebar? <RiCloseLine /> : <RiMenu3Line/>}

        </button>
        {/* content */}
        <div className='col-span-5'>
            {/* header */}
        <header className='flex flex-col md:flex-row gap-4 items-center justify-between p-4 lg:pl-12 w-full'>
            {/* SearchBar */}
            <form className='w-full md:[40%] lg:w-[30%] order-1 md:order-none'>
                <div className='relative w-full'>
                    <RiSearchLine className='absolute left-2 top-3'/>
                    <input
                     type='text' 
                     className='bg-gray-100 py-2 pl-8 pr-4 outline-none rounded-lg w-full' 
                     placeholder='Buscar'/>
                </div>
            </form>
            {/* notification */}
            <nav className='w-full md:w-[60%] lg:w-[70%] flex justify-center md:justify-end'>
                <ul className='flex items-center gap-4'>
                    <li>
                        <Link to='#'>
                            <RiNotificationLine/>
                        </Link>
                    </li>
                    <li>
                        <Link to='#' className='flex items-center gap-1'>
                            Daniela Gomez <RiArrowDropDownLine/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
        {/* content */}
        <div className='p-4 md:p-8 lg:p-12 bg-gray-100'>
            {/* Title */}
            <div>
                <h1 className='text-3xl font-semibold'>Admin Board</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols4 gap-4 items-center mb-6'>
                <form className='col-span-2 '>
                    <div className='relative'>
                        <RiSearchLine className='absolute left-2 top-3 text-orange-600'/>
                        <input
                        type='text'
                        className='bg-white py-2 pl-8 pr-4 outline-none w-full'
                        placeholder='Search'/>
                    </div>
                </form>
            
            <form className='col-span-1'> 
                <div className='relative'>
                    <RiFilter3Line className='absolute left-2 top-3 text-orange-600'/>
                    <input
                    type='text'
                    className='bg-white py-2 pl-8 pr-4 outline-none w-full'
                    placeholder='Filters'/>           
                </div>
            </form>
            <Link to='/formCreateProduct'>
            <button className='relative text-m pl-8 pr-4 flex items-center gap-4 hover:bg-orange-500 p-4 text-gray-400  hover:text-white rounded-lg 
                      transition-colors font-semibold'>
                Add Product
            </button>
            </Link>
            </div>
            {/* cards */}
            <div>
                <CardsDashboard />
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default DashBoard
