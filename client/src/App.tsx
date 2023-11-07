
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
        <main className='overflow-hidden h-[80vh] flex p-3'>

            <section className='w-3/4 ml-10'>
                <header className='h-[100px]'>
                <img src={ICON} alt="sloth" width={90} className='object-contain inline mb-6'/>
                    <h1 className='text-6xl font-bold ml-5 mt-10 font-pen   mb-5 inline'>Sloth</h1>
                    
                </header>
                   
                    
                    
                
                <p className='text-green-800 text-2xl ml-20 mr-32 font-semibold font-montserrat '>Discover eco-friendly essentials from sustainable clothing to biodegradable drinkware, 
                    earth-conscious footwear, and green stickers—all on our one-stop eco-commerce site.</p>
                    
            
                <aside className='bg-black   text-right ml-96 mt-7 shadow-lg hover:shadow-green-800 cursor-pointer p-3 inline-flex rounded-2xl  text-3xl'>
                    <BiCartAlt className='bg-white rounded-2xl p-1 text-4xl mt-[2px] ' />
                    <h2 className='  text-white ml-2 font-light '>Buy Now!</h2>
                </aside>
            </section>
            

            <section className=' flex flex-col justify-center w-1/4'>
            {pageItems.map((item: IItem, index: number) => {
                const imageUrl = `http://localhost:4000/api/items/img/${item.imagePath}`;
                

                if( index < 3){
                return (
                    <img
                    key={index}
                    src={imageUrl}
                    className='rounded-full w-[160px] h-[190px] object-scale-down mr-48 '
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
