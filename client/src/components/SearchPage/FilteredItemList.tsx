import { useSelector } from "react-redux";
import { IItem } from "../../types/type";
import { RootState } from "../../redux/store";


export default function FilteredItemList () {
    
    const items: IItem[] = useSelector((state: RootState) => state.Items.filteredItems);
    return (
            <ul className='flex flex-wrap  w-8/12  justify-center [&>*:last-child]:flex-1 '>
            {items.map((item: IItem) => {
            const imageUrl = `http://localhost:4000/api/items/img/${item.imagePath}`;
            return (
                <li key={item._id} className='mx-2 my-2'>
                <aside className='relative aspect-w-1 aspect-h-1'>
                    <img
                    src={imageUrl}
                    className='w-[200px] h-[300px] object-scale-down'
                    
                    alt={item.name}
                    />
                </aside>
                <p className='mt-2'>{item.name}</p>
                <p>{item.price.toFixed(2)}</p>
                </li>
            );
            })}
        </ul>
    )
};

