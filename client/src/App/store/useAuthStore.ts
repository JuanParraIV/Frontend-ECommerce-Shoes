import { LoginData } from '@/Components/Login';
import { create } from 'zustand'
import api from '@/Api/backend_sneakers'
import { persist } from 'zustand/middleware'
import { SneakersType } from '@/Typing/Sneakers.type'
type State = {
  token: string
}
export interface Actions {
  authLogin: (a:LoginData)=> Promise<void>
  setToken: (token:string) => void

  clearToken: () => void
}
export const useAuthStore = create(
  persist<State & Actions>(
    (set, get) => ({
      token: "",
      setToken:(token: string) => set((state)=>({token})),
      authLogin: async (login:LoginData) => {
        const { data } = await api.post("/auth/login", JSON.stringify(login), {
          headers: {
            "Content-Type": "application/json"
          }
        })
        set((state) => ({ ...state, token: data }));
      },
      clearToken: () => {
        set(state => ({ ...state, token: "" }))
      },
    }),
    {
      name: 'Auth-store',
    },
  ),
)
