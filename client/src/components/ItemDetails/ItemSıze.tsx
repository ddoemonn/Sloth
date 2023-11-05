import React, { useEffect } from 'react'
import { IItem } from '../../types/type'
import ListItemSize from '../../layouts/ListItemSize'

import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../../redux/features/cartItemSlice';
import { useCart } from '../../hooks/useCart';
import { RootState } from '../../redux/store';

export default function ItemSıze({itemData} : {itemData : IItem}) {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState<number | null>(null);
    const dispatch = useDispatch();
    const newItem = useCart(itemData, selectedItemIndex) // custom hook
    const cartItems = useSelector((state : RootState) => state.CartItems.cartItems)

    React.useEffect(() => console.log(cartItems),[cartItems])

    console.log(newItem)

    const handleItemClick = (index: number) => {
        setSelectedItemIndex(index);
    };
    
    const add_to_cart = () => {
        dispatch(AddToCart(newItem))
    }
    return (
        <React.Fragment>
        <ul className='inline-flex m-5 mt-0' >
            {itemData.size.map((item,index) => {
                return <ListItemSize item={item} isSelected={selectedItemIndex === index} key={index} 
                                        onClick={() => handleItemClick(index)}/>
            })}
        </ul>
        {itemData && selectedItemIndex !== null && itemData.size[selectedItemIndex].stock !== 0 && (
            <p className=' font-semibold text-lg inline'>{itemData.size[selectedItemIndex].stock} items left</p>
        )}

        <button onClick={add_to_cart}
            className='bg-black rounded-lg block text-white p-2 w-64 hover:scale-105 ml-7 transition delay-200'>Add to Cart</button>

        </React.Fragment>
    )
}  
