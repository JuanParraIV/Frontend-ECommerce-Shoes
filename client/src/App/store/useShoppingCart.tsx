import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { useState } from 'react';
import { createListenerMiddleware } from '@reduxjs/toolkit';





export interface ShoppingSneakerStoreState {
    addProduct: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    total:number
   
  }


  export const ShoppingCartStore = create(
    persist<ShoppingSneakerStoreState>((set)=>
    
    ({
      products:[],
      cartQuantity: 0,
      total:0,
      addProduct: (quantity) => set(state => (
        {
        cartQuantity: state.cartQuantity+=1
        
      })),
      decreaseCartQuantity: (id: number) => set(state => ({
        cartQuantity: state.cartQuantity - 1
      })),
      
      removeFromCart: (id: number) => 
      set(state => ({
        cartQuantity: 0
      }))
    }),
    {
        name: 'shopping-cart',
    },
    ),

    )