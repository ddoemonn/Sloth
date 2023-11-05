import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { IItemSize } from '../../types/type';
import { setErr, setItemSize, setSelectedSize } from '../../redux/features/itemDetailSlice';


const SizeButtons: React.FC = () => {
    const dispatch = useDispatch();
    const pageItemState = useSelector((state: RootState ) => state.PageItem.pageItem);
    
    const handleClick = (itemSize: IItemSize, Index: number) => {
        dispatch(setItemSize(itemSize))
        dispatch(setErr(''))

        const updatedSizes = pageItemState.selectedSizes.map((item, index)  => {
            if( index === Index) return true ;
            else return false;
        })

        dispatch(setSelectedSize(updatedSizes));
    }
    
    return(
    <>
        <ul className='flex'>
        {pageItemState.itemState?.size.map((item, index) => (
            <React.Fragment key={item._id}>
                {pageItemState.selectedSizes[index] === true ? (
                                <button
                                key={item._id}
                                onClick={() => handleClick(item, index)}
                                className='mr-5  cursor-pointer font-semibold bg-black text-white p-2 rounded-md border-2 border-black'
                                >
                                {item.label}
                                </button>
                ) : (
                    <button
                    key={item._id}
                    onClick={() => handleClick(item, index)}
                    className='mr-5  cursor-pointer font-semibold  p-2 rounded-md border-2 border-black'
                    >
                    {item.label}
                    </button>

                )}
            </React.Fragment>

        ))}
        </ul>
    </>)
};

export default SizeButtons;

