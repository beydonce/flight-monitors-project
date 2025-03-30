
const express = require("express");
const router = express.Router();
const FlightData = require("../models/FlightInputFormat");

// adding new flight to mongoDB and checking if valid
router.post("/", async (req, res) => {
  try {
    const { altitude, his, adi } = req.body;
    const newFlight = new FlightData({ altitude, his, adi });
    await newFlight.save();
    res.status(201).json(newFlight);
  } catch (error) {
    res.status(400).json({ message: "Invalid input", error: error.message });
  }
});

// project extended 
// GET all flight data
router.get("/all", async (req, res) => {
  try {
    const allFlights = await FlightData.find().sort({ createdAt: -1 });
    res.json(allFlights);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch flight data", error: error.message });
  }
});


module.exports = router;
