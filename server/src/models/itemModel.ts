import mongoose, { Schema, Document } from 'mongoose';



interface IItemSize {
    label: string;
    stock: number;
    
} 

export interface IItem extends Document {
    name: string;
    description: string;
    color: string;
    price: number;
    category: string;
    size: IItemSize[];
    imagePath: string;
}

const itemsSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    },
    color: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true 
    },
    category: {
        type: String,
        required: true
    },
    size: [{
        label: {
            type: String,
            required: false 
        },
        stock: {
            type: Number,
            required: false 
        }
    }],
    imagePath:[ {
        type: String,
        required: true
    }]
}, { timestamps: true });

export default mongoose.model<IItem>('Item', itemsSchema);