import { Outlet } from 'react-router-dom';
import './style.css'
import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useMemo } from 'react';
import { SetCategories, SetItems } from './redux/features/itemSlice';
import { IItem } from './types/type';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';
import React from 'react';



const fetchData = async () => {
    const response = await axios.get('http://localhost:4000/api/items');
    return response.data;
};


const App: React.FC = () => {
    const dispatch = useDispatch();

    const { data: items, isLoading, isError } = useQuery('items', fetchData);

    React.useEffect(() => {
        if (items) {
            dispatch(SetItems(items));
            const uniqueCategories: string[] = Array.from(new Set(items.map((item: IItem) => item.category)));
            dispatch(SetCategories(uniqueCategories));
        }
    }, [dispatch, items]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading data.</div>;
    }


    return (
        <Outlet />

    );
};

export default App;
