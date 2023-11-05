import { useDispatch } from "react-redux";
import { formatPrice, getCartItemsFromLocalStorage } from "../../functions"
import { IItem } from "../../types/type"
import { FiTrash2 } from "react-icons/fi";
import { deleteCartItem } from "../../redux/features/cartItemSlice";
import CartButton from "./CartButton";

export default function CartItem({item} : {item: IItem}) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteCartItem(item._id))
        const items = getCartItemsFromLocalStorage();
        const updatedCartItems = items.filter((cartItem: IItem) => cartItem._id !== item._id);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
    }

    let imageUrl: string | undefined;
    if (item.imagePath) {
        imageUrl = `http://localhost:4000/api/items/img/${item.imagePath}`;
    }

    console.log('ITEM',item)

    return (
        <li  className="flex flex-col items-end  bg-white  mb-2">
            
            
            <section className="flex w-full p-2">
            {imageUrl && <img   src={imageUrl} 
                                alt="Item" 
                                className='h-[100px] w-[100px] object-contain'
                                
                        />}
                <article className="text-base w-8/12 flex flex-col justify-center ml-3">
                        <aside className="inline-flex justify-between w-full mb-2">
                            <p className="inline">{item.name}</p>
                            <h2 className=" inline font-medium ">{`$${item.price} USD`}</h2>
                        </aside>
                        

                        <aside className="inline-flex justify-between w-full">
                            <p className=" inline text-sm text-slate-700">Size {item.size[0].label} {item.category}</p>
                            {item && <CartButton count={item.count}/>}
                        </aside>

            

                </article>
                
            </section>


            
        </li>
    )
}
