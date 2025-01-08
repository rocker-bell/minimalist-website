import React, { useEffect, useState } from "react";
import "../styles/chrono.css";

const ChronoComponent = () => {
  const [timestamps, setTimestamps] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    // Load timestamps from localStorage on mount
    const savedTimestamps = JSON.parse(localStorage.getItem("time-container")) || [];
    setTimestamps(savedTimestamps);

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  const handleStop = () => {
    const newTimestamp = {
      id: timestamps.length + 1,
      timestamp: new Date().toLocaleString(),
    };
    const updatedTimestamps = [...timestamps, newTimestamp];
    setTimestamps(updatedTimestamps);
    localStorage.setItem("time-container", JSON.stringify(updatedTimestamps));
  };

  const handleDelete = (id) => {
    const updatedTimestamps = timestamps.filter((item) => item.id !== id);
    setTimestamps(updatedTimestamps);
    localStorage.setItem("time-container", JSON.stringify(updatedTimestamps));
  };

  return (
    <div className="wrapper-chrono">
      <div className="contentchrono contentchrono1">
        <div id="analog">{currentTime}</div>
      </div>
      <div className="contentchrono contentchrono2">
        <button className="btn" id="start-btn">Start</button>
        <button className="btn" id="stop-btn" onClick={handleStop}>
          Stop
        </button>
      </div>
      <div className="contentchrono contentchrono3">
        {timestamps.map((data) => (
          <div key={data.id} className="newtime-container">
            <strong>id:</strong> {data.id} <strong>timestamp:</strong> {data.timestamp}
            <button
              id="delete-timestamp"
              onClick={() => handleDelete(data.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChronoComponent;
