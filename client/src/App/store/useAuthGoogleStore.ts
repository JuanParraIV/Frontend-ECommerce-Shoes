import { create } from 'zustand'
import api from '@/Api/backend_sneakers'
import { persist } from 'zustand/middleware'

interface userGoogleType {
  locale: string
  sub: string
  updated_at: string
  email: string
  family_name: string
  given_name: string
  email_verified?: boolean | undefined
  name: string
  nickname: string
  picture: string
}

interface LoginData {
  nickname:string
  email:string
}

type State = {
  isAuthenticated: boolean
  token: string
  profile: userGoogleType
}
export interface Actions {
  setToken: (token: string) => void
  setProfile: (profile: any) => void
  authLogin: () => Promise<void>
  postUserGoogle: () => Promise<void>
  getProfile: () => Promise<void>
  clearToken: () => void
}
export const useGoogleAuthStore = create(
  persist<State & Actions>(
    (set, get) => ({
      isAuthenticated: false,
      token: '',
      profile: {} as userGoogleType,
      setToken: (token: string) => set(state => ({ token })),
      setProfile: (profile: userGoogleType) => set(state => ({ ...state, isAuthenticated: true, profile })),
      authLogin: async () => {
        const { email, nickname } = get().profile;
        const { data } = await api.post('/auth/login/google', {
          email,
          nickname,
        }, {
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
      postUserGoogle: async () => {
        const { email, family_name, given_name, name, nickname, picture } = get().profile;
        await api.post('/userGoogle', {
          email,
          family_name,
          given_name,
          name,
          nickname,
          picture,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
      },
      clearToken: () => {
        set(state => ({ ...state, token: '' }))
      },
    }),
    {
      name: 'AuthGoogle-store',
    },
  ),
)
