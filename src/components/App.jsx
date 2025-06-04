import "../styles.css";
import React, { useState } from "react";
export default function App() {
  const [count, setCount] = useState(1);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className="App">
      <div class="container">
        <h1>{count}</h1>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
}
