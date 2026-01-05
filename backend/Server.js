require("dotenv").config();


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
// Middleware to parse JSON
app.use(express.json());

// Routes
const bookingRoutes = require("./routes/bookingRoutes");
app.use("/api/bookings", bookingRoutes);

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});