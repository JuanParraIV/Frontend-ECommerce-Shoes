import { useSneakerStore } from '@/App/store/useSneakerStore'
import React from 'react'
import CardDashboar from '../CardDashBoard/CardDashBoard'




const CardsDashboard = () => {

  const { sneakers} = useSneakerStore(state => state)
  return (
    <div>
        {sneakers?.map(p=> (
          <CardDashboar key={p.id} name={''} grid_picture_url={''} retail_price_cents={0} stock={0} brand_name={''}   /> 
        ))}
    </div>
  )
}

export default CardsDashboard