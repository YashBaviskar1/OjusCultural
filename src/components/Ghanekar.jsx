import { useState, useEffect } from "react";
import "../components/Ghanekar.css";
import { APIURL } from "../url.config";

const CurtainReveal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isFull, setIsFull] = useState(true);

  return (
    <div className="curtain-wrapper">
      <div className="curtainBody">
        <div id="leftCurtain" className={`curtainContainer ${isOpen ? "open-left" : ""}`}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="unCurtain"></div>
          ))}
        </div>
        <div id="rightCurtain" className={`curtainContainer ${isOpen ? "open-right" : ""}`}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="unCurtain"></div>
          ))}
        </div>
      </div>

      <div className="content">
        {!isOpen && <p className="intro-text">🎭 Welcome to Ghanekar Theatre 🎞️</p>}

        {!isOpen && (
          <button className="welcome-button" onClick={() => setIsOpen(true)}>
            Let the Show Begin 🎬
          </button>
        )}

        {isOpen && (
          <button className="signup-button" disabled>
            It's Full
          </button>
        )}
      </div>
    </div>
  );
};

export default CurtainReveal;