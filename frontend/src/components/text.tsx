import React from "react";
import { FlightData } from "../App";

interface Props {
  data: FlightData;
}

const Text: React.FC<Props> = ({ data }) => {
  const circleStyle: React.CSSProperties = {
    border: "2px solid #444",
    borderRadius: "50px",
    padding: "2rem",
    width: "150px",
    textAlign: "center",
    fontSize: "1.1rem",
    fontFamily: "sans-serif",
    backgroundColor: "#f9f9f9",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2rem" }}>
      <div style={circleStyle}>
        <div><strong>Altitude</strong></div>
        <div>{data.altitude}</div>
      </div>
      <div style={circleStyle}>
        <div><strong>HIS</strong></div>
        <div>{data.his}</div>
      </div>
      <div style={circleStyle}>
        <div><strong>ADI</strong></div>
        <div>{data.adi}</div>
      </div>
    </div>
  );
};

export default Text;
