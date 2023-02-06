import { create } from 'zustand';
import { useFetchAllSneaker } from '../hooks/useSneakers';
import { SneakersType } from '@/Typing/Sneakers.type';
import api from '@/Api/backend_sneakers';

export interface StoreState {
  sneakers: SneakersType[];
  fetchSneakers: (query: string) => void;
}
export const useStore = create((set, get) => ({
  sneakers: [],
  fetchSneakers: async (name: string) => {
    const { data } = await api.get<SneakersType[]>(`/sneakers/?name=${name}`);
    set((state: StoreState) => ({ ...state, sneakers: data }));
  },
  setSneakers: async () => {
    const { data } = useFetchAllSneaker();
    set((state: StoreState) => ({ ...state, sneakers: data }));
  },
}));
