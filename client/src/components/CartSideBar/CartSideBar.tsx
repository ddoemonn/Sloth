import { Link } from "react-router-dom";
import CartItemsList from "./CartItems";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { SetCartItems } from "../../redux/features/cartItemSlice";

interface CartSideBarProps {
    toggleCart: () => void;
    isCartOpen: boolean;
}

export default function CartSideBar({ toggleCart, isCartOpen} : CartSideBarProps) {
    const CartItems = useSelector((state: RootState) => state.CartItems.cartItems);
    const dispatch = useDispatch();

    React.useEffect(() => {

        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
            const parsedCartItems = JSON.parse(savedCartItems);
            dispatch(SetCartItems(parsedCartItems));
        }
    }, []); 
    return (
        <>
            {isCartOpen && (
            <section className='fixed inset-0 bg-gray-800 bg-opacity-60 flex flex-col items-end z-[100]  '>
                <section className='w-[350px] bg-white flex justify-between h-[%10] '>
                    <h2 className='text-3xl p-3 inline '>Cart</h2>
                    <h2 onClick={toggleCart} className=' text-right p-3 text-xl  hover:underline'>X</h2>
                
                </section>
                {CartItems.length > 0 ? (
                    <CartItemsList toggleCart={toggleCart} /> 
                ) : (
                    <section className='w-[350px] h-full bg-white pt-10 p-5 flex flex-col items-center'>
                        <h4 className='text-lg text-center font-semibold mb-3 '>Your cart is currently empty</h4>
                        <button className='bg-black rounded-lg w-11/12 text-white text-base'
                                onClick={toggleCart}><Link to='/' > CONTINUE SHOPPING</Link></button>
                    </section>
                )}
                

                
                
            </section>
            )}
        </>
    )
}