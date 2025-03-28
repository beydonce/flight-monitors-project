import React, { useState } from "react";
import Inputs from "./components/inputs";
import Text from "./components/text";
import Visual from "./components/visual";

export interface FlightData {
  altitude: number;
  his: number;
  adi: number;
}

type DisplayMode = "text" | "visual" | "add";

function App() {
  const [mode, setMode] = useState<DisplayMode>("add");
  const [lastFlight, setLastFlight] = useState<FlightData | null>(null);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setMode("text")}>TEXT</button>
        <button onClick={() => setMode("visual")}>VISUAL</button>
        <button onClick={() => setMode("add")}>+</button>
      </div>

      {mode === "add" && <Inputs setLastFlight={setLastFlight} />}
      {mode === "text" && lastFlight && <Text data={lastFlight} />}
      {mode === "visual" && lastFlight && <Visual data={lastFlight} />}
    </div>
  );
}

export default App;