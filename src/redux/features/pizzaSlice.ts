import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";


export const fetchPizzas = createAsyncThunk<IPizzaItem[], Record<string, string>>('pizza/fetchPizzas', async (params) => {
    const { category, search, sort, currentPage } = params;
    const { data } = await axios.get<IPizzaItem[]>(
        `https://654b7b775b38a59f28ef27f5.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sort.sortProperty}&order=desc${search}`,);

    return data;
});


 export enum Status {
    LOADING = 'loading',
    LOADED = 'loaded',
    ERROR = 'error',
}

export type IPizzaItem = {
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    types: number[],
    sizes: number[],
}

interface IPizzaSliceState {
    items: IPizzaItem[];
    status: Status
}

const initialState: IPizzaSliceState = {
    items: [],
    status: Status.LOADING
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
                state.status = Status.LOADING;
                state.items = [];
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = Status.LOADED;
            })
            .addCase(fetchPizzas.rejected, (state) => {
                state.status = Status.ERROR;
                state.items = [];
            });
    }
})

export const selectPizzaData = (state: RootState) => state.pizza

export const { setItems } = pizzaSlice.actions
export default pizzaSlice.reducer;