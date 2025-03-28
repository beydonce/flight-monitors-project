import React, {useState} from "react"
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

}

export default App;