import express, { Router, Request, Response } from 'express';
import {  getImage, getItem, getItems } from '../controllers/itemController';
import multer from 'multer';
const upload = multer({dest: 'uploads/'})

export const itemRouter: Router = express.Router();



itemRouter.get('/img/:key', getImage);

itemRouter.get('/', getItems);

itemRouter.get('/:id',getItem);
