const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://naveennaveen:naveen@cluster0.qodf0oq.mongodb.net/Capstone?retryWrites=true&w=majority&appName=Cluster0`
    );
  } catch (err) {
    console.error("Error connecting to mongoDB:", err.message);
  }
};
const checkConnection = () => {
  const dbStatus = mongoose.connection.readyState;
  return dbStatus === 1;
};

module.exports = {
  connectDB,
  checkConnection,
};
