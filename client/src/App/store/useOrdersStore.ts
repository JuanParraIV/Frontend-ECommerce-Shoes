import { create } from 'zustand'
import api from '@/Api/backend_sneakers'
import { persist } from 'zustand/middleware'
import { OrderTypes  } from '@/Typing/Order.type'

type State = {
    token: string  
    SneakersOrders: OrderTypes[]
    User: OrderTypes[]
  }

export interface OrdersStoreState {   
    getOrders: () => Promise<void>
}

export const useOrderStore = create(
    persist<State & OrdersStoreState>(
        (set, get) => ({
            SneakersOrders: [],
            User: [],
            token: '',
           getOrders:  async() => {
            const {data} = await api.get('/transaction', {
                headers: {
                    Authorization: `Bearer ${get().token}`,
                },
              })
            set(state=> ({...state, SneakersOrders: data}))
           }
        }),
        {
            name: 'orders-sneaker',
         },
    )
)