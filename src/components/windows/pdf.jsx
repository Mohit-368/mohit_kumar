import React from "react";
import MacWindow from "./MacWindow"; // Using your existing window frame
import "./resume.scss";

const Resume = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      width="50vw"
      height="85vh"
    >
      <div className="simple-pdf-container">
        <iframe src="/resume.pdf" title="Resume PDF" className="pdf-iframe" />
      </div>
    </MacWindow>
  );
};

export default Resume;
