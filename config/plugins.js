module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', 'G3HtQ7VZ2O6kZ7G4J5B4Xw=='),
    },
  },
});
