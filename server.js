const express = require('express');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());
// Path to your data.json file
const dataFilePath = path.join(__dirname, 'data.json');

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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});