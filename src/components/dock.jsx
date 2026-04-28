import React from "react";
import "./dock.scss";

// Receive the new openApp function
const Dock = ({ openApp }) => {
  return (
    <footer className="dock">
      <div className="left">
        <img src="/doc-icons/user.svg" alt="" />
        <p>Mohit Kumar</p>
      </div>
      <div className="mid">
        <div onClick={() => openApp("github")} className="icon github">
          <img src="/doc-icons/github.svg" alt="github" />
        </div>
        <div onClick={() => openApp("note")} className="icon note">
          <img src="/doc-icons/note.svg" alt="note" />
        </div>
        <div onClick={() => openApp("resume")} className="pdf icon">
          <img src="/doc-icons/pdf.svg" alt="pdf" />
        </div>
        <div
          className="calender icon"
          onClick={() =>
            window.open(
              "https://calendar.google.com",
              "_blank",
              "noopener,noreferrer",
            )
          }
        >
          <img src="/doc-icons/calender.svg" alt="calendar" />
        </div>

        <div
          className="icon mail"
          onClick={() =>
            window.open(
              "mailto:berwaliamohit@gmail.com",
              "_blank",
              "noopener,noreferrer",
            )
          }
        >
          <img src="/doc-icons/mail.svg" alt="mail" />
        </div>

        <div
          className="link icon"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/mohitkumar368",
              "_blank",
              "noopener,noreferrer",
            )
          }
        >
          <img src="/doc-icons/link.svg" alt="link" />
        </div>
        <div onClick={() => openApp("cli")} className="icon cli">
          <img src="/doc-icons/cli.svg" alt="cli" />
        </div>
      </div>
      <div
        className="right"
        onClick={() => openApp("wallpaper")}
        style={{ cursor: "pointer" }}
      >
        <p>Change Wallpaper</p>
      </div>
    </footer>
  );
};

export default Dock;
