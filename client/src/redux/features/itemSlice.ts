

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItem } from "../../types/type";

interface items {
    items: IItem[];
}
const initialState: items = {
    items: []
}


export const cartItemsSlice = createSlice({
    name: 'Items',
    initialState,
    reducers: {
        SetItems : (state, action: PayloadAction<IItem[]>) => {
            state.items = action.payload;
        },
    }
})

export const { SetItems } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;