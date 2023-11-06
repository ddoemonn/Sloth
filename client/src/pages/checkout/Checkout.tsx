import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom'
import { RootState } from '../../redux/store';
import CartItemsList from '../../components/CheckOut/CartItemsList';
import { getCartItemsFromLocalStorage } from '../../functions';

export default function Checkout() {
    const CartItems = useSelector((state: RootState) => state.CartItems.cartItems);
    const dispatch = useDispatch();
    useEffect(() => {
        
        
    }, []); 

    return (
    <section className='flex justify-around'>
        <section className='flex flex-col flex-1 mt-20 border-r-2 border-slate-200'>
            <Link to="/" className='font-extrabold font-geo text-5xl hover:underline w-full text-center'>
                APRICOT</Link>  
            <nav className='m-7 mb-4 text-lg font-semibold w-full '>
                <ul className='flex justify-center mr-12'>
                    <Link to='/checkout' className='mx-2 hover:underline cursor-pointer'>{` Information`}</Link>{'>'}
                    <Link to='/checkout/shipping' className='mx-2 hover:underline cursor-pointer'> {` Shipping`}</Link>{'>'}
                    <li className='mx-2 hover:underline cursor-pointer'> {` Payment`}</li>
                </ul>
                
            </nav>
            <Outlet />
            

        </section>
        <section className='mt-20'>
            <CartItemsList CartItems={CartItems} />
        </section>
    </section>
    )
}
