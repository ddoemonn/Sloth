import axios from 'axios';
import React from 'react'
import {  useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IItem } from '../types/type';
import ImgLayout from '../layouts/ImgLayout';
import ItemInfo from '../components/ItemDetails/ItemInfo';
import ItemSıze from '../components/ItemDetails/ItemSıze';


export default function ItemDetailsP() {
      const { id } = useParams();
      const itemUrl = `http://localhost:4000/api/items/${id}`;

      const { data: item, isLoading, isError } = useQuery(
        ['items',id], 
        () => axios.get(itemUrl),
        {
          refetchOnWindowFocus: false,
        }
        );

      const dispatch = useDispatch();

      if (isLoading) {
        return <div>Loading...</div>;
    }

    console.log(item)

    if (isError) {
        return <div>Error loading data.</div>;
    }
    const imageUrl = `http://localhost:4000/api/items/img/${item?.data.imagePath}`;
    let itemData: IItem = item?.data;
      return (
        <>  
        {itemData && (
          <main className='flex  justify-center ml-20 mt-14 w-11/12'>
                <ImgLayout imageUrl={imageUrl} />
                <aside className='w-6/12 '>
                  <ItemInfo itemData={itemData}/>
                  {itemData.size.length > 1 && (
                    <>
                      <h2 className='font-semibold ml-5 text-lg'>SIZE</h2>
                      <ItemSıze itemData={itemData} />
                    </>
                    
                  )}      
                  
                </aside>


          
          </main>
        )}


        </>
      )
}
