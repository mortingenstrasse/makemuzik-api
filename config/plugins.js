module.exports = ({ env }) => ({
    module.exports = ({ env }) => ({
        'users-permissions': {
          config: {
            jwtSecret: env('JWT_SECRET'),
          },
        },
      });
      