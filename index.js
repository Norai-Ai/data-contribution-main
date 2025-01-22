require("dotenv").config();
const express = require("express");
const dataRoutes = require("./routes/data");

const app = express();
app.use(express.json());

// API Routes
app.use("/api/data", dataRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`NuroAI Backend running on port ${PORT}`);
});