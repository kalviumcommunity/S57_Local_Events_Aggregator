const express = require("express");
const mongoose = require("mongoose");
const { connectDB, checkConnection } = require("./database.js");
const routes = require("./routes.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", routes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
