import express, { Router, Request, Response } from 'express';
import {  getImage, getItems } from '../controllers/itemController';
import multer from 'multer';
const upload = multer({dest: 'uploads/'})

export const itemRouter: Router = express.Router();



itemRouter.get('/img/:key', getImage);

itemRouter.get('/', getItems)
