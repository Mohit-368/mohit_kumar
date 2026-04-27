import React from "react";
import githubData from "../../assets/git.json";
import MacWindow from "./MacWindow";
import "./github.scss";

const StarIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
  </svg>
);

const LinkIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
    <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
  </svg>
);

const RepoCard = ({ data }) => (
  <div className="bento-card repo-card">
    <div className="repo-header">
      <h3>{data.title}</h3>
      <a
        href={data.repoLink}
        target="_blank"
        rel="noreferrer"
        className="repo-action"
      >
        <LinkIcon /> Source
      </a>
    </div>
    <p className="repo-desc">{data.description}</p>

    <div className="repo-footer">
      <div className="repo-tags">
        {data.tags.map((tag) => (
          <span key={tag} className="tech-badge">
            {tag}
          </span>
        ))}
      </div>
      <div className="repo-metrics">
        <div className="metric-pill">
          <span
            className="lang-dot"
            style={{ backgroundColor: data.languageColor || "#58a6ff" }}
          ></span>
          {data.language}
        </div>
        <div className="metric-pill stars">
          <StarIcon /> {data.stars || 0}
        </div>
      </div>
    </div>
  </div>
);

const ContributionGraph = () => {
  const squares = Array.from({ length: 120 }, (_, i) => {
    // Randomize shades of green to look like real activity
    const intensities = [
      "level-0",
      "level-0",
      "level-1",
      "level-2",
      "level-3",
      "level-4",
    ];
    const randomLevel =
      intensities[Math.floor(Math.random() * intensities.length)];
    return <div key={i} className={`contrib-square ${randomLevel}`}></div>;
  });

  return (
    <div className="bento-card contrib-card">
      <h4>1,024 total contributions </h4>
      <div className="contrib-grid">{squares}</div>
    </div>
  );
};

const Github = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowsState={setWindowsState}
      width="80vw"
      height="85vh"
    >
      <div className="pro-dashboard">
        {/* Sleek Profile Header */}
        <header className="dash-header">
          <div className="brand-lockup">
            <div className="status-indicator"></div>
            <div>
              <h1>Mohit Kumar</h1>
              <p className="subtitle">
                Backend Developer <span className="separator">/</span> Python &
                Django
              </p>
            </div>
          </div>

          <div className="quick-stats">
            <div className="stat-item">
              <span className="stat-value">180+</span>
              <span className="stat-label">LeetCode</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">200+</span>
              <span className="stat-label">Daily Blog Readers</span>
            </div>
          </div>
        </header>

        <div className="dash-grid">
          {/* Left Column: About & Skills */}
          <div className="dash-sidebar">
            <div className="bento-card about-card">
              <div className="card-label">Profile</div>
              <p>
                CS Engineering Student building scalable backend systems &
                developer tools. Highly focused on high-performance
                infrastructure.
              </p>
              <div className="contact-links">
                <a href="https://github.com/Mohit-368">Github</a>
                <a
                  href="https://linkedin.com/in/mohitkumar368"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="bento-card stack-card">
              <div className="card-label">Tech Stack</div>
              <div className="pill-container">
                <span className="tech-pill">Python</span>
                <span className="tech-pill">Django</span>
                <span className="tech-pill">DRF</span>
                <span className="tech-pill">PostgreSQL</span>
                <span className="tech-pill">Docker</span>
                <span className="tech-pill">React.js</span>
                <span className="tech-pill">SCSS</span>
              </div>
            </div>

            <ContributionGraph />
          </div>

          <div className="dash-main">
            <div className="section-heading">
              <h2>Featured Engineering</h2>
              <span className="project-count">{githubData.length} Shipped</span>
            </div>

            <div className="projects-grid">
              {githubData.map((project) => (
                <RepoCard key={project.id} data={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MacWindow>
  );
};

export default Github;
