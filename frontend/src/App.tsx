import React, { useState } from "react";
import Inputs from "./components/inputs";
import Text from "./components/text";
import Visual from "./components/visual";

export interface FlightData {
  altitude: number;
  his: number;
  adi: number;
}
// default variable for showing templates of visual and text
const defaultFlight: FlightData = {
  altitude: 0,
  his: 0,
  adi: 0,
};

type DisplayMode = "text" | "visual" | "add";

function App() {
  
  // options for current button, by default "add"
  const [mode, setMode] = useState<DisplayMode>("add");
  const [lastFlight, setLastFlight] = useState<FlightData | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2rem" }}>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        <button onClick={() => setMode("text")}>TEXT</button>
        <button onClick={() => setMode("visual")}>VISUAL</button>
        <button onClick={() => setMode("add")}>+</button>
      </div>

      {/* Render component based on mode */}
      {/* *note: when launching the web or refreshing, it will show the templates of visual and text [defaultFlight] */}
      {mode === "add" && <Inputs setLastFlight={setLastFlight} />}
      {mode === "text" && <Text data={lastFlight || defaultFlight} />}
      {mode === "visual" && <Visual data={lastFlight || defaultFlight} />}

    </div>
  );
}

export default App;