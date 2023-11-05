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
    const {cartItem}  = useCart(itemData, selectedItemIndex);    // custom hook
    const cartItems = useSelector((state : RootState) => state.CartItems.cartItems)
    console.log(itemData.size.length)
    React.useEffect(() => {
        console.log(cartItem)
    },[cartItem])
    
    React.useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    const [error, setError] = React.useState<string>('');

    

    const handleItemClick = (index: number) => {
        setError('')
        setSelectedItemIndex(index);
    };
    
    const add_to_cart = () => {
        if(cartItem.name ) {
            dispatch(AddToCart(cartItem))
        }else{
            setError('Please select a size')
        }
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
        {error.length > 2 && (
            <p className='ml-5 font-semibold mt-2 text-red-700'>{error}</p>
        )}

        </React.Fragment>
    )
}  
