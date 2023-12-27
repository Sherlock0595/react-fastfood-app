import { configureStore } from '@reduxjs/toolkit'
import filter from '../features/filterSlice'
import cart from '../features/cartSlice'
import pizza from '../features/pizzaSlice'
export const store = configureStore({
    reducer: {
        filter,
        cart,
        pizza,
    },
})