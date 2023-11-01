import React, { useEffect, useState } from 'react'
import { IItem } from '../types/type'

export default function SearchP() {
  const [items, setItems] = useState <IItem[]>([])
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`http://localhost:4000/api/items`)
      const json = await response.json();

      if(response.ok) setItems(json)
      
    }

    fetchItems();
  },[])

  useEffect(() => {
    console.log(items)
  }, [items])
  
  return (
    <main>
      <ul className='flex flex-wrap justify-center'>
        {items.map((item: IItem) => {
          return (
            <li key={item._id}>
              <img src={`http://localhost:4000/api/items/img/${item.imagePath}`} width={200} className='h-[300px]'/>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </li>
          )
        })}
    </ul>

    </main>
  )
}
