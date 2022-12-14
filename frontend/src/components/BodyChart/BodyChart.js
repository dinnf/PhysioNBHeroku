import "./BodyChart.css";
import ImageMarker from "react-image-marker";
import bodyImage from "../CreateNote/bodychart.png"
import { useState } from "react";
import React from "react"


const BodyChart = () => {
  let [markers, setMarkers] = useState([]);

  const CustomMarker = () => {
    return (
      <div
        className="image-marker__marker image-marker__marker--default"
        data-testid="marker"
      ></div>
    );
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button disabled={!markers.length > 0} onClick={() => setMarkers([])}>
        Reset
      </button>
      <button
        disabled={!markers.length > 0}
        onClick={() => setMarkers((prev) => prev.slice(0, -1))}
      >
        Remove Marker
      </button>
      <ImageMarker
        src={bodyImage}
        markers={markers}
        onAddMarker={(marker) => setMarkers((prev) => [...prev, marker])}
        markerComponent={CustomMarker}
      />
    </div>
  );
}
export default BodyChart