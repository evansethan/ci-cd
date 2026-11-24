const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const x = 'Works on my machine.';
  res.send(x);
});

module.exports = app;
