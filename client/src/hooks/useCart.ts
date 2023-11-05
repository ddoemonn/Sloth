import React from 'react'
import { IItem, IItemSize } from '../types/type'

export const useCart = (item : IItem, selectedIndex: number | null ) =>  {
    if(selectedIndex === null){
        return {
            name: item.name,
            description: item.description,
            color: item.color,
            price: item.price,
            category: item.category,
            size: {label:'One Size', stock:5, _id: '1'},
            imagePath: item.imagePath,
            _id: item._id,
            count: 0
        }
    }else {
        return {
            name: item.name,
            description: item.description,
            color: item.color,
            price: item.price,
            category: item.category,
            size: item.size[selectedIndex],
            imagePath: item.imagePath,
            _id: item._id,
            count: 0
        }
    }
}


