import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


const ItemInfo: React.FC = () => {
  const pageItemState = useSelector((state: RootState ) => state.PageItem.pageItem);
  return (
  <>
  {pageItemState.itemState && (
    <>
        
        <p className='text-2xl mb-3'>{pageItemState.itemState.name}</p>
        <p className='font-bold text-3xl mb-3'>{pageItemState.itemState.description}</p>
        <p className='font-semibold mb-3'>{pageItemState.itemState.color}</p>
        <p className='text-2xl font-semibold mb-3'>{pageItemState.itemState.price}</p>
    </>
  ) }

  </>
  )
};

export default ItemInfo;
