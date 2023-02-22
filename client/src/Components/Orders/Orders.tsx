import React, { useEffect } from 'react'
import { useAuthStore } from '@/App/store/useAuthStore';
import carritoVacio from '../../assets/icons-cart/carritovacio.png';
import {RiArrowLeftLine} from "react-icons/ri"; 
import SideBar from '../DashBoard/SideBar';
import Navbar from '../Navbar/Navbar';


const Orders = () => {

  const { SneakersOrders, getOrders, setToken, token} = useAuthStore(state=> state); 
  console.log("orders",SneakersOrders)
  console.log(token)

useEffect(()=> {
  getOrders()
  // setToken()
},[])

  return (

    <div>
     <Navbar/>
    <div className='min-h-screen grid grid-col-1 lg:grid-cols-5'>
        <SideBar/>
    <div className='col-span-4'>

    <body className="antialiased font-sans bg-gray-100">
    <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
         
            <div>
                <h2 className="text-2xl font-semibold leading-tight">Orders</h2>
            </div>
           
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    {
                        SneakersOrders.length < 1 && (
                            <div>
                                <h1>No Orders</h1>
                                <img src={carritoVacio} alt='empty shopping cart' width='100px' height='100px' />
                            </div>
                            
                        )
                    }
                              {SneakersOrders?.map((order)=> (

                          <div>
                            <p> {order.cus_name}</p>
                            <p> {order.cus_email}</p>
                            <p> {order.cus_city}</p>
                            <p> {order.cus_phone}</p>
                            <p> {order.cus_address}</p>
                            <p className='text-red-500 whitespace-no-wrap'> Total: {order.cost}</p>

                                
                              
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    User Info
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Color
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Order
                                </th>
                              
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    QUANTITY
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    DETAIL
                                </th>
                            </tr>
                        </thead>            
                           {order.sneaker.map((o)=> (                 
                           <tr>
                           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            
                             <p className="text-gray-900 whitespace-no-wrap">Brand: {o.brand_name} Category: {o.category_name}</p>
                           </td>
                             <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                 <div className="flex items-center">    
                                  <div className="ml-3">
                                      <p className="text-gray-900 whitespace-no-wrap"> {o.color}</p>
                   
                                  </div>
                              </div>
                           </td>
                           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                      <img src={o.grid_picture_url} alt='Products Image' width='50px'/>
                            
                            {/* <p className="text-gray-900 whitespace-no-wrap">Brand: {o.brand_name} Category: {o.category_name}</p> */}
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                      <p className="text-gray-900 whitespace-no-wrap">{o.quantity}</p>
                            
                            {/* <p className="text-gray-900 whitespace-no-wrap">Brand: {o.brand_name} Category: {o.category_name}</p> */}
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                      {/* <p className="text-gray-900 whitespace-no-wrap">Detail:</p> */}
                                      <p className="text-gray-900 whitespace-no-wrap">{o.details}</p>
                            
                            {/* <p className="text-gray-900 whitespace-no-wrap">Brand: {o.brand_name} Category: {o.category_name}</p> */}
                          </td>
                           
                       </tr>
                           ))}             
                    </table>   
                    </div>              
                    ))}
                </div>
            </div>
        </div>
    </div>
</body>
    </div>
     
    </div>
    </div>
  )
}

export default Orders
