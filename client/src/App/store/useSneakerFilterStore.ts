import api from '@/Api/backend_sneakers'
import { SneakersType } from '@/Typing/Sneakers.type'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Filters {
  brand?: string
  category?: string
  brand_category?: string
}
export interface FilterSneakerStoreState {
  filters: Filters
  Filtered: SneakersType[]
  FilteredSorted: SneakersType[]
  filtersAdmin: Filters
  fetchAll: () => Promise<void>
  fetchByBrand: () => Promise<void>
  fetchByCategory: () => Promise<void>
  fetchByBrand_Category: () => Promise<void>
  sortByPriceAsc: () => void;
  sortByPriceDesc: () => void;
  resetSort: () => void;
  setFilters: (data: Filters) => void
  clearFilters: () => void
}
export const useFilterSneakerStore = create(
  persist<FilterSneakerStoreState>(
    (set, get) => ({
      filters: {} as Filters,
      Filtered: [],
      FilteredSorted: [],
      filtersAdmin: {} as Filters,
      setFilters: value => set(state => ({ filters: { ...state.filters, ...value } })),

      fetchAll: async () => {
        const { brand, category} = get().filters
        const { data } = await api.get<SneakersType[]>('/sneakers/all')

        set(state => ({ ...state, Filtered: data, FilteredSorted: data }))
      },
      fetchByBrand: async () => {
        const { brand } = get().filters
        const { data } = await api.get<SneakersType[]>(`sneakers/brand/${brand}`)

        set(state => ({ ...state, Filtered: data, FilteredSorted: data}))
      },
      fetchByCategory: async () => {
        const { category } = get().filters
        const { data } = await api.get<SneakersType[]>(`/sneakers/category/${category}`)
        set(state => ({ ...state, Filtered: data, FilteredSorted: data }))
      },
      fetchByBrand_Category: async () => {
        const { brand, category } = get().filters
        if (brand && category) {
          const { data } = await api.get<SneakersType[]>(`/sneakers?brand_name=${brand}&category_name=${category}`)
          set(state => ({ ...state, Filtered: data, FilteredSorted: data }))
        }
      },
      sortByPriceAsc: () => {
        set(state => {
          const sortedData = [...state.Filtered].sort((a, b) => a.retail_price_cents - b.retail_price_cents);
          return { ...state, Filtered: sortedData,};
        });
      },
      sortByPriceDesc: () => {
        set(state => {
          const sortedData = [...state.Filtered].sort((a, b) => b.retail_price_cents - a.retail_price_cents);
          return { ...state, Filtered: sortedData };
        });
      },
      resetSort: () => {
        set(state => {
          const originalData = [...state.FilteredSorted];
          return { ...state, Filtered: originalData };
        });
      },
      clearFilters: () => {
        set(state => ({ ...state, filters: {} as Filters }))
      },
    }),
    {
      name: 'store-Filters',
    },
  ),
)
