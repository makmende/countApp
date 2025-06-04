import React, { useState } from "react";
import "../styles.css";

let time = new Date().toLocaleTimeString();

function TimeApp() {
  // create a time usestate
  let [timeNow, setTime] = useState(time);

  function updateTime() {
    let newtime = new Date().toLocaleTimeString();
    setTime(newtime);
  }
  setInterval(updateTime, 1000);
  return (
    <div>
      <h1 className="h1">{timeNow}</h1>
      <button className="button" onClick={updateTime}>
        Get Time
      </button>
    </div>
  );
}
export default TimeApp;
