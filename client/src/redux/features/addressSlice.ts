import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AddressForm from "../../components/CheckOut/AddressForm";

interface AddressForm {
    email: string;
    firstName: string;
    lastName: string;
    company: string;
    address: string;
}

interface AdressValues {
    addressValues: AddressForm;
}
const initialState: AdressValues = {
    addressValues :{email: '',
                    firstName: '',
                    lastName: '',
                    company: '',
                    address: ''}
};

const addressFormSlice = createSlice({
    name: 'addressForm',
    initialState,
    reducers: {
        setAddressValues: (state, action: PayloadAction<AddressForm>) => {
            state.addressValues = action.payload
        },
    },
});

export const { setAddressValues } = addressFormSlice.actions;
export default addressFormSlice.reducer;