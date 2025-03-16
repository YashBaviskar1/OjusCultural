import React from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EventRegistration = () => {
  const location = useLocation();
  const eventName = location.state?.eventName || "Unknown Event";

  const handleRegistration = () => {
    console.log(`Registered Event is: ${eventName}`);
  };

  return (
    <div 
      style={{ 
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/571a8a1ab6aa6012a71e3971/1547218070587-DSKXEM4CF22JXMAHTDZC/Craft_Republic_header_background.jpg')", 
        backgroundSize: "cover", 
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "400px", backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "15px" }}>
        <h2 className="text-center mb-3">Event Registration</h2>
        <p className="fw-bold">Event: {eventName}</p>
        <p className="fw-bold">Name: My Name</p>
        <p className="fw-bold">Department: Dept</p>
        <p className="fw-bold">Year: FE</p>

        {/* Phone Number Field with Fixed +91 */}
        <div className="input-group mb-3">
          <span className="input-group-text bg-secondary text-white">+91</span>
          <input type="text" className="form-control" placeholder="Phone Number" />
        </div>

        {/* Email Input */}
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" />
        </div>

        {/* Register Button */}
        <button className="btn btn-dark w-100" onClick={handleRegistration}>
          Register
        </button>

        <p className="text-danger fw-bold mt-3 text-center">Give Details once! Never Again!</p>
      </div>
    </div>
  );
};

export default EventRegistration;
