import React from 'react'
import { IItemSize } from '../types/type'

interface IListItemSize {
    item: IItemSize;
    isSelected: boolean;
    onClick: () => void;
}

const  ListItemSize : React.FC<IListItemSize> =({item, isSelected, onClick}) => {

    if(item.stock === 0){
        return (
            <li key={item._id}
                            className='cursor-pointer  p-3 border-2 border-slate-700 text-slate-700 text-center font-semibold m-1 rounded-lg '
                            >
                            {item.label}
            </li>
        )
    }
    return (

        <React.Fragment>
                {isSelected ? (
                    <li key={item._id}
                            className='cursor-pointer bg-black p-3 border-2 border-black text-center font-semibold m-1 rounded-lg text-white'
                            onClick={onClick}>
                            {item.label}
                    </li>
                ) : (
                    <li key={item._id}
                        className='cursor-pointer p-3 border-2 border-black text-center font-semibold m-1 rounded-lg '
                        onClick={onClick}>
                        {item.label}
                    </li>

                )}
        </React.Fragment>

    )
}

export default ListItemSize;
