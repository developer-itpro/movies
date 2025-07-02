import React from "react";
import "./GithubBanner.css";

const GithubBanner = () => {
  return (
    <a
      href="https://github.com/developer-itpro/movies"
      className="github-banner"
      target="_blank"
      rel="noopener noreferrer"
    >
      Quelle anzeigen auf <span className="matrix-name">GitHub</span>
    </a>
  );
};

export default GithubBanner;
