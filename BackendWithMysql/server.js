const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/product.routes');

const app = express();
app.use(cors());
app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/productdb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log("MongoDB connected"));

app.use('/api/products', productRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

