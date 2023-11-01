import express, {Express, NextFunction, Request, Response} from 'express'
import cors from 'cors'
import { itemRouter } from './routes/itemRoute';
import mongoose from 'mongoose';



const app: Express = express();

app.use(cors());
app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(req.path, req.method);
    next()
})

app.use('/api/items', itemRouter)


// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen
        app.listen(process.env.PORT, () => {
            console.log('listening port 4000 with mongoose!')
        })
    })
    .catch((e) => console.log('HEY', e))