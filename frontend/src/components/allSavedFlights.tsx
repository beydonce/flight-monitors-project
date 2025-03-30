import React, { useEffect, useState } from "react";
import { FlightData } from "../App";

const AllSavedFlights = () => {
  const [flights, setFlights] = useState<FlightData[]>([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/flight/all")
      .then(res => res.json())
      .then(data => setFlights(data))
      .catch(err => console.error("Failed to fetch flights", err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>All Saved Flights</h2>
      <ul>
        {flights.map((flight, index) => (
          <li key={index}>
            ✈️ Alt: {flight.altitude}, HIS: {flight.his}, ADI: {flight.adi}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllSavedFlights;
