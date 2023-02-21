import React, { useEffect } from 'react'
import { useOrderStore } from '@/App/store/useOrdersStore'

const Orders = () => {

  const { SneakersOrders, getOrders} = useOrderStore(state=> state); 
  console.log("orders",SneakersOrders)

useEffect(()=> {
  getOrders()
},[])

  return (
    <div>
      Orders
    </div>
  )
}

export default Orders
