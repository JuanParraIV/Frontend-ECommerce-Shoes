import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import api from '@/Api/backend_sneakers'
import { CategoryType } from '@/Typing/Category.type'

export interface CategoryStoreState {
  Category: CategoryType[]
  fetchCategories: () => Promise<void>
}
export const CategorySneakerStore = create(
  persist<CategoryStoreState>(
    set => ({
      Category: [],
      fetchCategories: async () => {
        const { data } = await api.get<CategoryType[]>('/category/all')

        set(state => ({ ...state, Category: data }))
      },
    }),
    {
      name: 'category-sneakers',
    },
  ),
)
