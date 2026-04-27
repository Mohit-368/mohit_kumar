import React from "react";
import Terminal from "react-console-emulator";
import MacWindow from "./MacWindow";

const commands = {
  about: {
    description: "Displays developer profile and background information.",
    usage: "about",
    fn: () => `
[ IDENTITY ]
Name:      Mohit Kumar
Role:      Backend Developer (Python & Django Specialist)
Location:  Rewari, Haryana, India

[ ACADEMICS ]
Degree:    Computer Science Engineering
University: MDU Rohtak
Batch:     2024 - 2028

[ MISSION ]
Building scalable backend systems, secure REST APIs, and high-performance 
developer tools. Active technical writer and open-source community builder.
`,
  },
  skills: {
    description: "Lists technical skills and core tech stack.",
    usage: "skills",
    fn: () => `
[ CORE STACK ]
* Python, Django, Django REST Framework (DRF)
* PostgreSQL, SQLite, Advanced SQL
* React.js, JavaScript, HTML/CSS, Tailwind

[ INFRASTRUCTURE & TOOLS ]
* Docker, Git, Linux/Unix, VS Code

[ METRICS ]
* 180+ problems solved on LeetCode
* SQL 50 Badge on HackerRank
`,
  },
  projects: {
    description: "Displays featured engineering projects.",
    usage: "projects",
    fn: () => `
1. ReadmeForge
   - Type: CLI Tool / Python
   - Desc: Automates the generation of professional GitHub README files.

2. Hospital Management System
   - Type: Full REST API / Django & PostgreSQL
   - Desc: Handles patient registration, appointments, and role-based auth.

3. Smart Log Analyzer
   - Type: Security Tool / Python
   - Desc: Detects error patterns and suspicious IP addresses in server logs.

4. BOLD RAYS
   - Type: Full-stack App / Django
   - Desc: Social media application with OTP authentication and Django signals.
`,
  },
  contact: {
    description: "Shows contact links and email.",
    usage: "contact",
    fn: () => `
[ COMMUNICATION CHANNELS ]
Email:     berwaliamohit@gmail.com
LinkedIn:  linkedin.com/in/mohitkumar368
Blog:      hashnode.com/@mohitkumar368 (200+ Daily Readers)

Status:    Open to remote backend internships.
`,
  },
  sudo: {
    description: "Execute a command as superuser.",
    usage: "sudo <command>",
    fn: () =>
      `Permission denied: User 'guest' is not in the sudoers file. This incident will be reported.`,
  },
};

const TerminalApp = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      width="65vw"
      height="70vh"
    >
      <div className="terminal-strict-wrapper">
        <Terminal
          commands={commands}
          welcomeMessage={[
            "Welcome to nexus-workspace v1.0.4",
            "System: Ubuntu 22.04.2 LTS (aarch64)",
            "",
            "Connection established. Guest access granted.",
            "",
            "--- QUICK COMMANDS ---",
            "  about      : View developer background & identity.",
            "  skills     : List core tech stack & technical skills.",
            "  projects   : Display featured backend engineering projects.",
            "  contact    : Show communication channels & links.",
            "  clear      : Clear the terminal screen.",
            "----------------------",
            "",
            "Type a command above and press Enter.",
            "",
          ]}
          /* The Unicode non-breaking hyphen (\u2011) stops the wrap bug */
          promptLabel={"mohit@nexus\u2011os:~$"}
          style={{
            backgroundColor: "#09090b",
            minHeight: "100%",
            borderRadius: "0 0 10px 10px",
            border: "none",
          }}
          contentStyle={{
            padding: "1.5rem",
            fontFamily: '"Fira Code", monospace',
          }}
          promptLabelStyle={{
            color: "#3fb950",
            fontWeight: "bold",
          }}
          inputTextStyle={{
            color: "#fafafa",
            fontFamily: '"Fira Code", monospace',
          }}
          messageStyle={{
            color: "#a1a1aa",
            fontFamily: '"Fira Code", monospace',
            lineHeight: "1.6",
            whiteSpace: "pre-wrap",
          }}
          ignoreCommandCase={true}
          noAutoScroll={false}
          errorText={
            "Command '[command]' not found. Type 'help' for a full list of commands."
          }
        />
      </div>
    </MacWindow>
  );
};

export default TerminalApp;
