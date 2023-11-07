
import axios from 'axios';
import './style.css'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetCategories, SetItems } from './redux/features/itemSlice';
import { useQuery } from 'react-query';
import { IItem } from './types/type';
import { fetchData } from './functions';
import { setFirstVisit } from './redux/features/visitSlice';
import { RootState } from './redux/store';
import ICON from './slothmg.png'
import { BiCartAlt } from "react-icons/bi"
const App: React.FC = () => {
    const dispatch = useDispatch();

    const { data: items, isLoading, isError } = useQuery('items', fetchData);
    const pageItems = useSelector((state: RootState) => state.Items.items)

    React.useEffect(() => {
        dispatch(setFirstVisit(false));
        if (items && pageItems.length === 0) {
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
      
       
        <main className='  flex  flex-col '>

       

        
    
            

            <section className=' flex w-full justify-center '>
            {pageItems.map((item: IItem, index: number) => {
                const imageUrl = `http://localhost:4000/api/items/img/${item.imagePath}`;
                

                if( index < 6){
                return (
                    <img
                    key={index}
                    src={imageUrl}
                    className='rounded-full  h-[180px] object-contain mr-10 overflow-hidden '
                    alt={item.name}
                    />
                );
                }
            })}
            </section>
            <article className='text-5xl  text-center my-4'>
            <h1 className='text-6xl font-bold font-pen text-slate-700 my-2'>SLOTH</h1>
            <h2>We stay on top</h2>
            <h2>so you can be on top</h2>
            </article>

            <aside className='flex flex-col w-full justify-center text-center text-3xl font-semibold text-blue-900 font-pen'>
                <p className='b-5'>Refined | Original | Versatile</p>
                
            </aside>

            <button className='cursor-pointer bg-blue-600 shadow-xl shadow-blue-600 hover:shadow-blue-900 hover:border-blue-900 text-white rounded-2xl p-2 inline-flex mx-auto font-montserrat border-2 border-blue-600 my-6 mt-4'>
                Discover Now!
            </button>


            <section className=' flex w-full justify-center '>
            {pageItems.map((item: IItem, index: number) => {
                const imageUrl = `http://localhost:4000/api/items/img/${item.imagePath}`;
                

                if( index > 7){
                return (
                    <img
                    key={index}
                    src={imageUrl}
                    className='rounded-full  h-[180px] object-contain mr-10 overflow-hidden '
                    alt={item.name}
                    />
                );
                }
            })}
            </section>

        

        
    
        </main>

        
    );
};

export default App;
