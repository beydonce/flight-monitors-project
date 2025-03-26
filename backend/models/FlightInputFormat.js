const mongoose = require("mongoose");

const flightDataSchema = new mongoose.Schema({
  altitude: { type: Number, required: true, min: 0, max: 3000 },
  his: { type: Number, required: true, min: 0, max: 360 },
  adi: { type: Number, required: true, min: -100, max: 100 },
}, { timestamps: true });

module.exports = mongoose.model("FlightInputFormat", flightDataFormatSchema);
