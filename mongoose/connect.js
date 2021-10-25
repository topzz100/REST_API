const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const connectDB = async() => {
  try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log('connected to DB')
  }catch(err){
    console.error(err)
  }
  
}
module.exports = connectDB;