import React from "react";
import MacWindow from "./MacWindow"; // Using your existing window frame
import "./resume.scss";

// Notice zIndex and focusWindow are destructured here!
const Resume = ({ windowName, setWindowsState, zIndex, focusWindow }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      // And passed in here!
      zIndex={zIndex}
      focusWindow={focusWindow}
      width="80vw"
      height="85vh"
    >
      {/* The rest of your app content */}
      <div className="simple-pdf-container">
        <iframe src="/resume.pdf" title="Resume PDF" className="pdf-iframe" />
      </div>
    </MacWindow>
  );
};

export default Resume;
