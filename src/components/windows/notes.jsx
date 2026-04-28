import React from "react";
import ReactMarkdown from "react-markdown";
import MacWindow from "./MacWindow";

// 1. Add ?raw to the end of the import
import markdownString from "../../assets/notes.md?raw";
import "./notes.scss";

// Notice zIndex and focusWindow are destructured here!
const Notes = ({ windowName, setWindowsState, zIndex, focusWindow }) => {
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
      <div className="obsidian-notes-app">
        <div className="notes-sidebar">
          <div className="sidebar-header">Explorer</div>
          <div className="file active">
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
            about_me.md
          </div>
        </div>

        <div className="notes-editor">
          <div className="markdown-body">
            {/* 3. Pass the imported string directly into ReactMarkdown */}
            <ReactMarkdown>{markdownString}</ReactMarkdown>
          </div>
        </div>
      </div>
    </MacWindow>
  );
};

export default Notes;
