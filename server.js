const strapi = require('@strapi/strapi');
const express = require('express');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve Strapi admin
app.use('/admin', (req, res, next) => {
  strapi().start();
  next();
});

// Serve index.html for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
