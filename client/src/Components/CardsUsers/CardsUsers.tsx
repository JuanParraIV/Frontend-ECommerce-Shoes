import { useAuthStore } from '@/App/store/useAuthStore';
// import { useUsersStore } from '@/App/store/useProfileStore';
import React from 'react'
import CardUser from '../CardUser/CardUser';





const CardsUsers = () => {
    // const {users} = useUsersStore(state=> state);
    const {token, users}= useAuthStore(state=> state)
              // console.log("token en Profiles",token)
    console.log('perfiles', users)
    
  return (
    <div>
      {
        <CardUser userName={''} firstName={''} lastName={''} contactNumber={''} buyerAddress={''} email={''} password={''} dni={''} rol={''}/>
      }
    </div>
  )
}

export default CardsUsers
