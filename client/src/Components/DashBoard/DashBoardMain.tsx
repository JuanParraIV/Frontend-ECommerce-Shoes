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
import SideBar from './SideBar'
import Navbar from '../Navbar/Navbar';

const DashBoard = () => {

  const [sidebar, setSidebar] = useState(false)
  const { token, logoutStore, clearToken} = useAuthStore();
  const{clearCart} = CartStore(state=>state) 
  const navigate = useNavigate()
  const {fetchSneakers} = useSneakerStore()
  const { profile } = useAuthStore();

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
    <div>

    <Navbar/>
    <div className='min-h-screen grid grid-col-1 lg:grid-cols-6'>
        {/* sidebar */}
        <SideBar/>
        
        {/* Btn menu movil */}
        <button onClick={handleSidebar}
         className='block lg:hidden absolute bottom-4 right-4 bg-orange-400 p-2 text-white rounded-full text-2xl'
         >
            {sidebar? <RiCloseLine /> : <RiMenu3Line/>}

        </button>
        {/* content */}
        <div className='col-span-5'>
            {/* header */}
   
        <div className='p-4 md:p-8 lg:p-12 bg-gray-100'>
            {/* Title */}
            <div>
                <h1 className='text-3xl font-semibold'>Admin Board</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols4 gap-4 items-center mb-6'>
         
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
    </div>
  )
}

export default DashBoard
