import React, { useState } from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);
const MaximizeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="12"
    height="12"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
  </svg>
);
const MinimizeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const MacWindow = ({
  children,
  width = "75vw",
  height = "80vh",
  minW = 600,
  minH = 400,
  maxW = 1400,
  maxH = 900,
  disableResize = false,
  windowName,
  setWindowsState,
  zIndex, // NEW PROP
  focusWindow, // NEW PROP
}) => {
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMaximize = () => {
    if (!disableResize) setIsMaximized(!isMaximized);
  };

  const handleMinimize = () => {
    if (setWindowsState)
      setWindowsState((state) => ({ ...state, [windowName]: false }));
  };

  return (
    <Rnd
      // NEW: Apply zIndex and click-to-focus listener
      style={{ zIndex: zIndex }}
      onMouseDown={() => focusWindow && focusWindow(windowName)}
      disableDragging={isMaximized}
      enableResizing={disableResize ? false : !isMaximized}
      className={isMaximized ? "maximized-window" : ""}
      default={{ width: width, height: height, x: 100, y: 50 }}
      minWidth={minW}
      minHeight={minH}
      maxWidth={isMaximized ? "100vw" : maxW}
      maxHeight={isMaximized ? "100vh" : maxH}
      bounds="window"
      dragHandleClassName="custom-drag-bar"
    >
      <div
        className="custom-window-frame"
        style={{ borderRadius: isMaximized ? "0px" : "10px" }}
      >
        <div className="custom-drag-bar" onDoubleClick={handleMaximize}>
          <div className="window-brand">
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            >
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" y1="19" x2="20" y2="19"></line>
            </svg>
            <span>nexus-workspace / {windowName}.exe</span>
          </div>

          <div className="window-controls">
            <button className="control-btn minimize" onClick={handleMinimize}>
              <MinimizeIcon />
            </button>
            <button
              className="control-btn maximize"
              onClick={handleMaximize}
              disabled={disableResize}
            >
              <MaximizeIcon />
            </button>
            <button
              className="control-btn close"
              onClick={() =>
                setWindowsState &&
                setWindowsState((state) => ({ ...state, [windowName]: false }))
              }
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        <div className="window-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
