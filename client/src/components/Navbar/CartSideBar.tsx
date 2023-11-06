import { Link } from "react-router-dom";
import CartItemsList from "../CartSideBar/CartItems";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

interface CartSideBarProps {
    toggleCart: () => void;
    isCartOpen: boolean;
}

export default function CartSideBar({ toggleCart, isCartOpen} : CartSideBarProps) {
    const CartItems = useSelector((state: RootState) => state.CartItems.cartItems);
    return (
        <>
            {isCartOpen && (
            <section className='fixed inset-0 bg-gray-800 bg-opacity-60 flex flex-col items-end  z-50 '>
                <section className='w-[450px] bg-white flex justify-between'>
                    <h2 className='text-3xl mt-1 font-semibold inline p-3 '>Cart</h2>
                    <button onClick={toggleCart} className=' text-right p-3 text-xl font-semibold hover:underline'>Close cart X</button>
                
                </section>
                {CartItems.length > 0 ? (
                    <CartItemsList toggleCart={toggleCart} /> 
                ) : (
                    <section className='w-[450px] h-full bg-white pt-10'>
                        <h4 className='text-2xl text-center font-semibold w-full'>Your cart is currently empty</h4>
                        <button className='bg-black rounded-lg w-11/12  text-white text-2xl'
                                onClick={toggleCart}><Link to='/' > CONTINUE SHOPPING</Link></button>
                    </section>
                )}
                

                
                
            </section>
            )}
        </>
    )
}