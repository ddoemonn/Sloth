
import axios from 'axios';
import './style.css'
import React from 'react';
import { useDispatch } from 'react-redux';
import { SetCategories, SetItems } from './redux/features/itemSlice';
import { useQuery } from 'react-query';
import { IItem } from './types/type';
import { fetchData } from './functions';
import { setFirstVisit } from './redux/features/visitSlice';


const App: React.FC = () => {
    const dispatch = useDispatch();

    const { data: items, isLoading, isError } = useQuery('items', fetchData);

    React.useEffect(() => {
        dispatch(setFirstVisit(false));
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
        <React.Fragment >
            <h2>hey sşkkko</h2>
        
    
        </React.Fragment>
        
    );
};

export default App;
