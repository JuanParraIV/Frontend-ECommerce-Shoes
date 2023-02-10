import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { useState } from 'react';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import { SneakersType } from '@/Typing/Sneakers.type';
import { pid } from 'process';





export interface ShoppingSneakerStoreState {
    products1:number[]
    addProduct: (id: number) => void
    // decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    total:number
   
  }


  export const ShoppingCartStore = create(
    persist<ShoppingSneakerStoreState>((set,get)=>
    
    ({
      products1:[],
      cartQuantity: 0,
      total:0,
      addProduct: 
      (obj) =>{
      const checkRepeat = get().products1.some(
        (e) => e.id === obj.id
      )
      if(checkRepeat===false){
        set(state =>({
          cartQuantity: state.cartQuantity+=1,
          products:  state.products1.push(obj),
          total: state.total += obj.price
          
        }))
      }else{
        alert("ya esta")
      }
     },
      // decreaseCartQuantity: (id: number) => set(state => ({
      //   cartQuantity: state.cartQuantity - 1
      // })),
      
      removeFromCart: ({
        remove,
      })=>{
        const removeItem = get().products1.filter(
          (i, index) => index !== remove
        );
        set(state =>({
        products1: state.products1=removeItem,
        cartQuantity:state.cartQuantity=state.products1.length,
        total:state.total = state.products1.reduce(
          (acumulador, actual) => acumulador + actual.price,
          0
        )
      })) 
      
    }}),
    {
        name: 'shopping-cart',
    },
    ),

    )