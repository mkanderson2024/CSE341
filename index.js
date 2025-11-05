const express = require('express');
const { connectDB } = require('./Connection');
const contactRoute = require('./routes/contactRoute')

const app = express();

// Public Frontend Files
app.use(express.static('public'));
app.use(express.json());

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