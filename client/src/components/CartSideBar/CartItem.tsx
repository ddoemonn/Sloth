import { useDispatch } from "react-redux";
import { formatPrice, getCartItemsFromLocalStorage } from "../../functions"
import { FiTrash2, FiPlus } from "react-icons/fi";
import { ICartItem } from "../../types/type";

export default function CartItem({item} : {item: ICartItem}) {
    const imageUrl = `http://localhost:4000/api/items/img/${item?.imagePath}`;
    return (
        <li  className=" text-lg bg-white flex mb-2">
            <img src={imageUrl}className='w-[120px] h-[180px] object-cover'alt={'item'}/>

            <section className="text-base w-[250px] mt-10">

                <article className="flex justify-between ">
                <p className="inline">{item.name}</p>
                <p className='font-semibold inline-flex text-lg '>{`$${item.price.toFixed(2)} USD`}</p>
                

                </article>

                <br className="w-1"/>

                <section className="flex justify-between ">
                    <p className="inline">Size {item.size?.label} {item.category}</p>

                    <aside className="border-2 rounded-lg  w-[90px] mb-5 h-[40px] inline-flex text-lg ">
                        <button className="mx-2  text-lg text-slate-700 hover:text-blue-700"
                                >
                                <FiTrash2 />
                        </button>
                        <h4 className="mx-2 mt-1">{1}</h4>
                        <button className="mx-2 text-slate-700  hover:text-blue-700">
                            <FiPlus /></button>
                    </aside>

                </section>
                
                

            </section>
      
        


            
        </li>
    )
}