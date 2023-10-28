import { useState } from "react";
import "./App.css";
import React from "react";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-200 text-black p-4 rounded">Tailwind</h1>
      <Card userName="Suraj" btnText="View Profile" />
      <Card userName="Soumya" btnText="View Me" />
      <Card userName="Unknown" />
    </>
  );
}

export default App;
