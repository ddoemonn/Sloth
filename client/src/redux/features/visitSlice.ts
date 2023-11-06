
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface VisitState {
    firstVisit: boolean;
}

const initialState: VisitState = {
    firstVisit: true,
};

export const visitSlice = createSlice({
    name: 'visit',
    initialState,
    reducers: {
        // Use the PayloadAction type to specify the type of `action.payload`
        setFirstVisit: (state, action: PayloadAction<boolean>) => {
        state.firstVisit = action.payload;
        },
    },
});

export const { setFirstVisit } = visitSlice.actions;

export default visitSlice.reducer;
