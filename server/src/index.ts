import express, {Express, NextFunction, Request, Response} from 'express'
import cors from 'cors'
import { itemRouter } from './routes/itemRoute';
import mongoose from 'mongoose';
import Stripe from 'stripe';
const stripe: Stripe  = new Stripe(process.env.STRIPE_PRIVATE_KEY,{apiVersion: '2023-10-16'})


const app: Express = express();

app.use(cors());
app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(req.path, req.method);
    next()
})

app.use('/api/items', itemRouter)

app.post('/api/create-checkout-session', async (req: Request, res: Response) => {
    const { amount, currency, items } = req.body;
    
        try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: items.map(item => ({
            price_data: {
                currency: currency,
                product_data: {
                name: item.name,
                },
                unit_amount: item.amount * 100, // Amount in cents
            },
            quantity: item.quantity,
            })),
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/checkout/shipping',
        });
    
        res.json({ id: session.id });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create checkout session' });
        }
    });


// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen
        app.listen(process.env.PORT, () => {
            console.log('listening port 4000 with mongoose!')
        })
    })
    .catch((e) => console.log('HEY', e))