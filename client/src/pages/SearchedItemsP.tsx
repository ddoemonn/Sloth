import React, { useEffect, useState } from 'react'
import CategoryList from '../components/SearchPage/CategoryList';
import SortByList from '../components/SearchPage/SortByList';
import FilteredItemList from '../components/SearchPage/FilteredItemList';
import { useParams } from 'react-router-dom';
import { filterItemsByCategory } from '../redux/features/itemSlice';
import { useDispatch } from 'react-redux';

export default function SearchP() {
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => { 
        if(params.category) dispatch(filterItemsByCategory(params.category))
    },[params])

    return (
        <main className='flex'>
            <CategoryList />
            <FilteredItemList />
            <SortByList />
        </main>
    )
  }
