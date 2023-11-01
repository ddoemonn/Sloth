import mongoose from 'mongoose';
import Item, { IItem } from '../models/itemModel';
import { Request, Response } from 'express';
import { getFileStream, uploadFile } from '../s3';

// get a single item
export const getItem = (req: Request, res: Response) => {
    const key = req.params.key;
    const readStream = getFileStream(key)

    readStream.pipe(res)

}
