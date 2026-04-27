import { useState } from "react";

import "./App.scss";
import Dock from "./components/dock";
import Twidget from "./components/time_widget";
import Dwidget from "./components/date";

import MacWindow from "./components/windows/MacWindow";
import Github from "./components/windows/github";
import Notes from "./components/windows/notes";

import Resume from "./components/windows/pdf";
import Spotify from "./components/spotify";
import TerminalApp from "./components/windows/terminalapp";

function App() {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    cli: false,
  });

  return (
    <main>
      <div className="nav">
        <Dwidget />
        <Twidget />
      </div>
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
      <Spotify />
      {windowsState.cli && (
        <TerminalApp
          windowName="cli"
          windowsState={windowsState}
          setWindowsState={setWindowsState}
        />
      )}
      {windowsState.note && (
        <Notes
          windowName="note"
          windowsState={windowsState}
          setWindowsState={setWindowsState}
        />
      )}
      {windowsState.resume && (
        <Resume
          windowName="resume"
          windowsState={windowsState}
          setWindowsState={setWindowsState}
        />
      )}
      {windowsState.github && (
        <Github
          windowName="github"
          windowsState={windowsState}
          setWindowsState={setWindowsState}
        />
      )}
    </main>
  );
}

export default App;
