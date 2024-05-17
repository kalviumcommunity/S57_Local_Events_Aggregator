const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { connectDB, checkConnection } = require("./database.js");
const routes = require("./routes.js");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); // Ensure this is placed correctly to handle all routes

app.use("/api", routes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
