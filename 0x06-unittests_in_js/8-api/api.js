const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.listen(7865, () => {
  console.log('Server is live at http://localhost:7865');
});

module.exports = app;
