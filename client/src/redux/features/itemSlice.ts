

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItem } from "../../types/type";

interface items {
    items: IItem[];
    categories: string[];
    filteredItems: IItem[];
}
const initialState: items = {
    items: [],
    categories: [],
    filteredItems: [],
}


export const cartItemsSlice = createSlice({
    name: 'Items',
    initialState,
    reducers: {
        SetItems : (state, action: PayloadAction<IItem[]>) => {
            state.filteredItems = action.payload
            state.items = action.payload;
        },
        SetCategories : (state, action: PayloadAction<string[]>) => {
            state.categories = action.payload;
        },

        filterItemsByCategory : (state, action: PayloadAction<string>) => {
            state.filteredItems = state.items.filter(item => item.category === action.payload);
        },
    }
})

export const { SetItems, SetCategories, filterItemsByCategory } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;