import { ICartItems, IItem } from "../../types/type";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ICartItems = {
    cartItems: []
}


export const cartItemsSlice = createSlice({
    name: 'CartItems',
    initialState,
    reducers: {
        addCartItem: (state, action: PayloadAction<IItem>) => {
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        },
        setCartItems : (state, action: PayloadAction<IItem[]>) => {
            state.cartItems = action.payload;
        },
        deleteCartItem: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item._id !== action.payload)
            }
        }
    }
})

export const { addCartItem,  setCartItems ,deleteCartItem} = cartItemsSlice.actions;

export default cartItemsSlice.reducer;