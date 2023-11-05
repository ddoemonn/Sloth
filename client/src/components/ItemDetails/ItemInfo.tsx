import React from 'react'
import { IItem } from '../../types/type'

export default function ItemInfo({itemData} : {itemData : IItem}) {
  return (
    <article className='w-11/12 ml-5 mt-20 mb-4'>
        <h1 className='text-3xl font-semibold mb-3'>{itemData.name}</h1>
        <p className='text-lg'>{itemData.description}</p>
    </article>
  )
}
