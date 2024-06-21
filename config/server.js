module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://www.makemuzik.com'), // Alan adınızı burada belirtiyoruz
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'someSecretKey'),
    },
    url: '/admin', // Admin paneli URL'sini burada belirtiyoruz
  },
});
