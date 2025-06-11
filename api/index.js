const express = require('express');
const serverless = require('serverless-http');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

const dataFilePath = path.join(__dirname, 'data.json'); // file is now inside /api

app.get('/', (req, res) => {
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Could not read data file.' });
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseErr) {
      res.status(500).json({ error: 'Error parsing JSON data.' });
    }
  });
});

module.exports = app;
module.exports.handler = serverless(app);
