import React, { useEffect } from 'react'
import { ICartItem, IItem } from '../../types/type'
import ListItemSize from '../../layouts/ListItemSize'

import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from '../../redux/features/cartItemSlice';
import { useCart } from '../../hooks/useCart';
import { RootState } from '../../redux/store';

interface ItemSizeProps {
    itemData: IItem;
    toggleCart: () => void;
}

export default function ItemSıze({itemData, toggleCart} : ItemSizeProps) {
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
        if (cartItem.name && cartItem.size) {
            const existingCartItemsJSON = localStorage.getItem('cartItems');
            const existingCartItems = existingCartItemsJSON ? JSON.parse(existingCartItemsJSON) : [];
    
            const existingItemIndex = existingCartItems.findIndex((item: ICartItem) => {
                return item._id === cartItem._id && item.size?._id === cartItem.size?._id;
            });
            
    
            if (existingItemIndex !== -1) {
                existingCartItems[existingItemIndex].count += 1;
            } else {
                existingCartItems.push({ ...cartItem, count: 1 });
            }
    
            localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
            dispatch(AddToCart(cartItem));
            toggleCart();
        } else {
            setError('Please select a size');
        }
    };
    
    return (
        <React.Fragment>
            
        <ul className='inline-flex m-5 mt-0 overflow-hidden' >
            {itemData.size.map((item,index) => {
                return <ListItemSize item={item} isSelected={selectedItemIndex === index} key={index} 
                                        onClick={() => handleItemClick(index)}/>
            })}
        </ul>
        {itemData && selectedItemIndex !== null && itemData.size[selectedItemIndex].stock !== 0 && (
    itemData.size[selectedItemIndex].stock < 6 && (
        <p className='font-semibold text-lg inline'>{itemData.size[selectedItemIndex].stock} items left</p>
    )
)}


        <button onClick={add_to_cart}
            className='bg-black rounded-lg block text-white p-2 w-64 hover:scale-105 ml-7 transition delay-200'>Add to Cart</button>
        {error.length > 2 && (
            <p className='ml-5 font-semibold mt-2 text-red-700'>{error}</p>
        )}

        </React.Fragment>
    )
}  
