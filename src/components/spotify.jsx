import React from "react";
import "./spotify.scss";

const Spotify = ({ setWindowsState }) => {
  return (
    <div className="fixed-spotify-widget">
      {/* Minimalist header just for the close button */}

      {/* The exact iframe you provided */}
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: "12px", border: "none" }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DWXVJK4aT7pmk?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Spotify;
