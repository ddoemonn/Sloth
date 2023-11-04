import React from 'react'
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const CartButtons: React.FC = ()  => {
    const navigate = useNavigate();
    const CartItems = useSelector((state: RootState) => state.CardItems.cartItems);
    return (
        <aside className='flex justify-around'>
                <button onClick={() => navigate('/cart')}
                        className='m-0 mr-2 border-2 text-xl font-semibold border-black rounded-xl w-6/12'>
                    Cart ({CartItems.length})
                </button>
                <button className='m-0 mr-2 border-2 rounded-xl text-xl font-semibold border-black bg-black w-6/12 text-white'>
                    Check Out
                </button>
        </aside>
    )
}

export default CartButtons;
