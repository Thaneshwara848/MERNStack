// swaggerConfig.js

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product API',
      version: '1.0.0',
      description: 'A simple Express API for managing products',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/products',
      },
    ],
  },
  apis: ['./routes/product.routes.js'],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerSpec };
