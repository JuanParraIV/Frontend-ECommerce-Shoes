import { LoginData } from '@/Components/Login/Login'
import { create } from 'zustand'
import api from '@/Api/backend_sneakers'
import { persist } from 'zustand/middleware'
import { SneakersType } from '@/Typing/Sneakers.type'
import { UserType } from '@/Typing/Users.type'
import axios from 'axios'
type State = {
  token: string
  isAuthenticated: boolean
  profile: any

}
export interface Actions {
  setToken: (token: string) => void
  setProfile: (profile: any) => void
  authLogin: (a: LoginData) => Promise<string>
  getProfile: () => Promise<void>
  clearToken: () => void
  logoutStore: () => void
  getAdminProfile:()=> Promise<void>
  users: UserType[]
  getUsers: () => Promise<void>
}
export const useAuthStore = create(
  persist<State & Actions>(
    (set, get) => ({
      isAuthenticated: false,
      token: '',
      profile: null,
      users:[],
      
      setToken: (token: string) => set(state => ({ token })),
      setProfile: (profile: any) => set(state => ({ profile })),
      authLogin: async (login: LoginData) => {
        const { data } = await api.post('/auth/login', JSON.stringify(login), {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        set(state => ({ ...state, token: data.token, isAuthenticated: true }))
        return data.token;
      },
      getProfile: async () => {
        const { data } = await api.get('/user/profile', {
          headers: {
            Authorization: `Bearer ${get().token}`,
          },
        })
        set(state => ({ ...state, profile: data }))
      },
      getAdminProfile: async () => {
        const {data} = await api.get('/admin/id', {
          headers: {
            Authorization: `Bearer ${get().token}`
          }
        })
        set(state=> ({...state, profile: data}))
      },
      clearToken: () => {
        set(state => ({ ...state, token: '' }))
      },
      logoutStore: () => {
        set(state => ({
          ...state,
          isAuthenticated: false,
          token: '',
          profile: null,
        }))
      },
      getUsers: async () => {
      
          const { data } = await axios.get(" https://backend-sneakers.up.railway.app/user")
          // console.log("data en zustan",data)
          set(state => ({ ...state, users: data }))
        }
    }),
    {
      name: 'Auth-store',
    },
  ),
)
