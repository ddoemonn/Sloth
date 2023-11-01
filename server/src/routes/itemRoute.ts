import express, { Router, Request, Response } from 'express';
import { createItem, createItemV1, getItem } from '../controllers/itemController';
import multer from 'multer';
const upload = multer({dest: 'uploads/'})

export const itemRouter: Router = express.Router();

itemRouter.post('/', upload.single('image'),createItem);

itemRouter.post('/v1',upload.single('image'),createItemV1)

itemRouter.get('/:key', getItem);
