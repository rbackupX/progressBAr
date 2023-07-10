import React, { useState, useEffect } from "react";
import "./App.css";
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchProgress = () => {
      const newProgress = Math.floor(Math.random() * 101); // Generate random progress between 0 and 100
      setProgress(newProgress);
    };

    const interval = setInterval(fetchProgress, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="image-container">
      <img
        src="https://c3.staticflickr.com/3/2917/14333867272_acc4372727_b.jpg"
        alt="Image"
        className="image"
      />
      <div className="progress-bar">
        <div
          className="progress-bar-inner"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
