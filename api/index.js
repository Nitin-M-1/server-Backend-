const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express on Vercel!');
});

// ❌ NO app.listen()
// ✅ Export the app
module.exports = app;
