const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 1337;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Strapi admin panel route
app.use('/admin', (req, res, next) => {
  if (req.url.startsWith('/admin')) {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
  } else {
    next();
  }
});

// Fallback to index.html for single page applications
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
