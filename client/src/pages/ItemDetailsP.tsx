import axios from 'axios';
import React from 'react'
import {  useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setIndex, setItemState, setSelectedSize } from '../redux/features/itemDetailSlice';
import ItemDetails from '../components/Item/ItemDetails';
import NewItemAddedModal from '../components/Item/NewItemAddedModal';


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

  React.useEffect(() => {
    dispatch(setItemState(null)) 
    if(item){
      console.log(item.data)
      dispatch(setItemState(item.data))
      dispatch(setSelectedSize(Array(item.data.size.length).fill(false)))
      const Index: number = JSON.parse(localStorage.getItem('Index') || '0');
      dispatch(setIndex(Index + 1))
    }

    

}, [item])

  if (isLoading) {
    return <div>Loading...</div>;
}

if (isError) {
    return <div>Error loading data.</div>;
}
  return (
    <section className='flex justify-center  flex-col md:mt-20 md:flex-row'>  
      <ItemDetails  /> 
      <NewItemAddedModal/>
    </section>
  )
}
