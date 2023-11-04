import React from 'react'
import { IItem } from '../../types/type';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export default function ItemList() {
    const items: IItem[] = useSelector((state: RootState) => state.Items.items);
    return (
            <ul className='flex flex-wrap  w-8/12 justify-center    '>
            {items.map((item: IItem) => {
            const imageUrl = `http://localhost:4000/api/items/img/${item.imagePath}`;
            return (
                <li key={item._id} className='mx-2 my-2 w-[250px] border-[1px]  cursor-pointer rounded-xl hover:border-blue-500 p-1 ml-2'>
                    <aside className='relative aspect-w-1  aspect-h-1 '>
                        <img
                        src={imageUrl}
                        className='w-[250px] h-[245px]  object-scale-down'
                        
                        alt={item.name}
                        />
                    </aside>
                    <article className=' border-[1px] rounded-xl text-sm  mt-1 inline-flex font-semibold '>
                        <p className='m-1  mr-2 p-1 truncate '>{item.name}</p>
                        <p className='bg-blue-500 rounded-xl p-1  m-1  text-white z-50 font-normal '>{`$${item.price.toFixed(2)} USD`}</p>
                </article>
                </li>
            );
            })}
        </ul>
    )
}
