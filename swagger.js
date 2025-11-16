const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: 'cse341-chg2.onrender.com' || 'localhost:8080',
  schemes: ['http', 'https']
};

const outputFile = './swagger-output.json';
const routes = [
  './index.js',
  './routes/bookRoute.js',
  './routes/wishlistRoute.js'
];
// This is all you need to fix for the week 2 assignmetn ^

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);