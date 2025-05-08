const mysql = require('mysql2');

// Create the connection
const connection = mysql.createConnection({
  host: 'localhost',      // Your MySQL host
  user: 'root',           // Your MySQL username
  password: 'root',   // Your MySQL password
  database: 'productdb'   // Your MySQL database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

module.exports = connection;

// const mongoose = require('mongoose');

// const ProductSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   category: { type: String, required: true },
//   stock: { type: Number, required: true }
// });

// module.exports = mongoose.model('Product', ProductSchema);
