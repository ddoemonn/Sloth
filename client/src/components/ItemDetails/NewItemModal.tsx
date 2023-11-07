import React from 'react';
import { AiFillCheckCircle, AiOutlineClose } from 'react-icons/ai';
import { ICartItem, IItem } from '../../types/type';// Import your formatPrice function
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface NewItemProps {
    toggleCart: () => void;
}

const NewItemModal: React.FC<NewItemProps> = ({toggleCart}) => {
    const cartItems = useSelector((state: RootState) => state.CartItems.cartItems);
    const [newItem, setNewItem] = React.useState<ICartItem>();

    React.useEffect(() => {
        const length = cartItems.length;
        console.log('LENs', cartItems[length - 1])
        if (length > 0) {
            setNewItem(cartItems[length - 1]);
        }
    }, [cartItems]);

    React.useEffect(() => {
        console.log(newItem)
    }, [newItem]);

    const imageUrl = `http://localhost:4000/api/items/img/${newItem?.imagePath}`;


    return (
            <section className='absolute w-full h-[100vh] inset-0 top-20 text-3xl bg-slate-800 bg-opacity-50 flex  justify-end z-50'>
            <section className='bg-white p-2 mr-20 mt-3 w-[25rem] h-[17.5rem] rounded-xl'>
                <AiFillCheckCircle className='inline' />
                <h2 className='w-full inline text-lg font-semibold ml-5'>PRODUCT ADDED TO THE CART</h2>
                <button className='ml-10 text-2xl font-semibold hover:text-blue-900'
                        onClick={toggleCart}>
                    <AiOutlineClose /></button>
                {newItem && (
                <article className='flex mb-1 '>
                    <img src={imageUrl} className='w-[105px] h-[160px] object-contain my-5 mb-2 rounded-2xl ml-3'alt={'item'}/>
                    <aside className='mt-10 ml-5'>
                        <p className='text-lg font-medium leading-none mb-1'>{newItem.name}</p>
                        <p className='text-lg font-medium mb-1 leading-none'>
                            Size {newItem.size?.label} {newItem.category}
                        </p>
                        <p  className='font-semibold text-2xl mt-3'>{`$${newItem.price.toFixed(2)} USD`}</p>
                    </aside>
                </article>
                
            )}
            <section className='flex justify-around'>
                <button 
                        className='m-0 mr-2 border-2 text-xl font-semibold border-black rounded-xl w-6/12'>
                    Cart ({cartItems.length})
                </button>
                <button className='m-0 mr-2 border-2 rounded-xl text-xl font-semibold border-black bg-black w-6/12 text-white'>
                    Check Out
                </button>
        </section>
            </section>

            
            
            </section>
        );
};

export default NewItemModal;
