import React, { useState } from 'react';
import ListItem from '../ListItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { filterItemsByCategory } from '../../redux/features/itemSlice';

const CategoryList: React.FC = () => {
    const items = useSelector((state: RootState) => state.Items.items);
    const dispatch = useDispatch();
    const categories =  useSelector((state: RootState) => state.Items.categories)
    const [activeCategory, setActiveCategory] = useState<string>('');

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
        dispatch(filterItemsByCategory(category))
        // Handle category selection logic if needed
    };

    return (
        <section className='w-2/12 pl-10 font-semibold mt-6'>
        <h2 className='text-sm text-slate-500'>Collections</h2>
        <ul className='flex flex-col'>
            {categories.map((category, index) => (
            <ListItem key={index} text={category} isActive={category === activeCategory} onClick={() => handleCategoryClick(category)} />
            ))}
        </ul>
        </section>
    );
};

export default CategoryList;
