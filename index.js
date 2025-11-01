const express = require('express')
const connectDB = require('./Connection')

const app = express()

//Connection to MongoDB
connectDB()

app.get('/', (req, res) => {
    res.send('Connected to MongoDB!')
})
const port = process.env.Port || 3000

app.listen(port,() => console.log("Server Started"))