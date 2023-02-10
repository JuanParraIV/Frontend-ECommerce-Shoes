import { create } from 'zustand'
import api from '@/Api/backend_sneakers'
import { persist } from 'zustand/middleware'
import { SneakersType } from '@/Typing/Sneakers.type'
export interface SneakerStoreState {
  sneakers: SneakersType[]
  sneakersByName: SneakersType[]
  singleSneaker: SneakersType
  fetchSneakers: () => Promise<void>
  fetchSneakersByName: (query: string) => Promise<void>
  fetchingSingleSneaker: (id: number) => Promise<void>
  clearSingleSneaker: () => void
}
export const fetchAllSneaker = async () => {}
export const useSneakerStore = create(
  persist<SneakerStoreState>(
    (set, get) => ({
      sneakers: [],
      sneakersByName: [],
      singleSneaker: {} as SneakersType,

      fetchSneakersByName: async (name: string) => {
        const { data } = await api.get<SneakersType[]>(`sneakers?name=${name}`)
        set(state => ({ ...state, sneakersByName: data }))
      },
      fetchSneakers: async () => {
        const { data } = await api.get<SneakersType[]>('/sneakers/all')

        set(state => ({ ...state, sneakers: data }))
      },
      fetchingSingleSneaker: async (id: number) => {
        const { data } = await api.get<SneakersType>(`sneakers/${id}`)
        set(state => ({ ...state, singleSneaker: data }))
      },
      clearSingleSneaker: () => {
        set(state => ({ ...state, singleSneaker: {} as SneakersType }))
      },
    }),
    {
      name: 'store-sneaker',
    },
  ),
)
