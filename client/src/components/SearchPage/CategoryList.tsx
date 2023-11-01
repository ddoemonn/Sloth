import React, { useState } from 'react';
import ListItem from '../ListItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CategoryList: React.FC = () => {
    const items = useSelector((state: RootState) => state.Items.items);
    const uniqueCategories = Array.from(new Set(items.map(item => item.category)));
    const [activeCategory, setActiveCategory] = useState<string>('');

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
        // Handle category selection logic if needed
    };

    return (
        <section className='w-2/12 pl-10 font-semibold'>
        <h2 className='text-sm text-slate-500'>Collections</h2>
        <ul className='flex flex-col'>
            {uniqueCategories.map((category, index) => (
            <ListItem key={index} text={category} isActive={category === activeCategory} onClick={() => handleCategoryClick(category)} />
            ))}
        </ul>
        </section>
    );
};

export default CategoryList;
