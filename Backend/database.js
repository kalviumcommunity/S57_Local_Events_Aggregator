const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");

    // Check if events collection exists
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
    const eventsCollectionExists = collections.some(
      (col) => col.name === "events"
    );

    if (!eventsCollectionExists) {
      console.log(
        "Events collection not found. Please ensure events are imported into MongoDB."
      );
    } else {
      console.log("Events collection found in MongoDB.");
    }
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process with failure
  }
};

const checkConnection = () => {
  const dbStatus = mongoose.connection.readyState;
  return dbStatus === 1;
};

const getEventsCollection = async () => {
  if (!checkConnection()) {
    throw new Error("Database connection not established");
  }
  return mongoose.connection.db.collection("events");
};

module.exports = {
  connectDB,
  checkConnection,
  getEventsCollection,
};
