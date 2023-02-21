import { LoginData } from '@/Components/Login/Login'
import { create } from 'zustand'
import api from '@/Api/backend_sneakers'
import { persist } from 'zustand/middleware'
import { UserType  } from '@/Typing/Users.type'
import { useAuthStore } from './useAuthStore'


export interface ProfileStoreState{
    
    users: UserType[]
    getUsers: () => Promise<void>
  
}


export const useUsersStore = create(
    persist<ProfileStoreState>(
        (set, get) => ({
            users: [],
            getUsers: async () => {
              const {token}= useAuthStore(state=> state)
              console.log("token en Profiles",token)
                const { data } = await api.get<UserType[]>('/user',{ headers: {
                  // 'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`
                }})
                set(state => ({ ...state, users: data }))
              },
            }),
            {
              name: 'users-store',
            },
            )
)