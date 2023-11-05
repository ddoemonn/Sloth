import React from 'react'
import { IItem } from '../../types/type'

export default function ItemInfo({itemData} : {itemData : IItem}) {
  return (
    <article className='w-11/12 ml-5 mt-5 mb-4'>
        <h1 className='text-3xl font-semibold mb-3'>{itemData.name}</h1>
        <p className='text-lg mb-3'>{itemData.description}</p>
        <h2  className='font-semibold text-lg mb-2'>COLOR</h2>
        <p className='text-lg border-[1px] border-slate-300 inline px-2 rounded-lg '>{itemData.color}</p>
        
    </article>
  )
}
