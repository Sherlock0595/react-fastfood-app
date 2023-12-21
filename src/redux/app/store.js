import { configureStore } from '@reduxjs/toolkit'
import filter from '../features/filterSlice'
import cart from '../features/cartSlice'
export const store = configureStore({
    reducer: {
        filter,
        cart,
    },
})