const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db')

//dotenv
dotenv.config();

//connect to database
connectDB();

//middlewares
app.use(cors());
app.use(bodyParser.json(bodyParser.urlencoded({ extended: true })));
app.use(morgan('dev'))
app.use(express.json());  

//routes path
const authRoutes = require('./routes/authRoutes')

const PORT = process.env.PORT || 3000;

//API routes
app.use('/api/v1/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.DEV_MODE} and  is running on port ${PORT}`.bgGreen.black);
})