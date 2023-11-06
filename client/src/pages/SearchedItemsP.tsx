import React, { useEffect, useState } from 'react'
import CategoryList from '../components/SearchPage/CategoryList';
import SortByList from '../components/SearchPage/SortByList';
import FilteredItemList from '../components/SearchPage/FilteredItemList';
import { useNavigate, useParams } from 'react-router-dom';
import {  filterItemsByCategory } from '../redux/features/itemSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setFirstVisit } from '../redux/features/visitSlice';

export default function SearchP() {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const firstVisit = useSelector((state: RootState) => state.visit.firstVisit);

    useEffect(() => {
        if (firstVisit) {
            dispatch(setFirstVisit(false)); 
            navigate('/search'); 
        } 
        
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
