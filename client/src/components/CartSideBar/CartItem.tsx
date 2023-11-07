import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { ICartItem } from "../../types/type";
import { useDispatch } from "react-redux";
import { DecrementCount, DeleteCartItem, IncrementCount } from "../../redux/features/cartItemSlice";

export default function CartItem({item} : {item: ICartItem}) {
    const dispatch = useDispatch();
    const handleDecrement = () => {
        dispatch(DecrementCount(item._id));
        updateLocalStorage(item._id, item.count - 1);
    };

    const handleIncrement = () => {
        dispatch(IncrementCount(item._id));
        updateLocalStorage(item._id, item.count + 1);
    };

    const handleDelete = () => {
        dispatch(DeleteCartItem(item._id));
        updateLocalStorage(item._id, 0); // Remove the item from localStorage by setting count to 0
    };

    const updateLocalStorage = (itemId: string, count: number) => {
        const existingCartItemsJSON = localStorage.getItem('cartItems');
        const existingCartItems = existingCartItemsJSON ? JSON.parse(existingCartItemsJSON) : [];

        const updatedCartItems = count === 0
        ? existingCartItems.filter((cartItem: ICartItem) => cartItem._id !== itemId)
        : existingCartItems.map((cartItem: ICartItem) => (cartItem._id === itemId ? { ...cartItem, count } : cartItem));


        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    };

    const imageUrl = `http://localhost:4000/api/items/img/${item?.imagePath}`;
    return (
        <li  className=" text-lg bg-white flex mb-2 p-2 border-b-[1px] border-slate-400">
            <img src={imageUrl} className='w-[70px] h-[140px]  object-scale-down rounded-xl'alt={'item'}/>

            <section className="text-base w-[250px]  flex flex-col justify-end items-end ">
                <p className='font-bold text-base text-right w-full '>{`$${item.price.toFixed(2)} USD`}</p>
                
                <article className="flex justify-between text-sm font-semibold w-11/12 text-slate-700 ml-auto flex-col ">
                    <p className="inline">{item.name}</p>
                    <p className="inline">Size {item.size?.label} {item.category}</p>
                </article>

                

                <aside className="border-2 rounded-lg  w-[90px] mb-5 h-[32px] inline-flex  ">
                    <button className="mx-2   text-slate-700 hover:text-blue-700"
                            >
                            {item.count > 1 ? (
                                <FiMinus onClick={handleDecrement}/>
                            ) : (
                                <FiTrash2 onClick={handleDelete}/>
                            )}
                    </button>
                    <h4 className="mx-2  text-base mt-[2.5px]">{item.count}</h4>
                    <button className="mx-2 text-slate-700  hover:text-blue-700">
                        <FiPlus onClick={handleIncrement}/></button>
                </aside>

            
                

            </section>
      
        


            
        </li>
    )
}