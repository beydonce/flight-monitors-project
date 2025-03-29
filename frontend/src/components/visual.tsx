import React from "react";
import { FlightData } from "../App";

const Visual: React.FC<{ data: FlightData }> = ({ data }) => {
  // Altitude height (0 to 100%)
  const altHeight = (data.altitude / 3000) * 100;

  // HIS rotation (rotate the compass, not the pointer)
  const hisRotation = -data.his;

  // ADI color based on value
  let adiColor = "#eee"; // default color
  if (data.adi === 100) {
    adiColor = "blue";
  } else if (data.adi === 0) {
    adiColor = "green";
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "3rem",
        gap: "4rem",
        alignItems: "center",
      }}
    >
      {/* Altitude */}
      <div
        style={{
          height: 300,
          width: 40,
          backgroundColor: "#ccc",
          position: "relative",
        }}
      >
        <div
          style={{
            height: `${altHeight}%`,
            backgroundColor: "black",
            width: "100%",
            position: "absolute",
            bottom: 0,
          }}
        />
      </div>

      {/* HIS */}
      <div
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          border: "2px solid black",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Rotating compass */}
        <div
          style={{
            width: "100%",
            height: "100%",
            transform: `rotate(${hisRotation}deg)`,
            transition: "transform 0.5s ease",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            0
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            180
          </div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
            }}
          >
            270
          </div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
            }}
          >
            90
          </div>
        </div>

        {/* Fixed red pointer */}
        <div
          style={{
            position: "absolute",
            width: 2,
            height: 90,
            backgroundColor: "red",
            top: 10,
            left: "50%",
            transform: "translateX(-50%)",
            transformOrigin: "bottom center",
            zIndex: 2,
          }}
        />
      </div>

      {/* ADI */}
      <div
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          backgroundColor: adiColor,
          border: "2px solid black",
        }}
      />
    </div>
  );
};

export default Visual;
