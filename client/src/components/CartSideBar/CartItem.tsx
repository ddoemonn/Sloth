import { useDispatch } from "react-redux";
import { formatPrice, getCartItemsFromLocalStorage } from "../../functions"
import { FiTrash2 } from "react-icons/fi";
import { ICartItem } from "../../types/type";

export default function CartItem({item} : {item: ICartItem}) {
    const imageUrl = `http://localhost:4000/api/items/img/${item?.imagePath}`;
    return (
        <li  className="flex flex-col items-end  bg-white  mb-2">
            
            <h2 className="text-right text-xl font-semibold">{item.price} </h2>
            <section className="flex w-full p-2">
            <img src={imageUrl}className='w-[120px] h-[180px] object-cover'alt={'item'}/>
                <article className="text-left ml-2">
                    <p>{item.name}</p>
                    <p>Size {item.size?.label} {item.category}</p>
                    <aside className="flex  border-2 rounded-lg ml-52 w-[90px] h-[40px] text-2xl">
                        <button className="mx-2  text-lg text-slate-700 hover:text-blue-700"
                                >
                                <FiTrash2 />
                        </button>
                        <h4 className="mx-2 mt-[2px]">{1}</h4>
                        <button className="mx-2 text-slate-700 text-[30px] ">+</button>
                    </aside>
                </article>
                
            </section>


            
        </li>
    )
}