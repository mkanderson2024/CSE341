const express = require('express');
// Routes
const mongoose = require('./ConnectionBooks');
const bookRoute = require('./routes/bookRoute')
const authenticationRoute = require('./routes/authenticationRoute')
const wishlistRoute = require('./routes/wishlistRoute')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json')

const app = express();

// Public Frontend Files

// Using this: Order matters
app
    .use(express.static('public'))
    .use(express.json())
    .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


//Connection to MongoDB

//Route for contacts for lesson 1
app.use('/book', bookRoute);
app.use('/wishlist', wishlistRoute);
app.use('/authenticate', authenticationRoute);

// Global Error Middleware
 app.use((err,req,res,next) => {
    console.error('Error:',err);

    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error'
    });
 });

// From Activity 1
// app.get('/', (req, res) => {
//     res.send('Connected to MongoDB, Welcome!')
// });

const port = process.env.PORT || 8080;

app.listen(port,() => console.log("Server Started"))
console.log('Web Server is listening at port ' + port);