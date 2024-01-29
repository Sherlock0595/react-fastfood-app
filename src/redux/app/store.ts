import { configureStore } from '@reduxjs/toolkit'
import filter from '../features/filterSlice'
import cart from '../features/cartSlice'
import pizza from '../features/pizzaSlice'
import { useDispatch } from 'react-redux';
export const store = configureStore({
    reducer: {
        filter,
        cart,
        pizza,
    },
});

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>()