import React from "react";
import { FlightData } from "../App";

const Text: React.FC<{ data: FlightData }> = ({ data }) => {
  return (
    <div>
      <h3>Flight Data:</h3>
      <p>Altitude: {data.altitude}</p>
      <p>HIS: {data.his}</p>
      <p>ADI: {data.adi}</p>
    </div>
  );
};

export default Text;