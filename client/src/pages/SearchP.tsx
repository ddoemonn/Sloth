import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { SetCategories, SetItems } from '../redux/features/itemSlice';
import { RootState } from '../redux/store';
import ItemList from '../components/SearchPage/ItemList';
import CategoryList from '../components/SearchPage/CategoryList';
import SortByList from '../components/SearchPage/SortByList';
import { useQuery } from 'react-query';
import { fetchData } from '../functions';
import { IItem } from '../types/type';
import { setFirstVisit } from '../redux/features/visitSlice';

export default function SearchP() {
  const dispatch = useDispatch();
  const pageItems = useSelector((state: RootState) => state.Items.items)

  const { data: items, isLoading, isError } = useQuery('items', fetchData);

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
      <main className='flex'>
        <CategoryList />
        <ItemList />
        <SortByList />
      </main>
    )
  }
