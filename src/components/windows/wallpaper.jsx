import React from "react";
import MacWindow from "./MacWindow";
import "./wallpaper.scss";

// Add your image paths here. Make sure these images are in your 'public' folder!
const wallpapers = [
  "/x.jpg", // Your current default
  "/wall1.jpg", // Replace with your actual file names
  "/wall2.jpg",
  "/wall3.jpg",
  "/wall4.jpg",
];

const Wallpaper = ({
  windowName,
  setWindowsState,
  zIndex,
  focusWindow,
  setWallpaper,
}) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      zIndex={zIndex}
      focusWindow={focusWindow}
      width="50vw"
      height="60vh"
    >
      <div className="wallpaper-app">
        <h2>Appearance & Wallpapers</h2>
        <div className="wallpaper-grid">
          {wallpapers.map((bg, index) => (
            <div
              key={index}
              className="wallpaper-card"
              onClick={() => setWallpaper(bg)}
              style={{ backgroundImage: `url(${bg})` }}
              title="Click to set wallpaper"
            ></div>
          ))}
        </div>
      </div>
    </MacWindow>
  );
};

export default Wallpaper;
