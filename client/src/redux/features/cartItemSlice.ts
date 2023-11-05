

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem, IItem } from "../../types/type";

interface cartItems {
    cartItems: ICartItem[];
}
const initialState: cartItems = {
    cartItems: [],
}


export const cartItemsSlice = createSlice({
    name: 'Items',
    initialState,
    reducers: {
        SetItems : (state, action: PayloadAction<ICartItem[]>) => {
            state.cartItems = action.payload
        },
        AddToCart: (state, action: PayloadAction<ICartItem>) => {
            const newItem = action.payload;
            const existingItemIndex = state.cartItems.findIndex(item => item._id === newItem._id);

            if (existingItemIndex !== -1) {
                // If item already exists in cart, increment count
                state.cartItems[existingItemIndex].count += 1;
            } else {
                // If item is not in cart, add it with count 1
                state.cartItems = [...state.cartItems, { ...newItem, count: 1 }];
            }
        },
        IncrementCount: (state, action: PayloadAction<string>) => {
            const itemId = action.payload;
            const selectedItem = state.cartItems.find(item => item._id === itemId);
    
            if (selectedItem) {
                selectedItem.count += 1;
            }
        },
        DecrementCount: (state, action: PayloadAction<string>) => {
        const itemId = action.payload;
        const selectedItem = state.cartItems.find(item => item._id === itemId);
    
        if (selectedItem && selectedItem.count > 1) {
            selectedItem.count -= 1;
            }
        },

    }
})

export const { SetItems, AddToCart, IncrementCount, DecrementCount} = cartItemsSlice.actions;

export default cartItemsSlice.reducer;