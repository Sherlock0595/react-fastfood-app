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
        setCurrentPage: (state, action) =>{
            state.currentPage=action.payload
        }
    }
},
);



export const { setCategoryId, setSort, setSearchValue, setCurrentPage } = filterSlice.actions

export default filterSlice.reducer