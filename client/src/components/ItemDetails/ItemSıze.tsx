import React from 'react'
import { IItem } from '../../types/type'
import ListItemSize from '../../layouts/ListItemSize'

export default function ItemSıze({itemData} : {itemData : IItem}) {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState<number | null>(null);

    const handleItemClick = (index: number) => {
        setSelectedItemIndex(index);
    };
    return (
        <React.Fragment>
        <ul className='inline-flex m-5 mt-0' >
            {itemData.size.map((item,index) => {
                return <ListItemSize item={item} isSelected={selectedItemIndex === index} key={index} 
                                        onClick={() => handleItemClick(index)}/>
            })}
        </ul>
        {itemData && selectedItemIndex !== null && itemData.size[selectedItemIndex].stock !== 0 && (
            <p className=' font-semibold text-lg inline'>{itemData.size[selectedItemIndex].stock} items left</p>
        )}

        </React.Fragment>
    )
}  
