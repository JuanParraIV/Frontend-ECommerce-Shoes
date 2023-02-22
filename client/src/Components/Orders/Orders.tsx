import React, { useEffect } from 'react'
import { useAuthStore } from '@/App/store/useAuthStore';

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
           <body className="antialiased font-sans bg-gray-200">
    <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
            <div>
                <h2 className="text-2xl font-semibold leading-tight">Orders</h2>
            </div>
           
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    User Info
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Product Info
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Order
                                </th>
                              
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    
                                </th>
                            </tr>
                        </thead>            
                      {SneakersOrders?.map((order)=> (
                           <tr>
                           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                               <div className="flex items-center">
                                  
                                   <div className="ml-3">
                                       <p className="text-gray-900 whitespace-no-wrap">{order.cus_name}</p>
                                       <p className="text-gray-900 whitespace-no-wrap">{order.cus_address}</p>
                                       <p className="text-gray-900 whitespace-no-wrap">{order.cus_city}</p>
                                       <p className="text-gray-900 whitespace-no-wrap">{order.cus_email}</p>
                                       <p className="text-gray-900 whitespace-no-wrap">{order.cus_phone}</p>
                                   </div>
                               </div>
                           </td>
                           {order.sneaker.map((o)=> (                 
                           <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                               <div className="flex items-center">    
                                   <div className="ml-3">
                                       <p className="text-gray-900 whitespace-no-wrap">Brand: {o.brand_name} Category: {o.category_name}</p>
                                       <p className="text-gray-900 whitespace-no-wrap">color: {o.color}</p>
                                       <p className="text-gray-900 whitespace-no-wrap">Detail: {o.details}</p>
                                       <img src={o.grid_picture_url} alt='Products Image' width='50px'/>
                                       <p className="text-gray-900 whitespace-no-wrap">Detail:</p>
                    
                                   </div>
                               </div>
                           </td>
                                       ))}
                           
                       </tr>
                        ))}
                    </table>                 
                </div>
            </div>
        </div>
    </div>
</body>
    </div>
  )
}

export default Orders
