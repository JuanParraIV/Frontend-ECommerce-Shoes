import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import api from '@/Api/backend_sneakers'
import { SneakersType } from '@/Typing/Sneakers.type'

type CartItem = SneakersType & { quantity: number }

interface CartStoreState {
  showCart: boolean
  cartItems: CartItem[]
  totalPrice: number
  totalQty: number
  alert: boolean
  item: SneakersType
  clearCart: () => void
}
interface CartStoreActions {
  addToCart: (product: SneakersType, qty: number) => void
  removeFromCart: (product: SneakersType) => void
 
}
type CartStore = CartStoreState & CartStoreActions
export const CartStore = create(
  persist<CartStore>(
    set => ({
      showCart: false,
      cartItems: [],
      totalPrice: 0,
      alert: true,
      totalQty: 0,
      item: {} as SneakersType,
      addToCart: (product: SneakersType, qty: number) => {
        const { id, retail_price_cents, ...rest } = product
        set(state => {
          const checkProductInCart = state.cartItems.find(item => item.id === id)
          const totalPrice = state.totalPrice + retail_price_cents * qty
          const totalQty = state.totalQty + qty
          let cartItems = []

          if (checkProductInCart) {
            cartItems = state.cartItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + qty }
              } else {
                return item
              }
            })
          } else {
            cartItems = [...state.cartItems, { ...product, quantity: qty }]
          }
          return {
            ...state,
            cartItems,
            totalPrice,
            totalQty,
          }
        })
        alert(`${qty} ${product.name} added to cart`)
      },
      removeFromCart: (product: SneakersType) =>
        set(state => {
          let foundProduct = state.cartItems.find(item => item.id === product.id)
          let newCartItems = state.cartItems.filter(item => item.id !== product.id)

          return {
            ...state,
            cartItems: newCartItems,
            totalPrice: state.totalPrice - (foundProduct?.retail_price_cents ?? 0) * (foundProduct?.quantity ?? 0),
            totalQty: state.totalQty - (foundProduct?.quantity ?? 0),
          }
        }),
        clearCart: () => {
          set(state => ({
            ...state,
            totalPrice: 0,
            totalQty: 0,
            cartItems:[]
          }))
        },

    }),
    {
      name: 'Cart-Store',
    },
  ),
)
