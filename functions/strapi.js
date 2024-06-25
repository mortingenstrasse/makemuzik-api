const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

exports.handler = async (event, context) => {
  await app.prepare();
  const parsedUrl = parse(event.path, true);
  await handle(event, context, parsedUrl);
  return {
    statusCode: 200,
    body: 'Request processed',
  };
};
