import { useState } from "react";

import "./App.scss";
import Dock from "./components/dock";
import Twidget from "./components/time_widget";
import Dwidget from "./components/date";

import Github from "./components/windows/github";
import Notes from "./components/windows/notes";
import Resume from "./components/windows/pdf";
import Spotify from "./components/spotify";
import TerminalApp from "./components/windows/terminalapp";
// IMPORT YOUR NEW COMPONENT
import Wallpaper from "./components/windows/Wallpaper";

function App() {
  // NEW: State to track the current wallpaper
  const [wallpaper, setWallpaper] = useState("/x.jpg");

  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    cli: false,
    wallpaper: false, // NEW: Add to window manager
  });

  const [zIndexes, setZIndexes] = useState({
    github: 100,
    note: 101,
    resume: 102,
    cli: 103,
    wallpaper: 104, // NEW: Give it a starting Z-index
  });

  const [highestZ, setHighestZ] = useState(104);

  const focusWindow = (appName) => {
    setHighestZ((prev) => prev + 1);
    setZIndexes((prev) => ({ ...prev, [appName]: highestZ + 1 }));
  };

  const openApp = (appName) => {
    setWindowsState((state) => ({ ...state, [appName]: true }));
    focusWindow(appName);
  };

  return (
    <main style={{ backgroundImage: `url(${wallpaper})` }}>
      <div className="nav">
        <Dwidget />
        <Twidget />
      </div>

      <Dock openApp={openApp} />

      <Spotify />

      {windowsState.cli && (
        <TerminalApp
          windowName="cli"
          setWindowsState={setWindowsState}
          zIndex={zIndexes.cli}
          focusWindow={focusWindow}
        />
      )}
      {windowsState.note && (
        <Notes
          windowName="note"
          setWindowsState={setWindowsState}
          zIndex={zIndexes.note}
          focusWindow={focusWindow}
        />
      )}
      {windowsState.resume && (
        <Resume
          windowName="resume"
          setWindowsState={setWindowsState}
          zIndex={zIndexes.resume}
          focusWindow={focusWindow}
        />
      )}
      {windowsState.github && (
        <Github
          windowName="github"
          setWindowsState={setWindowsState}
          zIndex={zIndexes.github}
          focusWindow={focusWindow}
        />
      )}

      {windowsState.wallpaper && (
        <Wallpaper
          windowName="wallpaper"
          setWindowsState={setWindowsState}
          zIndex={zIndexes.wallpaper}
          focusWindow={focusWindow}
          setWallpaper={setWallpaper} // Pass the setter function down!
        />
      )}
    </main>
  );
}

export default App;
