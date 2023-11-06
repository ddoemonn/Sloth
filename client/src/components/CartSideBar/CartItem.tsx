import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { ICartItem } from "../../types/type";

export default function CartItem({item} : {item: ICartItem}) {
    const imageUrl = `http://localhost:4000/api/items/img/${item?.imagePath}`;
    return (
        <li  className=" text-lg bg-white flex mb-2">
            <img src={imageUrl} className='w-[70px] h-[70px]  object-scale-down rounded-xl'alt={'item'}/>

            <section className="text-base w-[250px]  flex flex-col">

                <article className="flex justify-between ">
                <p className="inline">{item.name}</p>
                <p className='font-semibold inline-flex  '>{`$${item.price.toFixed(2)} USD`}</p>
                

                </article>

                <section className="flex justify-between ">
                    <p className="inline">Size {item.size?.label} {item.category}</p>

                    <aside className="border-2 rounded-lg  w-[90px] mb-5 h-[40px] inline-flex ">
                        <button className="mx-2   text-slate-700 hover:text-blue-700"
                                >
                                {item.count > 1 ? (
                                    <FiMinus />
                                ) : (
                                    <FiTrash2 />
                                )}
                        </button>
                        <h4 className="mx-2 mt-1 text-lg">{1}</h4>
                        <button className="mx-2 text-slate-700  hover:text-blue-700">
                            <FiPlus /></button>
                    </aside>

                </section>
                
                

            </section>
      
        


            
        </li>
    )
}