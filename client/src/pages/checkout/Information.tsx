import React from 'react'
import AddressForm from '../../components/CheckOut/AddressForm'
import { Link } from 'react-router-dom'

export default function Information() {
    return (
        <>
        <nav className='m-7 mb-4 text-lg font-semibold w-full '>
                <ul className='flex justify-center mr-12 text-xl'>
                    <li className='mx-2  cursor-pointer font-bold underline'>{` Information`}</li>{'>'}
                    <li className='mx-2  cursor-pointer'> {` Shipping`}</li>{'>'}
                    <li className='mx-2  cursor-pointer'> {` Payment`}</li>
                </ul>
                
            </nav>
        <aside className='flex justify-between mx-auto mb-3 w-9/12'>
                <p className='text-2xl  '>Contact</p>
        </aside>
        <AddressForm />
        </>
    )
}

/*


*/
