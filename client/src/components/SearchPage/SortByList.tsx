import React, { useState } from 'react';
import ListItem from '../ListItem';
import { IItem } from '../../types/type';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { SetItems } from '../../redux/features/itemSlice';

const SortByList: React.FC = () => {
    const [activeItem, setActiveItem] = useState<string>('Relevance');
    const items = useSelector((state: RootState) => state.Items.items);
    const dispatch = useDispatch();

    const sortItems = (sortBy: string) => {
        let sortedArray: IItem[] = [];

        if (sortBy === 'Trending') {
            sortedArray = items.slice().sort((a, b) => {
                return b.size.length - a.size.length ;
            });
        }
        else if (sortBy === 'Relevance') {
            sortedArray = items.slice().sort((a, b) => {
                return  new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            });
        }
        else if (sortBy === 'Latest arrivals') {
            sortedArray = items.slice().sort((a, b) => {
                return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime() ;
            });
        }else if (sortBy === 'Price: Low to high') {
            sortedArray = items.slice().sort((a, b) => {
                return a.price - b.price;
            });
        } else if (sortBy === 'Price: High to low') {
            sortedArray = items.slice().sort((a, b) => {
                return b.price - a.price;
            });
        }

        if(sortedArray.length > 1) dispatch(SetItems(sortedArray))
    }

    const handleItemClick = (item: string) => {
        setActiveItem(item);
        sortItems(item);
    };

    return (
        <section className='w-2/12 pl-10 font-semibold'>
        <h2 className='text-sm text-slate-500'>Sort By</h2>
        <ul>
            <ListItem text='Relevance' isActive={activeItem === 'Relevance'} onClick={() => handleItemClick('Relevance')} />
            <ListItem text='Trending' isActive={activeItem === 'Trending'} onClick={() => handleItemClick('Trending')} />
            <ListItem text='Latest arrivals' isActive={activeItem === 'Latest arrivals'} onClick={() => handleItemClick('Latest arrivals')} />
            <ListItem text='Price: Low to high' isActive={activeItem === 'Price: Low to high'} onClick={() => handleItemClick('Price: Low to high')} />
            <ListItem text='Price: High to low' isActive={activeItem === 'Price: High to low'} onClick={() => handleItemClick('Price: High to low')} />
        </ul>
        </section>
    );
};

export default SortByList;
