import { Outlet } from 'react-router-dom';
import './style.css'
import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useMemo } from 'react';
import { SetItems } from './redux/features/itemSlice';

const App: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch(`http://localhost:4000/api/items`)
            const json = await response.json();

            console.log('items',json)
    
            //console.log('fetched with useCallback', json)
    
            if (response.ok) dispatch(SetItems(json))
    
        }
        fetchItems();
    }, []);

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default App;
