const express = require('express');
const { connectDB } = require('./Connection');
const contactRoute = require('./routes/contactRoute')
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
connectDB();

//Route for contacts for lesson 1
app.use('/', contactRoute);

// From Activity 1
// app.get('/', (req, res) => {
//     res.send('Connected to MongoDB, Welcome!')
// });

const port = process.env.PORT || 8080;

app.listen(port,() => console.log("Server Started"))
console.log('Web Sever is listening at port ' + port);