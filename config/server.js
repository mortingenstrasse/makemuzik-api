module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  routes: [
    {
      method: 'GET',
      path: '/',
      handler: 'index',
      config: {
        policies: [],
      },
    },
  ],
  index: {
    handler: async (ctx) => {
      const fs = require('fs').promises;
      const path = require('path');
      const indexPath = path.join(__dirname, '..', 'public', 'index.html');
      ctx.type = 'html';
      ctx.body = await fs.readFile(indexPath, 'utf8');
    },
  },
});
