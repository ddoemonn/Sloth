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
        }, 6000); 
  
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
          <main className='flex  justify-center ml-20 mt-14 w-11/12 '>
                <ImgLayout imageUrl={imageUrl} />
                <aside className='w-6/12 '>
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
