import { Handler } from '@netlify/functions';
import Stripe from 'stripe';

if (typeof process.env.STRIPE_API_KEY !== 'string')
  throw new Error('STRIPE_API_KEY is not available.');

const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: '2022-11-15',
});

const URL = process.env.URL;

export const handler: Handler = async (event, context) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'price_1MZtglBx9e7RzSyHvkmq5o0M',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${URL}/thank-you?success=true`,
    cancel_url: `${URL}/cart?canceled=true`,
    shipping_address_collection: { allowed_countries: ['AU'] },
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      url: session.url,
    }),
  };
};