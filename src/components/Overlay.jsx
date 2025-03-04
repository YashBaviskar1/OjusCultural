import { useEffect, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";
import clogo from "../assets/clogo.png";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  const sectionRef = useRef(null);
  const [scrollAtBottom, setScrollAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
        setScrollAtBottom(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollAtBottom && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollAtBottom]);

  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""} 
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      {/* Navbar */}
      <nav className="navbar"></nav>

      <div className={`loader ${progress === 100 ? "loader--disappear" : ""}`} />

      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            <img src={clogo} width={320} height={280} alt="Logo" />
          </h1>
          <p className="intro__scroll">Slowly Scroll to begin the journey</p>
          <button className="explore" onClick={() => setPlay(true)}>
            Let's Begin Our Journey
          </button>
        </div>
      )}
<div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">Scroll Below to explore the events..</p>
      </div>

      {/* Auto-scroll Section */}
      <div ref={sectionRef} className="auto-scroll-section">
        <h2>Welcome to the Next Section</h2>
        <p>This section appears when scrolling reaches the end.</p>
      </div>

      {/* Styles */}
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 15px 20px;
          color: white;
          font-size: 1.5rem;
          font-weight: bold;
          z-index: 1000;
          display: flex;
          align-items: center;
        }

        .auto-scroll-section {
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #1e1e2f, #3a3a5e);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        @media (max-width: 768px) {
          .navbar {
            font-size: 1.2rem;
            padding: 10px 15px;
          }
        }
      `}</style>
    </div>
  );
};
