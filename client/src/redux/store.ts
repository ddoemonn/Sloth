import { configureStore } from '@reduxjs/toolkit';
import ItemsReducer from './features/itemSlice'

export const store = configureStore({
    reducer: {
        Items: ItemsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;