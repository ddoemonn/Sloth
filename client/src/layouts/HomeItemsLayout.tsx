import React from 'react'
import { IItem } from '../types/type';
import { useNavigate } from 'react-router-dom';

interface IItemsArray {
    items: IItem[]
}
const  HomeItemsLayout: React.FC<IItemsArray> = ({items}) => {
    
    return (
        <ul className='grid grid-cols-5  w-full gap-1  sm:place-items-center overflow-hidden opacity-50'>
        {items.map((item: IItem, index: number) => {
            const imageUrl = `http://localhost:4000/api/items/img/${item.imagePath}`;
            if(index < 10){
                return (
                    <li
                        key={item._id}
                        className='mx-2 w-[220px] shrink border-[1px] cursor-pointer inline rounded-xl hover:border-blue-500 p-1 ml-2 overflow-hidden '
                        
                    >
                        <aside className='relative aspect-w-1 aspect-h-1'>
                            <img
                                src={imageUrl}
                                className='w-[200px] h-[200px] object-scale-down hover:scale-125 transition duration-500'
                                alt={item.name}
                            />
                        </aside>
                    
                    </li>
                );
            }
            
        })}
        </ul>
    )
}

export default HomeItemsLayout;
