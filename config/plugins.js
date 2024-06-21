module.exports = ({ env }) => ({
    // Diğer eklenti ayarları buraya gelecek
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET'),
      },
    },
  });
  