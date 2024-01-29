import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store';

 export type ISort = {
    name: string,
    sortProperty: "rating" | "price" | "title",
}


interface IfilterSliceState {
    categoryId: number;
    sort: ISort;
    searchValue: string;
    currentPage: number;
}


const initialState: IfilterSliceState = {
    categoryId: 0,
    sort: {
        name: "популярности",
        sortProperty: "rating",
    },
    searchValue: '',
    currentPage: 1,


}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryId = action.payload
        },

        setSort: (state, action) => {
            state.sort = action.payload
        },

        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setFilters: (state, action) => {
            state.sort = action.payload.sort;
            state.categoryId = Number(action.payload.categoryId);
            state.currentPage = Number(action.payload.currentPage);
        },
    }
},
);

export const selectFilter = (state: RootState) => state.filter
export const selectSort = (state: RootState) => state.filter.sort

export const { setCategoryId, setSort, setSearchValue, setCurrentPage, setFilters } = filterSlice.actions

export default filterSlice.reducer