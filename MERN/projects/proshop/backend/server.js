const express = require('express');
const app = express();

const products = require('./data/products');

app.get('/', (req, res) => {
  res.send('API running');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const { id } = req.params; // pull out just the id param
  const product = products.find((p) => p._id === id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
