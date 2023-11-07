import axios from 'axios';
import React from 'react'
import {  useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IItem } from '../types/type';
import ImgLayout from '../layouts/ImgLayout';
import ItemInfo from '../components/ItemDetails/ItemInfo';
import ItemSıze from '../components/ItemDetails/ItemSıze';
import { RootState } from '../redux/store';
import NewItemModal from '../components/ItemDetails/NewItemModal';


export default function ItemDetailsP() {
      const [isCartOpen, setIsCartOpen] = React.useState<boolean>(false)
      const { id } = useParams();
      const itemUrl = `http://localhost:4000/api/items/${id}`;
      const cartItems = useSelector((state: RootState) => state.CartItems.cartItems)

      const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

      React.useEffect(() => {

        const timeoutId = setTimeout(() => {
          setIsCartOpen(false); 
        }, 36000); 
  
        return () => {
          clearTimeout(timeoutId);
        };

        
      }, [cartItems])

      const { data: item, isLoading, isError } = useQuery(
        ['items',id], 
        () => axios.get(itemUrl),
        {
          refetchOnWindowFocus: false,
        }
        );

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
          <main className='flex  justify-center flex-wrap mx-auto mt-14 w-11/12 overflow-hidden '>
                <ImgLayout imageUrl={imageUrl} />
                <aside className=' mb-10 md:mb-0 w-[28rem]'>
                  <ItemInfo itemData={itemData}/>
  
                  
                  <ItemSıze itemData={itemData} toggleCart={toggleCart} />
      
                </aside>
                {isCartOpen && (
                    <NewItemModal toggleCart={toggleCart}/>
                )}
                

          
          </main>
        )}


        </>
      )
}
