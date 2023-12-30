import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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

export const selectFilter = (state) => state.filter

export const { setCategoryId, setSort, setSearchValue, setCurrentPage, setFilters } = filterSlice.actions

export default filterSlice.reducer