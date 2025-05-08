const express = require('express');
const router = express.Router();
const db = require('../models/product.model'); // your db.js path

// Add Product
router.post('/', (req, res) => {
  const { name, price, category, stock } = req.body;
  const sql = 'INSERT INTO products (name, price, category, stock) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, price, category, stock], (err, result) => {
    if (err) return res.status(400).send(err);
    res.status(201).send({ id: result.insertId, name, price, category, stock });
  });
});

// Get All Products
router.get('/', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(400).send(err);
    res.send(results);
  });
});

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const Product = require('../models/product.model');

// // Add Product
// router.post('/', async (req, res) => {
//   try {
//     const product = new Product(req.body);
//     await product.save();
//     res.status(201).send(product);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// // Get All Products
// router.get('/', async (req, res) => {
//   const products = await Product.find();
//   res.send(products);
// });

// // Get Product by ID
// router.get('/:id', async (req, res) => {
//   const product = await Product.findById(req.params.id);
//   res.send(product);
// });

// // Update Product
// router.put('/:id', async (req, res) => {
//   const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.send(product);
// });

// // Delete Product
// router.delete('/:id', async (req, res) => {
//   await Product.findByIdAndDelete(req.params.id);
//   res.send({ message: 'Product deleted' });
// });

// module.exports = router;
