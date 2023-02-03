import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    count: [],
}

export const counterSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        increment: (state) => {
           
        },
        decrement: (state) => {
            
        }
    }
})

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;
