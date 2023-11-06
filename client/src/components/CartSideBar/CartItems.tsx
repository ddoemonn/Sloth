import React from 'react'
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export default function CartItems({toggleCart} : {toggleCart: () => void}) {
    const CartItems = useSelector((state: RootState) => state.CartItems.cartItems);
    const [price, setPrice]  = React.useState<number>(0);

    React.useEffect(() => {
        let totalPrice = 0;
        CartItems.forEach(item => {
            totalPrice += item.price;
        });
        setPrice(totalPrice);
        console.log(CartItems)
    }, [CartItems])
    return (
        <>
        <ul className='bg-white w-[450px] h-full p-4 overflow-y-scroll'>
                    {CartItems.map((item, index) =>{
                        return <CartItem item={item} key={`${item._id}${index}`}/>
                    })}
                    
        </ul>
        {price > 0 && (
                        <section className='bg-white w-[450px] '>
                        <aside className='flex justify-between'>
                            <h2>Total</h2>
                            <h3>{price}</h3>
                        </aside>
                        <button className='bg-black w-full rounded-xl border-2 border-black m-1 text-white text-2xl'
                                >Check out</button>
                        <button className='b w-full rounded-xl border-2 m-1 border-black text-2xl'
                                onClick={() => {
                                    //navigate('/cart');
                                    toggleCart();
                                }}>Go to cart</button>
                        </section>
                    )}
        </>
    )
}
