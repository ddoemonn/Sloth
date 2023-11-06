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
        <ul className='bg-white w-[350px] h-full p-1 overflow-y-scroll z-30'>
                    {CartItems.map((item, index) =>{
                        return <CartItem item={item} key={`${item._id}${index}`}/>
                    })}
                    
        </ul>
        {price > 0 && (
                        <section className='bg-white w-[350px] text-base flex flex-col justify-center items-center p-3 h-[30%]'>
                            <article className='flex justify-between w-[300px] '>
                                <h2 className='p-2'>Total</h2>
                                <h3 className='font-semibold text-lg p-2'>{`$${price.toFixed(2)} USD`}</h3>
                            </article>
                            <button className='bg-black w-[300px] rounded-xl p-2 border-2 border-black m-1  text-white '
                                    >Check out</button>
                            <button className='w-[300px] rounded-xl p-2 border-2 m-1  border-black '
                                    onClick={() => {
                                        //navigate('/cart');
                                        toggleCart();
                                    }}>Go to cart</button>
                        </section>
                    )}
        </>
    )
}
