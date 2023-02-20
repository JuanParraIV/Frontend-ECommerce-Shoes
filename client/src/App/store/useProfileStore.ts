import { LoginData } from '@/Components/Login/Login'
import { create } from 'zustand'
import api from '@/Api/backend_sneakers'
import { persist } from 'zustand/middleware'
import { SneakersType } from '@/Typing/Sneakers.type'

type ProfileType = {
    id?: number,
    userName: string;
    firstName: string;
    lastName: string;
    contactNumber: string;
    buyerAddress: string;
    email: string;
    password: string;
    dni: string;
    rol: string 
  }

export interface ProfileStoreState{
    
    users: ProfileType[]
    getUsers: () => Promise<void>
  
}


export const useUsersStore = create(
    persist<ProfileStoreState>(
        (set, get) => ({
            users: [],
            getUsers: async () => {
                const { data } = await api.get<ProfileType[]>('/user')
                set(state => ({ ...state, users: data }))
              },
            }),
            {
              name: 'users-store',
            },
            )
)