import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store';

 export enum ISortProperty {
    RATING = 'rating',
    PRICE = 'price',
    TITLE = 'title'
}

export type ISort = {
    name: string,
    sortProperty: ISortProperty,
}


export interface IfilterSliceState {
    categoryId: number;
    sort: ISort;
    searchValue: string;
    currentPage: number;
}


const initialState: IfilterSliceState = {
    categoryId: 0,
    sort: {
        name: "популярности",
        sortProperty: ISortProperty.RATING,
    },
    searchValue: '',
    currentPage: 1,


}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload
        },

        setSort: (state, action: PayloadAction<ISort>) => {
            state.sort = action.payload
        },

        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        setFilters: (state, action: PayloadAction<IfilterSliceState>) => {
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