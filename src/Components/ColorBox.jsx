import React, { useState } from "react";

const ColorBox = ({ initialColor, colorOptions }) => {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    setColor(randomColor);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: color,
          margin: "10px auto",
          borderRadius: "10px",
          transition: "background-color 0.3s ease",
        }}
      ></div>
      <button className="add-button" onClick={changeColor} style={{ padding: "10px 15px", fontSize: "16px", cursor: "pointer" }}>
        Changer de couleur
      </button>
    </div>
  );
};

export default ColorBox;
