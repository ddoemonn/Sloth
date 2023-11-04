import { configureStore } from '@reduxjs/toolkit';
import ItemsReducer from './features/itemSlice'
import PageItemReducer from './features/itemDetailSlice';
import CartItemReducer from './features/cartItemSlice';

export const store = configureStore({
    reducer: {
        Items: ItemsReducer,
        PageItem: PageItemReducer,
        CardItems: CartItemReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;