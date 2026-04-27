import React from "react";
import "./dock.scss";

// FIX: Added { setWindowsState } right here!
const Dock = ({ setWindowsState }) => {
  return (
    <footer className="dock">
      <div className="left">
        <img src="/doc-icons/user.svg" alt="" />
        <p>Mohit Kumar</p>
      </div>
      <div className="mid">
        <div
          onClick={() => {
            setWindowsState((state) => ({ ...state, github: true }));
          }}
          className="icon github"
        >
          <img src="/doc-icons/github.svg" alt="github" />
        </div>
        <div
          onClick={() => {
            setWindowsState((state) => ({ ...state, note: true }));
          }}
          className="icon note"
        >
          <img src="/doc-icons/note.svg" alt="note" />
        </div>
        <div
          onClick={() => {
            setWindowsState((state) => ({ ...state, resume: true }));
          }}
          className="pdf icon"
        >
          <img src="/doc-icons/pdf.svg" alt="pdf" />
        </div>
        <div className="calender icon">
          <img src="/doc-icons/calender.svg" alt="calendar" />
        </div>

        <div className="icon mail">
          <img src="/doc-icons/mail.svg" alt="mail" />
        </div>
        <div className="link icon">
          <img src="/doc-icons/link.svg" alt="link" />
        </div>
        <div
          onClick={() => {
            setWindowsState((state) => ({ ...state, cli: true }));
          }}
          className="icon cli"
        >
          <img src="/doc-icons/cli.svg" alt="cli" />
        </div>
      </div>
      <div className="right">
        <p>Welcome To My Portfolio</p>
      </div>
    </footer>
  );
};

export default Dock;
