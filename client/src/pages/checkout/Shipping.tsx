
import { loadStripe } from '@stripe/stripe-js';

const stripeKey = process.env.STRIPE_PUBLIC_KEY ?? 'bla bla';
const stripePromise = loadStripe(stripeKey);


export default function Shipping() {
    const handleCheckout = async () => {
        const stripe = await stripePromise;

        try {
            const response = await fetch('http://localhost:4000/api/create-checkout-session', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                amount: 1, // Amount in cents
                currency: 'usd',
                items: [
                    {
                    name: 'Product Name',
                    amount: 1, // Amount in cents
                    quantity: 1,
                    },
                    {
                        name: 'Product Toto',
                    amount: 2, // Amount in cents
                    quantity: 1,
                    }
                ],
                }),
            });

            const session = await response.json();

            if (stripe && session.id) {
                const result = await stripe.redirectToCheckout({
                    sessionId: session.id,
                });
        
                if (result.error) {
                    console.error(result.error.message);
                }
                } else {
                console.error('Failed to create checkout session');
                }
            } catch (error) {
                console.error(error);
            }
        };
    return (
        <>
            <section className='mx-auto w-9/12 flex justify-between text-xl pl-0 p-2 py-2 border-black border-2 rounded-lg mb-3'>
                <input type="checkbox"  className='w-14 accent-black'/>
                <h3 className='flex-1'>Free Shipping</h3>
                <h3 className='font-semibold'>Free</h3>
            </section>
            <button onClick={handleCheckout}
                className='hover:shadow-md hover:shadow-emerald-300 w-9/12 mx-auto p-2 py-1 bg-black text-white text-lg font-semibold rounded-xl '>
            Continue to payment</button>
            </>
    )
}