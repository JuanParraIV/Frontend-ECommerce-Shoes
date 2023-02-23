import { create } from 'zustand'
import api from '@/Api/backend_sneakers'
import { persist } from 'zustand/middleware'

export interface userGoogleType {
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
  isGoogleAuthenticated: boolean
  tokenGoogle: string
  profileGoogle: userGoogleType
}
export interface Actions {
  setToken: (tokenGoogle: string) => void
  setProfile: (profileGoogle: any) => void
  authLogin: () => Promise<void>
  postUserGoogle: () => Promise<void>
  getProfile: () => Promise<void>
  clearToken: () => void
  logoutGoogleStore: () => Promise<void>;
}
export const useGoogleAuthStore = create(
  persist<State & Actions>(
    (set, get) => ({
      isGoogleAuthenticated: false,
      tokenGoogle: '',
      profileGoogle: {} as userGoogleType,
      setToken: (tokenGoogle: string) => set(state => ({ tokenGoogle })),
      setProfile: (profileGoogle: userGoogleType) => set(state => ({ ...state, isGoogleAuthenticated: true, profileGoogle })),
      authLogin: async () => {
        const { email, nickname } = get().profileGoogle;
        const { data } = await api.post('/auth/login/google', {
          email,
          nickname,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        set(state => ({ ...state, tokenGoogle: data.token }))
      },
      getProfile: async () => {
        const { data } = await api.get('/user/profile', {
          headers: {
            Authorization: `Bearer ${get().tokenGoogle}`,
          },
        })
        set(state => ({ ...state, profileGoogle: data }))
      },
      postUserGoogle: async () => {
        const { email, family_name, given_name, name, nickname, picture } = get().profileGoogle;
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
        set(state => ({ ...state, tokenGoogle: '' }))
      },
      logoutGoogleStore: () => {
        return new Promise((resolve) => {
          set(() => ({
            isGoogleAuthenticated: false,
            tokenGoogle: '',
            profileGoogle: {} as userGoogleType,
          }));
          resolve();
        });
      },
    }),
    {
      name: 'AuthGoogle-store',
    },
  ),
)
