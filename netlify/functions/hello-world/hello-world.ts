import { Handler } from '@netlify/functions';

const URL = process.env.URL;

export const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${URL}!`,
    }),
  };
};
