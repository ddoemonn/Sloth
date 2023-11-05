import { IItem, IItemSize, ItemPageState } from "../../types/type";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ItemPageState = {
    pageItem: {
        itemState: null,
        selectedSizes: [],
        isOpen: false,
        index: 0,
        itemSize: {
            label: 'A',
            stock: 5,
            _id: '0',
        },
        err: ''
    }   
    
};


export const itemDetailSlice = createSlice({
    name: 'PageItem',
    initialState,
    reducers: {
        setItemState: (state, action: PayloadAction<IItem | null>) => {
            state.pageItem.itemState = action.payload;
        },
        setSelectedSize: (state, action: PayloadAction<boolean[]>) => {
            state.pageItem.selectedSizes = action.payload;
        },
        setIsOpen: (state, action: PayloadAction<boolean>) => {
            state.pageItem.isOpen = action.payload;
        },
        setIndex: (state, action: PayloadAction<number>) => {
            state.pageItem.index = action.payload;
        },
        setItemSize: (state, action: PayloadAction<IItemSize>) => {
            state.pageItem.itemSize = action.payload; 
        },
        toggleCart: (state) => {
            state.pageItem.isOpen = !state.pageItem.isOpen;
        },
        setErr: (state, action: PayloadAction<String>) => {
            state.pageItem.err = action.payload;
        }
        },
    });

export const {
    setItemState,
    setSelectedSize,
    setIsOpen,
    setIndex,
    setItemSize,
    toggleCart,
    setErr,
} = itemDetailSlice.actions;

export default itemDetailSlice.reducer;