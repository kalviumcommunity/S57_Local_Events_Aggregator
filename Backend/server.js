const express = require("express");
const mongoose = require("mongoose");
const { connectDB, checkConnection } = require("./database.js");
const routes = require("./routes.js");
const app = express();
const port = 3000;
app.use(express.json());
app.use("/api", routes);
connectDB();
app.get("/", (req, res) => {
  if (checkConnection()) {
    res.send("Connected");
  } else {
    res.send("Not Connected");
  }
});
app.listen(port, () => {
  console.log("Running on PORT", port);
});
