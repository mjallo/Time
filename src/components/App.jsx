import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  function getCurrentTime() {
    return new Date().toLocaleTimeString("en-US", { hour12: false });
  }

  const [time, setTime] = useState(getCurrentTime);

  function updateTime() {
    setTime(getCurrentTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
