const express = require('express');
const path = require('path');
const strapi = require('@strapi/strapi');
const app = express();
const PORT = process.env.PORT || 1337;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'public')));

// Serve the React app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Redirect /admin to the Strapi admin
app.use('/admin', (req, res, next) => {
  if (req.path === '/admin') {
    res.redirect('/admin/');
    return;
  }
  next();
});

// Strapi handler
strapi().start(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
