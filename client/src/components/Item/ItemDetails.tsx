import AddToCartButton from "./AddToCartButton";
import ItemInfo from "./ItemInfo";
import SizeButtons from "./SizeButtons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";


const ItemDetails: React.FC = () => {
    const dispatch = useDispatch();
    const pageItemState = useSelector((state: RootState ) => state.PageItem.pageItem);
    let imageUrl: string | undefined;
    console.log(pageItemState)
    if (pageItemState.itemState?.imagePath) {
        imageUrl = `http://localhost:4000/api/items/img/${pageItemState.itemState.imagePath}`;
    }

    return (
        <>
            {imageUrl && <img   src={imageUrl} 
                                alt="Item" 
                                className='w-[550px] h-[455px] object-scale-down hover:scale-125 transition duration-500'
                        />}
            <section className=' w-1/4'>
                {pageItemState.itemState && <ItemInfo />}
                {pageItemState.itemState?.size && <SizeButtons />}
                {pageItemState.itemState?.price && <AddToCartButton  />}
                {pageItemState.err.length > 0 && <p className='text-red-700 text-xl font-semibold'>{pageItemState.err}</p>}
                {(pageItemState.itemSize.stock !== 0) && (pageItemState.itemSize.stock < 5) && <p className='text-xl font-semibold'>
                    {pageItemState.itemSize.stock} item left</p> }  
            </section>
        </>
            
    );
}

export default ItemDetails;