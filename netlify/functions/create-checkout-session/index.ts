import { Handler } from '@netlify/functions';
import Stripe from 'stripe';

if (typeof process.env.STRIPE_API_KEY !== 'string')
  throw new Error('STRIPE_API_KEY is not available.');

const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: '2022-11-15',
});

const URL = process.env.URL;

export const handler: Handler = async (event, context) => {
  if (!event.body) throw new Error('Incorrect input');
  const items = JSON.parse(event.body);

  const { data: products } = await stripe.products.list({
    ids: items.map((item) => item.id),
    limit: 999,
  });

  const lineItems = items
    .map((item) => {
      const product = products.find((product) => product.id === item.id);
      if (!product) return undefined;
      return {
        price: product.default_price,
        quantity: item.qty,
      };
    })
    .filter((item) => !!item);

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
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
