import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', async (params) => {
    const { category, search, sort, currentPage} = params;
    const { data } = await axios.get(
        `https://654b7b775b38a59f28ef27f5.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sort.sortProperty}&order=desc${search}`,);
    return data;
});


const initialState = {
    items: [],
    status: 'loading'
};

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, (state) => {
                state.status = 'loading';
                state.items = [];
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchPizzas.rejected, (state) => {
                state.status = 'error';
                state.items = [];
            });
    }
})



export const { setItems } = pizzaSlice.actions
export default pizzaSlice.reducer;