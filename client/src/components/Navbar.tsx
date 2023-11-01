import React from 'react'
import ICON from './sloth.png'
export default function Navbar() {
    return (
        <header>
            <nav>
                <ul className='flex font-montserrat p-2 pt-2 font-semibold text-sm'>
                    <li className='p-2 m-2 flex'>
                    <   img src={ICON} alt="sloth icon" width={50} className='mr-2'/>
                        <p className='mt-2 font-bold'>SLOTH</p>
                    </li>
                    <li className='p-2 m-2 mt-4 text-slate-500'>All</li>
                    <li className='p-2 m-2 mt-4 text-slate-500'>Shirts</li>
                    <li className='flex-1 p-2 m-2 mt-4 text-slate-500'>Drinkware</li>
                    <li className='p-2 m-2 mt-4 text-slate-500'>Search</li>
                    <li className='p-2 m-2 mt-4 text-slate-500'>Cart</li>
                </ul>
            </nav>
        </header>
    )
}
