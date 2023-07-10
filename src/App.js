import React, { useState, useEffect } from "react";
import "./App.css";

const newimages = [
  {
    src: require("./images/desktop-high-res.jpg"),
    progress: 90,
    link: "https://example.com/image1",
  },
  {
    src: require("./images/desktop-high-res.jpg"),
    progress: 0,
    link: "https://example.com/image1",
  },
  {
    src: require("./images/enterprise-high-res.jpg"),
    progress: 50,
    link: "https://example.com/image1",
  },
  {
    src: require("./images/mobile-high-res.jpg"),
    progress: 50,
    link: "https://example.com/image1",
  },
];

const Grid = () => {
  return (
    <div className="image-grid">
      {newimages.map((image, index) => (
        <div className="image-container" key={index}>
          <a
            href={image.link}
            target="_blank"
            rel="noopener noreferrer"
            className="image-link"
          >
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className={`image ${image.progress === 0 ? "gray" : ""}`}
            />
            <div className="progress-bar">
              <div
                className="progress-bar-inner"
                style={{ width: `${image.progress}%` }}
              ></div>
            </div>
          </a>
          <div className="percentage">{`${image.progress}%`}</div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
