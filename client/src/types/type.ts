export interface IItemSize {
    label: string;
    stock: number;
    _id: string;
    
} 


export interface IItem{
    name: string;
    description: string;
    color: string;
    createdAt: string;
    price: number;
    category: string;
    size: IItemSize[];
    imagePath: string;
    updatedAt: string;
    __v: number;
    _id: string
}

export interface IItemCount extends IItem {
    count: number;
}

export interface ICartItems {
    cartItems: IItem[]
}

export interface CartSideBarProps {
    toggleCart: () => void;
    isCartOpen: boolean;
}

export interface ItemPage {
    itemState: IItem | null;
    selectedSizes: boolean[];
    isOpen: boolean;
    index: number;
    itemSize: IItemSize;
    err: String;
    
}

export interface ItemPageState {
    pageItem: ItemPage;
}