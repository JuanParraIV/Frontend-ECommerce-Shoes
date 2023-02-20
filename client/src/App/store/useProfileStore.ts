import { LoginData } from '@/Components/Login/Login'
import { create } from 'zustand'
import api from '@/Api/backend_sneakers'
import { persist } from 'zustand/middleware'
import { UserType  } from '@/Typing/Users.type'


export interface ProfileStoreState{
    
    users: UserType[]
    getUsers: () => Promise<void>
  
}


export const useUsersStore = create(
    persist<ProfileStoreState>(
        (set, get) => ({
            users: [],
            getUsers: async () => {
                const { data } = await api.get<UserType[]>('/user')
                set(state => ({ ...state, users: data }))
              },
            }),
            {
              name: 'users-store',
            },
            )
)