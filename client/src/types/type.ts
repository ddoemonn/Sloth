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
    _id: string;
}

export interface ICartItem{
    name: string;
    description: string;
    color: string;
    price: number;
    category: string;
    size: IItemSize | null;
    imagePath: string;
    _id: string
    count: number;
}

