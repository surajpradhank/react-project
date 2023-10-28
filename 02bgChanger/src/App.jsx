import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-end inset-y-56 right-12">
        <div
          className="flex flex-col
        content-center gap-y-3 shadow-xl bg-white py-3 px-2 rounded-2xl"
        >
          {colorButton("red")}
          {colorButton("green")}
          {colorButton("magenta")}
          {colorButton("purple")}
          {colorButton("pink")}
        </div>
      </div>
    </div>
  );

  function colorButton(color) {
    const colorName = color.charAt(0).toUpperCase() + color.slice(1);
    return (
      <button
        onClick={() => {
          setColor(color);
        }}
        className="outline-none py-5 px-3 rounded-full text-white shadow-lg"
        style={{ backgroundColor: color }}
      >
        {colorName}
      </button>
    );
  }
}

export default App;
