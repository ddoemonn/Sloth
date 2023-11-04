import React, { useState } from 'react';
import ListItem from '../../layouts/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { filterItemsByCategory } from '../../redux/features/itemSlice';
import { useNavigate } from 'react-router-dom';

const CategoryList: React.FC = () => {
    const items = useSelector((state: RootState) => state.Items.items);
    const dispatch = useDispatch();
    const categories =  useSelector((state: RootState) => state.Items.categories)
    const [activeCategory, setActiveCategory] = useState<string>('');
    const navigate = useNavigate();

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
        navigate(`/search/${category}`)
        //dispatch(filterItemsByCategory(category))
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