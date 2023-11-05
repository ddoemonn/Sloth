import { configureStore } from '@reduxjs/toolkit';
import ItemsReducer from './features/itemSlice'
import CartItemsReducer from './features/cartItemSlice'


export const store = configureStore({
    reducer: {
        Items: ItemsReducer,
        CartItems: CartItemsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;