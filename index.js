const express = require('express');
const dotenv = require('dotenv').config()
const connectDB = require('./mongoose/connect.js')

connectDB();



const app = express()
const PORT = process.env.PORT|5000

app.use(express.json())

app.use('/posts', require('./routes/route'))



app.listen(PORT, () => console.log(`App running in port ${PORT}`))