const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Root route
app.get('/', (req, res) => {
  res.send('Hello from Express on Vercel!');
});

// New route to serve data.json
app.get('/get-all', (req, res) => {
  const filePath = path.join(__dirname, 'data.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseErr) {
      console.error('Error parsing JSON:', parseErr);
      res.status(500).json({ error: 'Invalid JSON Format' });
    }
  });
});

module.exports = app;
