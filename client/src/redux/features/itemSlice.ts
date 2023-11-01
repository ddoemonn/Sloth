

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItem } from "../../types/type";

interface items {
    items: IItem[];
    categories: string[]
}
const initialState: items = {
    items: [],
    categories: []
}


export const cartItemsSlice = createSlice({
    name: 'Items',
    initialState,
    reducers: {
        SetItems : (state, action: PayloadAction<IItem[]>) => {
            state.items = action.payload;
        },
        SetCategories : (state, action: PayloadAction<string[]>) => {
            state.categories = action.payload;
        },
    }
})

export const { SetItems, SetCategories } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;