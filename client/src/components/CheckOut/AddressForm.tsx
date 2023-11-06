import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const AddressFormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    company: Yup.string(),
    address: Yup.string().required('Address is required'),
});

interface FormValues {
    email: string;
    firstName: string;
    lastName: string;
    company: string;
    address: string;
}

const AddressForm: React.FC = () => {
    const navigate = useNavigate();

    const formik = useFormik<FormValues>({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            company: '',
            address: '',
        },
        validationSchema: AddressFormSchema,
        onSubmit: values => {
            console.log(values);
            navigate('/checkout/shipping');
        },
    });

    return (
        <form className='mx-auto w-9/12' onSubmit={formik.handleSubmit}>
            {formik.touched.email && formik.errors.email && <aside className="text-red-500">{formik.errors.email}</aside>}
            <input 
                type="text"
                placeholder='Email'
                className='w-[99.5%] p-2 text-xl border-2 border-slate-300 rounded-xl py-1 mb-3'
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.touched.firstName && formik.errors.firstName && <aside className="text-red-500">{formik.errors.firstName}</aside>}
            <input 
                type="text"
                placeholder='First Name'
                className='lg:w-[49.5%]  w-[99.5%] mr-1 p-2 text-xl border-2 border-slate-300 rounded-xl py-1 mb-3'
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
            
            <input 
                type="text"
                placeholder='Last Name'
                className='lg:w-[49.5%] w-[99.5%] p-2 text-xl border-2 border-slate-300 rounded-xl py-1 mb-3'
                name="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName && <aside className="text-red-500">{formik.errors.lastName}</aside>}
            <input 
                type="text"
                placeholder='Company (Optional)'
                className='w-[99.5%] p-2 text-xl border-2 border-slate-300 rounded-xl py-1 mb-3'
                name="company"
                onChange={formik.handleChange}
                value={formik.values.company}
            />
            {formik.touched.address && formik.errors.address && <aside className="text-red-500">{formik.errors.address}</aside>}
            <input 
                type="text"
                placeholder='Address'
                className='w-[99.5%] p-2 text-xl border-2 border-slate-300 rounded-xl py-1 mb-3'
                name="address"
                onChange={formik.handleChange}
                value={formik.values.address}
            />
            
            <button 
                type="submit"
                className='hover:shadow-md hover:shadow-emerald-300 w-[99.5%] mx-auto p-2 py-1 bg-black text-white text-lg font-semibold rounded-xl'>
                Continue to shipping
            </button>
        </form>
    );
}

export default AddressForm;
