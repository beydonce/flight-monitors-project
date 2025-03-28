import React, { useState } from "react";
import { FlightData } from "../App";

interface Props {
  setLastFlight: (data: FlightData) => void;
}

const Inputs: React.FC<Props> = ({ setLastFlight }) => {
  const [altitude, setAltitude] = useState(0);
  const [his, setHis] = useState(0);
  const [adi, setAdi] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting:", { altitude, his, adi });

    try {
      const res = await fetch("http://localhost:5001/api/flight", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ altitude, his, adi }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Server responded with error:", errorText);
        alert("Error: " + errorText);
        return;
      }

      const saved = await res.json();
      console.log("Saved to DB:", saved);
      setLastFlight(saved);
    } catch (err) {
      console.error("Error sending request:", err);
      alert("Failed to send data to server.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Altitude:
        <input
          type="number"
          value={altitude}
          onChange={(e) => setAltitude(+e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        HIS:
        <input
          type="number"
          value={his}
          onChange={(e) => setHis(+e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        ADI:
        <input
          type="number"
          value={adi}
          onChange={(e) => setAdi(+e.target.value)}
          required
        />
      </label>
      <br />

      <button type="submit">SEND</button>
    </form>
  );
};

export default Inputs;