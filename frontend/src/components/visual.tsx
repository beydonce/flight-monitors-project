import React from "react";
import { FlightData } from "../App";

const Visual: React.FC<{ data: FlightData }> = ({ data }) => {
  // altitude
  const altHeight = (data.altitude /3000) *100;

  // his
  const rotation = data.his;

  // adi
  let adiColor;
  if(data.adi === 100){
    adiColor = "blue";
  }else if(data.adi === 0){
    adiColor = "green";
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "3rem",
      gap: "4rem",
      alignItems: "center"
    }}>
      
      {/* altitude */}
      <div style={{ height: 300, width: 40, backgroundColor: "#ccc", position: "relative" }}>
        <div style={{
          height: `${altHeight}%`,
          backgroundColor: "black",
          width: "100%",
          position: "absolute",
          bottom: 0
        }} />
      </div>

      {/* his */}
      <div style={{
        width: 200,
        height: 200,
        borderRadius: "50%",
        border: "2px solid black",
        position: "relative"
      }}>
        {/* pointer */}
        <div style={{
          position: "absolute",
          width: 2,
          height: 90,
          backgroundColor: "red",
          top: 2,
          left: "50%",
          transform: `translateX(-50%) rotate(${rotation}deg)`,
          transformOrigin: "bottom center"
        }} />

        {/* some built scales */}
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)" }}>0</div>
        <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)" }}>180</div>
        <div style={{ position: "absolute", top: "50%", left: 0, transform: "translateY(-50%)" }}>270</div>
        <div style={{ position: "absolute", top: "50%", right: 0, transform: "translateY(-50%)" }}>90</div>
      </div>

      {/* adi */}
      <div style={{
        width: 100,
        height: 100,
        borderRadius: "50%",
        backgroundColor: adiColor,
        border: "2px solid black"
      }} />
    </div>
  );
};

export default Visual;
