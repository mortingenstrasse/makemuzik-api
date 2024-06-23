module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'Am8NJFgsrPdokWZzgoOehQ=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'PYVGRdgxtjnVPcmJSSZ+pg=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'q9YNNIPjVy2+okHkViu2BWr+2H2jFve5Z40mPzoMurk='),
    },
  },
});
