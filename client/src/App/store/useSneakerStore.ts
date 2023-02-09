import { create } from 'zustand'
import { useFetchAllSneaker, useFetchByNameSneaker } from '../hooks/useSneakers'
import { SneakersType } from '@/Typing/Sneakers.type'
import api from '@/Api/backend_sneakers'
import { useQuery } from '@tanstack/react-query'
import { persist } from 'zustand/middleware'

export interface SneakerStoreState {
  sneakers: SneakersType[]
  sneakersByName: SneakersType[]
  singleSneaker: SneakersType[]
  fetchSneakers: () => void
  fetchSneakersByName: (query: string) => void
  fetchingSingleSneaker: (query: number) => void
  clearSingleSneaker: () => void
}
export const fetchAllSneaker = async () => {}
export const useSneakerStore = create(
  persist<SneakerStoreState>(
    (set, get) => ({
      sneakers: [],
      sneakersByName: [],
      singleSneaker: [],

      fetchSneakersByName: async (name: string) => {
        const { data } = await api.get<SneakersType[]>(`sneakers?name=${name}`)
        set(state => ({ ...state, sneakersByName: data }))
      },
      fetchSneakers: async () => {
        const { data } = await api.get<SneakersType[]>('/sneakers/all')

        set(state => ({ ...state, sneakers: data }))
      },
      fetchingSingleSneaker: async (id: number) => {
        const { data } = await api.get<SneakersType[]>(`sneakers/${id}`)
        set(state => ({ ...state, singleSneaker: data }))
      },
      clearSingleSneaker: ()=>{
        set(state => ({  ...state, singleSneaker: [] }))
      }
    }),
    {
      name: 'store-sneaker',
    },
  ),
)
