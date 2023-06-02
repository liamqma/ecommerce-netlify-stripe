import { Handler } from '@netlify/functions';
import { parse } from 'url';

export const handler: Handler = async (event, context) => {
  const url = parse(event.rawUrl);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `${url.protocol}//${url.host}`,
    }),
  };
};
