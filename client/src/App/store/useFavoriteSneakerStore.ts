import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useFetchAllSneaker } from '../hooks/useSneakers'
import { SneakersType } from '@/Typing/Sneakers.type'
import api from '@/Api/backend_sneakers'

export interface FavoriteSneakerStoreState {
  favoriteSneakerIds: number[]
  addFavoriteSneaker: (id: number) => void
  removeFavoriteSneaker: (id: number) => void
}
export const FavoriteSneakerStore = create(
  persist<FavoriteSneakerStoreState>(
    set => ({
      favoriteSneakerIds: [],
      addFavoriteSneaker: (id: number) =>
        set(state => ({
          favoriteSneakerIds: [...state.favoriteSneakerIds, id],
        })),
      removeFavoriteSneaker: (id: number) =>
        set(state => ({
          favoriteSneakerIds: state.favoriteSneakerIds.filter(sneakerId => sneakerId !== id),
        })),
    }),
    {
      name: 'favorite-sneakers',
    },
  ),
)
