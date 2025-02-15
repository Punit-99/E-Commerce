const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected!");
  } catch (error) {
    console.error("Error connecting to DB", error);
  }
};

module.exports = connectDB;
