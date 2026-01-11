const express = require('express');
const app = express();
const PORT =  3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const morgan = require('morgan');

//dotenv
dotenv.config();

//middlewares
app.use(cors());
app.use(bodyParser.json(bodyParser.urlencoded({ extended: true })));
app.use(morgan('dev'))
app.use(express.json());  



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})