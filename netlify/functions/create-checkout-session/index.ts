import { Handler } from '@netlify/functions';
import Stripe from 'stripe';
import { parse } from 'url';

if (typeof process.env.STRIPE_API_KEY !== 'string')
  throw new Error('STRIPE_API_KEY is not available.');

const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: '2022-11-15',
});

export const handler: Handler = async (event) => {
  if (!event.body) throw new Error('Incorrect input');
  const items = JSON.parse(event.body);

  const url = parse(event.rawUrl);
  const URL = `${url.protocol}//${url.host}`;

  const lineItems = items.map((item) => {
    return {
      price: item.id,
      quantity: item.qty,
      tax_rates: ['txr_1NEUZjBx9e7RzSyHu7yTIl66'],
    };
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: `${URL}/thank-you?success=true`,
    cancel_url: `${URL}/cart?canceled=true`,
    shipping_address_collection: { allowed_countries: ['AU'] },
    shipping_options: [
      {
        shipping_rate: 'shr_1Ma4w7Bx9e7RzSyHktl5Z9Vv',
      },
      {
        shipping_rate: 'shr_1NEUWiBx9e7RzSyH5Wlntv7V',
      },
    ],
    automatic_tax: {
      enabled: false,
    },
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      url: session.url,
    }),
  };
};
