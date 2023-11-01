export interface IItemSize {
    label: string;
    stock: number;
    
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