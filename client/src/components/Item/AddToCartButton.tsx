import React from 'react';
import { IItem, IItemCount, IItemSize} from '../../types/type';
import { setErr, setIndex, setIsOpen, toggleCart } from '../../redux/features/itemDetailSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addCartItem } from '../../redux/features/cartItemSlice';

const AddToCartButton: React.FC = () => {
  const dispatch = useDispatch();
  const pageItemState = useSelector((state: RootState ) => state.PageItem.pageItem);

  const addToCart = (item: IItem) => {
    const Item =  {
        ...item,
        _id: `${item._id}${pageItemState.index}`,
        size: [pageItemState.itemSize] as IItemSize[],
        
    }
    if(pageItemState.itemSize.label !== 'A'){
        dispatch(setErr(''))
        dispatch(addCartItem(Item))
        
        const cartItems: IItemCount[] = JSON.parse(localStorage.getItem('cartItems') || '[]');
        if(cartItems.length > 0){
          let temp: number = 0;
          cartItems.forEach((element: IItemCount) => {
            console.log(element.count)
            if(element.name === Item.name && element.size[0].label === Item.size[0].label){
                element.count = element.count + 1
                temp = 1
            }
          });
          if(temp !== 1){
            cartItems.push({...Item, count: 1});
          }
        }else{
          cartItems.push({...Item, count: 1});
        }

        

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('Index', JSON.stringify(pageItemState.index) )
        console.log('Item', Item)
        dispatch(toggleCart())

    }
    if(pageItemState.itemSize.label === 'A'){
        dispatch(setErr('You have to choose size!'));
    }
    
}

  return (
  <>
    <button onClick={() => {
              setIsOpen(true);
              if(pageItemState.itemState !== null) addToCart(pageItemState.itemState);
              dispatch(setIndex(pageItemState.index + 1));
            }}
            className='bg-black rounded-lg text-white p-2 w-full m-5 ml-0 text-2xl font-semibold'>
              Add to Bag
    </button>
  </>
  )
};

export default AddToCartButton;
