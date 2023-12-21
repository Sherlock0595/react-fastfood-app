import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,



}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryId = action.payload
        },

    }
},
);



export const {  } = filterSlice.actions

export default filterSlice.reducer