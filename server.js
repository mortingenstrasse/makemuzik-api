const express = require('express');
const path = require('path');

const app = express();

// Static file middleware
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all handler to serve index.html for any routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const strapi = require('@strapi/strapi');
strapi().start();

