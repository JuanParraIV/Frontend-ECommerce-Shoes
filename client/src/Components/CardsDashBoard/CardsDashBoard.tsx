import { useSneakerStore } from '@/App/store/useSneakerStore'
import { SneakersType } from '@/Typing/Sneakers.type'
import React, { useEffect } from 'react'
import CardDashboar from '../CardDashBoard/CardDashBoard'




const CardsDashboard = () => {

  const { sneakers, fetchSneakers} = useSneakerStore(state => state)
  console.log(sneakers)


  useEffect(()=>{
    fetchSneakers()
  },[])
 
  return (
    <div>
        {sneakers?.map((product: SneakersType)=> (
          product.isBanned===false? (
            <CardDashboar key={product.id} product={product}  /> 
            
          ):null

          

          
        ))}
    </div>
  )
}

export default CardsDashboard