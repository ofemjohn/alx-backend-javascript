const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const cartId = parseInt(req.params.id);
  if (isNaN(cartId)) {
    res.status(400).send('Invalid cart ID');
  } else {
    res.send(`Payment methods for cart ${cartId}`);
  }
});

app.listen(7865, () => {
  console.log('Server is live at http://localhost:7865');
});

module.exports = app;
