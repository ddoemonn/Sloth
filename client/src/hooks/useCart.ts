import React from 'react';
import { ICartItem, IItem, IItemSize } from '../types/type';

interface CartItemWithValidation {
    cartItem: ICartItem;
}

export const useCart = (item: IItem, selectedIndex: number | null): CartItemWithValidation => {

    if (selectedIndex === null) {
        if (item.size.length === 0) {
            
            return {
                cartItem: {
                    name: item.name,
                    description: item.description,
                    color: item.color,
                    price: item.price,
                    category: item.category,
                    size: { label: 'One Size', stock: 5, _id: '1' },
                    imagePath: item.imagePath,
                    _id: item._id,
                    count: 0,
                },
            };
        } else {
            return {
                cartItem: {} as ICartItem, 
            };
        }
    } else {
        return {
            cartItem: {
                name: item.name,
                description: item.description,
                color: item.color,
                price: item.price,
                category: item.category,
                size: item.size[selectedIndex],
                imagePath: item.imagePath,
                _id: item._id,
                count: 0,
            },
        };
    }
};
