import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { culcTotalPrice } from '../../utils/culcTotalPrice';


export type ICartItem = {
    id: string,
    title: string,
    type: string,
    price: number,
    size: number,
    count: number,
    imageUrl: string
}

interface cartSliceState {
    totalPrice: number;
    items: ICartItem[]
}

const { items, totalPrice } = getCartFromLS()

const initialState: cartSliceState = {
    totalPrice,
    items,


}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ICartItem>) => {
            const findItem = state.items.find(obj => obj.id === action.payload.id)

            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.totalPrice = culcTotalPrice(state.items)

        },
        minusItem: (state, action: PayloadAction<string>) => {
            const findItem = state.items.find((obj) => obj.id === action.payload)


            if (findItem && findItem.count > 1) {
                findItem.count--;
            }
        },

        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(obj => obj.id !== action.payload)
        },
        clearItems: (state) => {
            state.items = []
            state.totalPrice = 0;
        }
    }
},
);

export const selectCartItemById = (id: string) => (state: RootState) => state.cart.items.find((obj) => obj.id === id)
export const selectCartItem = (state: RootState) => state.cart

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions

export default cartSlice.reducer