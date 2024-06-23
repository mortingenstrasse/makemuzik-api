module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://api.makemuzik.com'),
  app: {
    keys: env.array('APP_KEYS', [
      '89hD9KQAHYIoN/viRhg0xwBOtMwUAXRF8J3Urhu0/Ns=', 
      'q9YNNIPjVy2+okHkViu2BWr+2H2jFve5Z40mPzoMurk='
    ]),
  },
});
