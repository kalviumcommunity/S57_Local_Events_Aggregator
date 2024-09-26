const express = require("express");
const cors = require("cors");
const { connectDB, checkConnection } = require("./database.js");
const routes = require("./Routes/MainRoutes.js");
const userRoutes = require("./Routes/UserRoutes.js");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);
app.use("/api", routes);

connectDB();

// Health check route
app.get("/api", (req, res) => {
  const dbConnected = checkConnection();
  res.json({
    status: "OK",
    dbConnected: dbConnected,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
