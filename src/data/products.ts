import img1 from './know-the-rose_dried-flowers-australia_mountain_daisies_01_1296x.webp';
import img2 from './know-the-rose_dried-flowers-australia_mountain_daisies_03_1296x.webp';
import img3 from './know-the-rose_dried-flowers-australia_Mountain_Dasy_Medium_02_1296x.webp';
import img4 from './know-the-rose_dried-flowers-australia_Mountain_Dasy_Mini_01_1296x.webp';
import img5 from './know-the-rose_dried-flowers-australia_Mountain_Dasy_Mini_02_1296x.webp';
import img6 from './know-the-rose_dried-flowers-australia_Mountain_Dasy_Mini_04_1296x.webp';

export type Price = {
  id: string;
  nickname: string | null;
  unit_amount: number;
};

type Product = {
  id: string;
  description: string;
  images: [string, ...string[]];
  name: string;
  prices: [Price, ...Price[]];
};

const p: Product[] = [
  {
    id: 'prod_NKYo1Bq0U8odob',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere nec magna eget aliquam. Fusce at volutpat ipsum. Curabitur placerat ornare quam, eget rhoncus est lobortis non. Phasellus eleifend velit nulla, ut interdum turpis lobortis.',
    images: [
      'https://files.stripe.com/links/MDB8YWNjdF8xNGVaSVdCeDllN1J6U3lIfGZsX3Rlc3RfOXJUWFpKVUZyV2hJdGdub1NHek0xYWd400SzMdhS4Z',
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
    ],
    name: 'Flower Plant',
    prices: [
      { id: 'price_1MZtglBx9e7RzSyHvkmq5o0M', nickname: 'Small', unit_amount: 199 },
      { id: 'price_1NEKr2Bx9e7RzSyHyHRAJhVl', nickname: 'Large', unit_amount: 399 },
    ],
  },
  {
    id: 'prod_NHwdaXbjj6lgW5',
    description:
      'We believe in creating pieces that are respectful to the environment they are celebrating. The Luna Bouquet features rustic blush tones of Australian native myrtle, creamy hues of natural rice flower, and the dreamy translucent petals of lunaria. ',
    images: [
      'https://files.stripe.com/links/MDB8YWNjdF8xNGVaSVdCeDllN1J6U3lIfGZsX3Rlc3RfYTNTVERidzg1ZzQzekhWMjFLVVJnTjkx00oChtqiWv',
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
    ],
    name: 'Everlasting Luna Bouquet',
    prices: [{ id: 'price_1MXMkEBx9e7RzSyHf1WhESI3', nickname: null, unit_amount: 99 }],
  },
];

export function findPrice(priceId: string): { product?: Product; price?: Price } {
  let price: Price | undefined;
  const product = p.find((product) => {
    price = product.prices.find(({ id }) => id === priceId);
    if (price) return p;
    return undefined;
  });
  return { product, price };
}

export default p;
