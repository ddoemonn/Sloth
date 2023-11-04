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
        <article className='flex mb-5'>
              {imageUrl && <img   src={imageUrl} 
                                alt="Item" 
                                className='w-[250px] h-[245px] object-scale-down hover:scale-125 transition duration-500'
                        />}
            <aside className='mt-7'>
                <p className='text-2xl font-medium  leading-none'>{pageItemState.itemState?.name}</p>
                <p className='text-2xl font-medium mb-1 leading-none'>
                    Size {pageItemState.itemSize?.label} {pageItemState.itemState?.category}
                </p>
                <p className='text-2xl font-bold  leading-none'>
                    {pageItemState.itemState?.price && pageItemState.itemState.price}
                </p>
            </aside>
        </article>
    )
}

export default NewItemDetails
