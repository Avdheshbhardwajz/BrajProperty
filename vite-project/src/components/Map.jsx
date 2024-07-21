// src/Map.js
import React from "react";

const Map = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  return (
    <div style={containerStyle}>
      <iframe
        src="https://maps.google.com/maps?q=Vrindavan&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        title="Vrindavan Location"
      ></iframe>
    </div>
  );
};

export default Map;
