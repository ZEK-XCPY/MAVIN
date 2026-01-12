const mongoose = require('mongoose');
const colors = require('colors');


const connectDB = async ()=>{
    try{
          await mongoose.connect(process.env.MONGO_URI)
          console.log(`MongoDB connected Successfully ${mongoose.connection.host}`.bgGreen.white);
    }
    catch(err){
      console.log(`Error: ${err.message}`.bgRed.white);
    }

}

module.exports = connectDB;