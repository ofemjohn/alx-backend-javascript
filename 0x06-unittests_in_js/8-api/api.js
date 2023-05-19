const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

const port = 7865;
const host = '127.0.0.1';

app.listen(port, host, () => {
  console.log(`Server is live at ${host}:${port}`);
});

module.exports = app;
