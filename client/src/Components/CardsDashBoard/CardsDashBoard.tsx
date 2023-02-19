import { useSneakerStore } from '@/App/store/useSneakerStore'
import { SneakersType } from '@/Typing/Sneakers.type'
import React from 'react'
import CardDashboar from '../CardDashBoard/CardDashBoard'




const CardsDashboard = () => {

  const { sneakers} = useSneakerStore(state => state)
 
  return (
    <div>
        {sneakers?.map((product: SneakersType)=> (
          <CardDashboar key={product.id} product={product}  /> 
        ))}
    </div>
  )
}

export default CardsDashboard