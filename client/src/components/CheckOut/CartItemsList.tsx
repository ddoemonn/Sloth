import React, { useEffect, useState } from 'react'
import { ICartItem, IItem } from '../../types/type'
import CartItem from '../CartSideBar/CartItem'
import { formatPrice } from '../../functions';
import { useNavigate } from 'react-router-dom';

export default function CartItemsList({CartItems} : {CartItems: ICartItem[]}) {
    const [price, setPrice]  = useState<number>(0);
    const navigate = useNavigate();

    useEffect(() => {
        let totalPrice = 0;
        CartItems.forEach(item => {
            totalPrice += item.price * item.count;
        });
        setPrice(totalPrice);
        console.log(CartItems)
    }, [CartItems])
    return (
        <ul className='bg-white w-[450px] h-full p-4 overflow-y-scroll font-semibold '>
                    {CartItems.map((item, index) =>{
                        return <CartItem item={item} key={`${item._id}${index}`}/>
                    })}
                    {price > 0 && (
                
                        <aside className='flex justify-between text-xl font-semibold my-5'>
                            <h2>Total</h2>
                            <h3>{`$${price.toFixed(2)} USD`}</h3>
                        </aside>
                        )
            

                    }
                </ul>
    )
}
