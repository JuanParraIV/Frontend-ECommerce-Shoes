import { BrandType } from './../../Typing/Brand.type'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import api from '@/Api/backend_sneakers'

export interface BrandStoreState {
  Brand: BrandType[]
  fetchBrands: () => Promise<void>
}
export const BrandSneakerStore = create(
  persist<BrandStoreState>(
    set => ({
      Brand: [],
      fetchBrands: async () => {
        const { data } = await api.get<BrandType[]>('/brand/all')

        set(state => ({ ...state, Brand: data }))
      },
    }),
    {
      name: 'Brand-sneakers',
    },
  ),
)
