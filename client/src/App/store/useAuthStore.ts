import { LoginData } from '@/Components/Login/Login'
import { create } from 'zustand'
import api from '@/Api/backend_sneakers'
import { persist } from 'zustand/middleware'
import { SneakersType } from '@/Typing/Sneakers.type'
type State = {
  token: string
  profile: any
}
export interface Actions {
  setToken: (token: string) => void
  setProfile: (profile: any) => void
  authLogin: (a: LoginData) => Promise<void>
  getProfile: () => Promise<void>
  clearToken: () => void
}
export const useAuthStore = create(
  persist<State & Actions>(
    (set, get) => ({
      token: '',
      profile: null,
      setToken: (token: string) => set(state => ({ token })),
      setProfile: (profile: any) => set(state => ({ profile })),
      authLogin: async (login: LoginData) => {
        const { data } = await api.post('/auth/login', JSON.stringify(login), {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        set(state => ({ ...state, token: data.token }))
      },
      getProfile: async () => {
        const { data } = await api.get('/user/profile', {
          headers: {
            Authorization: `Bearer ${get().token}`,
          },
        })
        set(state => ({ ...state, profile: data }))
      },
      clearToken: () => {
        set(state => ({ ...state, token: '' }))
      },
    }),
    {
      name: 'Auth-store',
    },
  ),
)
