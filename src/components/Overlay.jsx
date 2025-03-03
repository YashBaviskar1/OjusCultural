import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();

  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""} 
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      {/* Navbar */}
      <nav className="navbar">
        <h2>OJUS25</h2>
      </nav>

      <div className={`loader ${progress === 100 ? "loader--disappear" : ""}`} />

      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            CULTURALS
            <div className="spinner">
              <div className="spinner__image" />
            </div>
          </h1>
          <p className="intro__scroll">Slowly Scroll to begin the journey</p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            Lets Begin Our Journey
          </button>
        </div>
      )}



      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            Explore Events
          </button>
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
 