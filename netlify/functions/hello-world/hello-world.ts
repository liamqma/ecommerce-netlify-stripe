import { Handler } from '@netlify/functions';

const DEPLOY_PRIME_URL = process.env.DEPLOY_PRIME_URL;

export const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${DEPLOY_PRIME_URL}!`,
    }),
  };
};
