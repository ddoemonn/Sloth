import React from 'react'
import ICON from './sloth.png'
import Search from './Search'
import { BiCartAlt } from "react-icons/bi"
export default function Navbar() {
    return (
        <header>
            <nav>
                <ul className='flex font-montserrat p-2 px-6 font-semibold text-sm '>
                    <li className='p-2 m-2 flex'>
                    <   img src={ICON} alt="sloth icon" width={50} className='mr-2'/>
                        <p className='mt-2 font-bold hover:underline cursor-pointer'>SLOTH</p>
                    </li>
                    <li className='p-2 m-2 mt-4 text-slate-500 hover:underline cursor-pointer'>
                        All</li>
                    <li className='p-2 m-2 mt-4 text-slate-500 hover:underline cursor-pointer'>
                        Shirts</li>
                    <li className='flex-1 p-2 m-2 mt-4 text-slate-500 hover:underline cursor-pointer'>
                        Drinkware</li>
                    <Search />
                    <li className='p-2 m-2 mt-3 text-2xl hover:text-blue-800 hover:underline cursor-pointer'>
                        <BiCartAlt />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
