import { configureStore } from '@reduxjs/toolkit';
import ItemsReducer from './features/itemSlice'
import CartItemsReducer from './features/cartItemSlice'
import VisitReducer from './features/visitSlice'
import AddressSlice from './features/addressSlice'


export const store = configureStore({
    reducer: {
        Items: ItemsReducer,
        CartItems: CartItemsReducer,
        visit: VisitReducer,
        Address: AddressSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;