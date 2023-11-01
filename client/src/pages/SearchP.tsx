import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { SetItems } from '../redux/features/itemSlice';
import { RootState } from '../redux/store';
import ItemList from '../components/SearchPage/ItemList';
import CategoryList from '../components/SearchPage/CategoryList';
import SortByList from '../components/SearchPage/SortByList';

export default function SearchP() {

    return (
      <main className='flex'>
        <CategoryList />
        <ItemList />
        <SortByList />
      </main>
    )
  }
