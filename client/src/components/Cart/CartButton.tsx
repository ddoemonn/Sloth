import React from 'react'
import {BiMinus, BiPlus} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export default function CartButton({count} : {count: number}) {

    return (
        <aside className="inline-flex font-extrabold text-base text-slate-700 w-1/3 justify-between border-[1px]  rounded-xl p-1">
            <button  className='hover:text-blue-800'><BiMinus className='' /></button>
            <button className="mx-2 font-semibold">{count}</button>
            <button  className='hover:text-blue-800'><BiPlus /></button>
        </aside>
    )
}
