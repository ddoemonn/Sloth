import React from 'react'
import { toggleCart } from '../../redux/features/itemDetailSlice'
import { AiFillCheckCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux';

const NewItemConfirmation: React.FC = ()  => {
    const dispatch = useDispatch();
    return (
        <>
            <AiFillCheckCircle className='inline'/>
            <h2 className='w-full inline text-2xl font-geo font-bold ml-5 '>PRODUCT ADDED TO THE CART</h2>
            <button className='ml-10  text-3xl font-bold hover:text-blue-900' 
                    onClick={() =>  dispatch(toggleCart())}>X</button>
        </>
    )
}

export default NewItemConfirmation
