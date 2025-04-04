import React, { useState } from "react";
import { FlightData } from "../App";

interface Props {
  setLastFlight: (data: FlightData) => void;
}
// React.FC	Stands for React Functional Component — a special type from React
const Inputs: React.FC<Props> = ({ setLastFlight }) => {
  const [altitude, setAltitude] = useState(0);
  const [his, setHis] = useState(0);
  const [adi, setAdi] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (altitude < 0 || altitude > 3000) {
      alert("Altitude must be between 0 and 3000");
      return;
    }
    if (his < 0 || his > 360) {
      alert("HIS must be between 0 and 360");
      return;
    }
    if (adi < -100 || adi > 100) {
      alert("ADI must be between -100 and 100");
      return;
    }
    

    // sending the flight data to express backend using rest api
    try {
      const res = await fetch("http://localhost:5001/api/flight", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ altitude, his, adi }),
      });

      // if it didnt match send error report
      if (!res.ok) {
        const errorText = await res.text();
        alert("Error: " + errorText);
        return;
      }

      // else, store the data in a variable
      const saved = await res.json();
      setLastFlight(saved);
      alert("Flight data saved successfully!");
    } catch (err) {
      alert("Failed to send data to server.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "white",
        borderRadius: "20px",
        padding: "2rem",
        paddingBottom: "4.5rem", 
        maxWidth: "500px",
        // Centered on screen
        margin: "2rem auto", 
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        // the SEND button can be absolutely placed at the bottom right
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
      
    >
      {/* Input rows */}
      {/* Contains all three input rows (Altitude, HIS, ADI)
      flexDirection: "column" → stacks them vertically */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* Altitude */}
        {/* justifyContent: "space-between" → pushes label left and input right */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <label style={{ minWidth: 100 }}>Altitude:</label>
          <input
            type="number"
            // value={altitude}
            onChange={(e) => setAltitude(+e.target.value)}
            required
            style={{
              padding: "0.6rem 1rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "60%",
            }}
          />
        </div>

        {/* HIS */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <label style={{ minWidth: 100 }}>HIS:</label>
          <input
            type="number"
            // value={his}
            onChange={(e) => setHis(+e.target.value)}
            required
            style={{
              padding: "0.6rem 1rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "60%",
            }}
          />
        </div>

        {/* ADI */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <label style={{ minWidth: 100 }}>ADI:</label>
          <input
            type="number"
            // value={adi}
            onChange={(e) => setAdi(+e.target.value)}
            required
            style={{
              padding: "0.6rem 1rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "60%",
            }}
          />
        </div>
      </div>

      {/* SEND button with arrow style */}
      <button
        type="submit"
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          padding: "0.6rem 1.5rem",
          backgroundColor: "brown",
          color: "white",
          border: "none",
          borderRadius: "0 10px 10px 0",
          cursor: "pointer",
        }}
      >
        SEND
      </button>
    </form>
  );
};

export default Inputs;
