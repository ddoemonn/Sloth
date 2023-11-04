import React from 'react';
import NewItemConfirmation from '../NewItemAddedModal/NewItemConfirmation';
import NewItemDetails from '../NewItemAddedModal/NewItemDetails';
import CartButtons from '../NewItemAddedModal/CartButtons';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


const NewItemAddedModal: React.FC = () => {
    const pageItemState = useSelector((state: RootState ) => state.PageItem.pageItem);
    return (
        <>
        {pageItemState.isOpen && (
            <section className='absolute  w-full  inset-0 top-20  text-3xl bg-slate-800 bg-opacity-50 flex justify-end  z-50 '>
            <section className='bg-white p-2 mr-20 mt-3 w-[25rem] h-[17rem] rounded-xl'>
                <NewItemConfirmation />
                <NewItemDetails />
                <CartButtons />
            </section>
            </section>
        )}
        </>
    );
}

export default NewItemAddedModal;
