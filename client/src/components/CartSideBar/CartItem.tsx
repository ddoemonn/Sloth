import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { ICartItem } from "../../types/type";

export default function CartItem({item} : {item: ICartItem}) {
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
                                <FiMinus />
                            ) : (
                                <FiTrash2 />
                            )}
                    </button>
                    <h4 className="mx-2  text-base mt-[3px]">{item.count}</h4>
                    <button className="mx-2 text-slate-700  hover:text-blue-700">
                        <FiPlus /></button>
                </aside>

            
                

            </section>
      
        


            
        </li>
    )
}