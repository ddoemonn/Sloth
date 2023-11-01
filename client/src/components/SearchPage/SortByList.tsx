import React, { useState } from 'react';
import ListItem from '../ListItem';

const SortByList: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('Relevance');

    const handleItemClick = (item: string) => {
        setActiveItem(item);
        // Handle sorting logic based on the clicked item if needed
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
