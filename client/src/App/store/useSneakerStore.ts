import { create } from 'zustand';
import { useFetchAllSneaker, useFetchByNameSneaker} from '../hooks/useSneakers';
import { SneakersType } from '@/Typing/Sneakers.type';
import api from '@/Api/backend_sneakers';

export interface SneakerStoreState {
  sneakers: SneakersType[];
  sneakersByName: SneakersType[];
  fetchSneakers: (query:string) => void;
  fetchSneakersByName:(query:string) => void;
}
export const useStore = create((set, get) => ({
  sneakers: [],
  sneakersByName: [],
  fetchSneakersByName: async (name: string) => {
    const { data } = await api.get<SneakersType[]>(`sneakers?name=${name}`)
    set((state: SneakerStoreState) => ({ ...state, sneakersByName: data, sneakers: data }));
  },
  fetchSneakers: async () => {
    const { data } =  await useFetchAllSneaker();
    set((state: SneakerStoreState) => ({ ...state, sneakers: data }));
  },
}));
