import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


const NewItemDetails: React.FC = ()  => {
    const pageItemState = useSelector((state: RootState ) => state.PageItem.pageItem);
    let imageUrl: string | undefined;

    if (pageItemState.itemState?.imagePath) {
        imageUrl = `http://localhost:4000/api/items/img/${pageItemState.itemState.imagePath}`;
    }
    return (
        <article className='flex mb-5 text-base'>
              {imageUrl && <img   src={imageUrl} 
                                alt="Item" 
                                className='w-[150px] h-[145px] object-scale-down '
                        />}
            <aside className='mt-7'>
                <p className=' font-medium  leading-none'>{pageItemState.itemState?.name}</p>
                <p className='- font-medium mb-1 leading-none'>
                    Size {pageItemState.itemSize?.label} {pageItemState.itemState?.category}
                </p>
                <p className='- font-bold  leading-none'>
                    {pageItemState.itemState?.price && pageItemState.itemState.price}
                </p>
            </aside>
        </article>
    )
}

export default NewItemDetails
