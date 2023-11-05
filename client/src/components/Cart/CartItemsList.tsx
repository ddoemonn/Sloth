import { useEffect, useState } from 'react'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export default function CartItemsList({toggleCart} : {toggleCart: () => void}) {
    const [price, setPrice]  = useState<number>(0);
    const dispatch = useDispatch();
    const CartItems = useSelector((state: RootState) => state.CardItems.cartItems)

    const navigate = useNavigate();

    useEffect(() => {
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
                        <section className='bg-white w-[450px] text-base '>
                        <aside className='flex justify-between'>
                            <h2>Total</h2>
                            <h3>{(price)}</h3>
                        </aside>
                        <button className='bg-black w-11/12 rounded-xl border-2 border-black m-1 text-white '
                                onClick={() => navigate('/checkout') }>Check out</button>
                        <button className=' w-11/12 mx-auto rounded-xl border-2 m-1 border-black '
                                onClick={() => {
                                    navigate('/cart');
                                    toggleCart();
                                }}>Go to cart</button>
                        </section>
                    )}
        </>
    )
}
