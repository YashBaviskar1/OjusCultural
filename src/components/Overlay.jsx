import { useEffect, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";
import { useNavigate } from "react-router-dom";
import clogo from "../assets/clogo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false); // Close menu after navigation
  };
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('accessToken');
      if (!token) return;

      try {
        const response = await fetch('http://127.0.0.1:8000/api/get', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUser(null);
    navigate('/login');
  };
  return (
    <nav className="navbar fixed-top">
      <div className="navbar-brand">
        OJUS 25
      </div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
  {user ? (
    <div className="d-flex align-items-center gap-3">
      <span className="navbar-text">Hello, {user.name}</span>
      <button 
        onClick={handleLogout}
        className="btn btn-outline-danger"
      >
        Logout
      </button>
    </div>
  ) : (
    <li>
      <button onClick={() => handleNavigation("/login")}>Login</button>
    </li>
  )}
  <li>
    <button onClick={() => handleNavigation("/gallery")}>Gallery</button>
  </li>
  <li>
    <button onClick={() => handleNavigation("/schedule")}>Schedule</button>
  </li>
</ul>

      {/* Navbar Styles */}
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 15px 20px;
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-brand {
          color: white;
          font-size: 1.5rem;
          font-weight: bold;
          font-family: "Ring";
        }

        .nav-links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          gap: 20px;
          font-family: "Ring";
        }

        .nav-links button {
          color: white;
          font-size: 1.2rem;
          font-weight: bold;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .nav-links button:hover {
          color: #ffcc00;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          z-index: 2001; /* Above the menu */
        }

        .hamburger span {
          width: 30px;
          height: 3px;
          background: white;
          transition: all 0.3s ease;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        /* Mobile Menu Styles */
        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .nav-links {
            position: fixed;
            top: 0;
            right: ${isMobileMenuOpen ? "0" : "-100%"};
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.95);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 40px;
            transition: right 0.5s ease-in-out;
            z-index: 2000;
          }

          .nav-links.open {
            right: 0; /* Slide in from right */
          }

          .nav-links button {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            padding: 10px 15px;
          }

          .navbar-brand {
            font-size: 1.2rem;
          }

          .hamburger span {
            width: 25px;
            height: 2px;
          }

          .nav-links button {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </nav>
  );
};

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  const sectionRef = useRef(null);
  const [scrollAtBottom, setScrollAtBottom] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
        setScrollAtBottom(true);
        setSectionVisible(true);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((oldProgress) => {
        const newProgress = oldProgress + 1;
        if (newProgress === 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500); // Add small delay before hiding
          return 100;
        }
        return newProgress;
      });
    }, 30); // Adjust timing as needed

    return () => clearInterval(timer);
  }, []);

  const handleCardClick = (category) => {
    const categoryKey = category.split(":")[0].toLowerCase().replace(" ", "-");
    navigate(`/events/${categoryKey}`);
  };

  if (loading) {
    return (
      <div className="preloader">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
        <div className="progress-text">{loadingProgress}%</div>
        <style jsx>{`
          .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: #000;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
          }

          .progress-bar {
            width: 200px;
            height: 4px;
            background: #333;
            border-radius: 2px;
            overflow: hidden;
          }

          .progress-fill {
            height: 100%;
            background: #fff;
            transition: width 0.3s ease-out;
          }

          .progress-text {
            color: #fff;
            margin-top: 20px;
            font-size: 1.2rem;
            font-family: "Ring";
          }
        `}</style>
      </div>
    );
  }

  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""} ${
        hasScroll ? "overlay--scrolled" : ""
      }`}
    >
      <Navbar />

      <div className={`loader ${progress === 100 ? "loader--disappear" : ""}`} />

      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            <img src="https://res.cloudinary.com/divma6tu0/image/upload/v1741954718/dept%20logos/qdutcbdds3ckshwobiiv.png" width={310} height={260} alt="Logo" />
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
        id="auto-scroll-section"
      >
        <h2 className="section-title">Explore the Events</h2>
        <div className="container"> 
          <div className="row justify-content-center">
            {/* Card 1: Informals */}
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3"
              onClick={() => handleCardClick("INFORMALS: 26H")}
            >
              <div className="card bg-dark text-white card-overlay">
                <img src="/informals.jpg" className="card-img" alt="INFORMALS: 26H" />
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                  <h5 className="card-title text-center">INFORMALS</h5>
                </div>
              </div>
            </div>

            {/* Card 2: Fine Arts */}
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3"
              onClick={() => handleCardClick("FINE ARTS: 5H")}
            >
              <div className="card bg-dark text-white card-overlay">
                <img src="/finearts.webp" className="card-img" alt="FINE ARTS: 5H" />
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                  <h5 className="card-title text-center">FINE ARTS</h5>
                </div>
              </div>
            </div>

            {/* Card 3: Performing Arts */}
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3"
              onClick={() => handleCardClick("PERFORMING ARTS: 2H")}
            >
              <div className="card bg-dark text-white card-overlay">
                <img
                  src="/performingarts.jpg"
                  className="card-img"
                  alt="PERFORMING ARTS: 2H"
                />
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                  <h5 className="card-title text-center">PERFORMING ARTS</h5>
                </div>
              </div>
            </div>

            {/* Card 4: Recreational */}
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3"
              onClick={() => handleCardClick("RECREATIONAL: 3H")}
            >
              <div className="card bg-dark text-white card-overlay">
                <img src="/recreational.jpeg" className="card-img" alt="RECREATIONAL: 3H" />
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                  <h5 className="card-title text-center">RECREATIONAL</h5>
                </div>
              </div>
            </div>

            {/* Card 5: Pass N Go */}
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3"
              onClick={() => handleCardClick("PASS N GO: 1H")}
            >
              <div className="card bg-dark text-white card-overlay">
                <img src="/passandgo.jpg" className="card-img" alt="PASS N GO: 1H" />
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                  <h5 className="card-title text-center">PASS N GO</h5>
                </div>
              </div>
            </div>

            {/* Card 6: Theme Based */}
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3"
              onClick={() => handleCardClick("THEME BASED: 4H")}
            >
              <div className="card bg-dark text-white card-overlay">
                <img src="/themebased.jpg" className="card-img" alt="THEME BASED: 4H" />
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                  <h5 className="card-title text-center">THEME BASED</h5>
                </div>
              </div>
            </div>

            {/* Card 7: Gaming & Sports */}
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3"
              onClick={() => handleCardClick("GAMING & SPORTS: 8H")}
            >
              <div className="card bg-dark text-white card-overlay">
                <img src="/gamingandsports.jpg" className="card-img" alt="GAMING & SPORTS: 8H" />
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                  <h5 className="card-title text-center">GAMING & SPORTS</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay Styles */}
      <style jsx>{`
        .overlay--hidden {
          pointer-events: none;
          z-index: -1;
        }

        .auto-scroll-section {
          width: 100vw;
          min-height: 100vh;
          position: relative;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          opacity: 0.5;
          transition: opacity 0.5s ease-in-out;
          padding: 20px;
          margin-top: 70px;
          
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url("https://res.cloudinary.com/divma6tu0/image/upload/v1741980716/events/brxkonxjvnfouzysu3k0.jpg");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            filter: blur(3px) brightness(0.6);
            z-index: -1;
          }

          /* Add dark gradient overlay */
          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 200px; /* Adjust this value to control the height of the dark overlay */
            background: linear-gradient(to bottom, 
              rgba(0, 0, 0, 1) 60%,
              rgba(0, 0, 0, 0.5) 90%,
              rgba(0, 0, 0, 0) 100%
            );
            z-index: -1;
          }
        }

        .auto-scroll-section.active {
          opacity: 1;
          pointer-events: all;
          z-index: 10;
          position: relative;
        }

        @keyframes gradientAnimation {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        .section-title {
          font-size: 2rem;
          margin-bottom: 40px;
          margin: 50px;
          padding: 20px;
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

        .logo{
            padding-bottom: 70px;
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
            font-size: 1.2rem;
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

          .logo-img {
            width: 250px;
          }
            .logo{
            padding-bottom: 70px;
            }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.5rem;
          }

          .card-overlay img {
            height: 120px;
          }

          .card-title {
            font-size: 1.2rem;
          }

          .logo-img {
            width: 200px;
          }
            .logo{
            padding-bottom: 70px;
            }
        }
      `}</style>
    </div>
  );
};

export default Overlay;