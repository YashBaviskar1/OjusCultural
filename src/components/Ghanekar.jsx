import { useState } from "react";
import "../components/Ghanekar.css"; // Ensure the CSS file is linked properly

const CurtainReveal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [formData, setFormData] = useState({ name: "", dept: "", moodleid: "" });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Signed Up:", formData);
    alert("Theatre Booking Confirmed! 🎭");
    setShowSignup(false);
  };

  return (
    <div className="curtain-wrapper">
      {/* Curtain Body */}
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

      {/* Background Image */}
      <div className="content">
        {/* Introductory Text */}
        {!isOpen && <p className="intro-text">🎭 Welcome to Ghanekar Theatre 🎞️</p>}

        {/* Welcome Button */}
        {!isOpen && (
          <button className="welcome-button" onClick={() => setIsOpen(true)}>
         Let the Show Begin 🎬
          </button>
        )}

        {/* Signup Button */}
        {isOpen && !showSignup && (
          <button className="signup-button" onClick={() => setShowSignup(true)}>
            Book Your Seat 🎟️
          </button>
        )}

        {/* Signup Form */}
        {showSignup && (
          <form className="signup-form" onSubmit={handleSubmit}>
            <h2>🎭 Book Your Show 🎟️</h2>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="dept"
              placeholder="Department"
              value={formData.dept}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="moodleid"
              placeholder="MoodleId"
              value={formData.moodleid}
              onChange={handleChange}
              required
            />
            <button type="submit">Confirm Booking</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CurtainReveal;
