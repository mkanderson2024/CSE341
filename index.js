const express = require('express');
const { connectContactsDB } = require('./ConnectionContacts');
const { booksDB} = require('./ConnectionBooks');
const contactRoute = require('./routes/contactRoute')
const bookRoute = require('./routes/bookRoute')
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
connectContactsDB();

//Route for contacts for lesson 1
app.use('/contact', contactRoute);
app.use('/book', bookRoute);
app.use('/wishlist', wishlistRoute);

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