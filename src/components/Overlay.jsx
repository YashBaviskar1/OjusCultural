import { useEffect, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";
import { useNavigate } from "react-router-dom";
import clogo from "../assets/clogo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundMusic from "/song.mp3"; // Replace with your audio file path

const cardData = [
  { text: "INFORMALS: 26H", image: "informals.jpg" },
  { text: "FINE ARTS: 5H", image: "finearts.jpg" },
  { text: "PERFORMING ARTS: 2H", image: "performingarts.jpg" },
  { text: "RECREATIONAL: 3H", image: "recreational.jpg" },
  { text: "PASS N GO: 1H", image: "passngo.jpg" },
  { text: "THEME BASED: 4H", image: "themebased.jpg" },
  { text: "GAMING & SPORTS: 8H", image: "gaming.jpg" },
];

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  const sectionRef = useRef(null);
  const [scrollAtBottom, setScrollAtBottom] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const navigate = useNavigate();
  // Audio state and ref
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(new Audio(backgroundMusic));

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 10
      ) {
        setScrollAtBottom(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollAtBottom && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
        setSectionVisible(true);
      }, 500);
    }
  }, [scrollAtBottom]);

  // Audio control effect
  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;

    if (isPlaying) {
      audio.play().catch((error) => {
        console.log("Autoplay blocked:", error);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying]);

  const handleCardClick = (category) => {
    const categoryKey = category.split(":")[0].toLowerCase().replace(" ", "-");
    navigate(`/events/${categoryKey}`);
  };

  const toggleAudio = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""} ${
        hasScroll ? "overlay--scrolled" : ""
      } ${sectionVisible ? "overlay--hidden" : ""}`}
    >
      {/* Navbar with "Login" text on left and toggle button on right */}
      <nav className="navbar">
        <div className="navbar-login">Login</div>
        <div className="audio-toggle">
          <button onClick={toggleAudio} className="audio-btn">
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </nav>

      <div className={`loader ${progress === 100 ? "loader--disappear" : ""}`} />

      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            <img src={clogo} width={310} height={250} alt="Logo" />
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

      <div
        ref={sectionRef}
        className={`auto-scroll-section ${sectionVisible ? "active" : ""}`}
      >
        <h2 className="section-title">Explore the Events</h2>
        <div className="container">
          <div className="row justify-content-center">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3"
                onClick={() => handleCardClick(card.text)}
              >
                <div className="card bg-dark text-white card-overlay">
                  <img src={card.image} className="card-img" alt={card.text} />
                  <div className="card-img-overlay d-flex justify-content-center align-items-center">
                    <h5 className="card-title text-center">{card.text}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .navbar {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          padding: 15px 20px;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-login {
          color: white;
          font-size: 1.5rem;
          font-weight: bold;
        }

        .audio-toggle {
          margin-right: 20px;
        }

        .audio-btn {
          background-color: #fff;
          color: #1e1e2f;
          border: none;
          padding: 8px 16px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }

        .audio-btn:hover {
          background-color: #ddd;
        }

        .overlay--hidden {
          pointer-events: none;
          z-index: -1;
        }

        .auto-scroll-section {
          width: 100vw;
          min-height: 100vh;
          background: linear-gradient(135deg, #1e1e2f, #3a3a5e);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
          padding: 20px;
        }

        .auto-scroll-section.active {
          opacity: 1;
          pointer-events: all;
          z-index: 10;
          position: relative;
        }

        .section-title {
          font-size: 2rem;
          margin-bottom: 40px;
          margin: 30px
        }

        .card-overlay {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          width: 100%;
          cursor: pointer;
        }

        .card-overlay img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          transition: transform 0.3s ease-in-out;
        }

        .card-overlay:hover img {
          transform: scale(1.05);
        }

        .card-img-overlay {
          background: rgba(0, 0, 0, 0.5);
          transition: background 0.3s ease-in-out;
        }

        .card-overlay:hover .card-img-overlay {
          background: rgba(0, 0, 0, 0.7);
        }

        .card-title {
          font-size: 1.2rem;
          font-weight: bold;
        }

        .logo-img {
          width: 300px;
          height: auto;
        }

        @media (max-width: 768px) {
          .auto-scroll-section {
            padding: 10px;
            min-height: auto;
          }

          .section-title {
            font-size: 1.5rem;
            margin-bottom: 15px;
          }

          .card-overlay {
            margin-bottom: 10px;
          }

          .card-overlay img {
            height: 150px;
          }

          .card-title {
            font-size: 1rem;
          }

          .container {
            padding-left: 5px;
            padding-right: 5px;
          }

          .row {
            margin-left: 0;
            margin-right: 0;
          }

          .col-12 {
            padding-left: 5px;
            padding-right: 5px;
          }

          .navbar {
            padding: 10px 15px;
          }

          .navbar-login {
            font-size: 1.2rem;
          }

          .logo-img {
            width: 250px;
          }

          .audio-btn {
            padding: 6px 12px;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2rem;
          }

          .card-overlay img {
            height: 120px;
          }

          .card-title {
            font-size: 0.9rem;
          }

          .logo-img {
            width: 200px;
          }

          .navbar-login {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};