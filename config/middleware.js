module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::router',
    config: {
      routes: [
        {
          method: 'GET',
          path: '/',
          handler: async (ctx) => {
            const fs = require('fs').promises;
            const path = require('path');
            const indexPath = path.join(__dirname, '..', 'public', 'index.html');
            ctx.type = 'html';
            ctx.body = await fs.readFile(indexPath, 'utf8');
          },
        },
      ],
    },
  },
];
