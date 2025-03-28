const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB error:", err));

// enable api
const flightRoutes = require("./routes/flightData"); 
app.use("/api/flight", flightRoutes);

// start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
