import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { APIURL } from "../url.config";

const EventRegistration2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const eventName = location.state?.eventName || "Unknown Event";
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [performanceDescription, setPerformanceDescription] = useState("");
  const [driveLink, setDriveLink] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      try {
        const response = await fetch(`${APIURL}/api/get/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  const handleRegistration = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch(`${APIURL}api/events/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          event: 22, 
          email : email,
          phone_no : phone,
          performance_description: performanceDescription,
          google_drive_link: driveLink,
        }),
      });

      if (response.ok) {
        alert("Registration successful for the event");
      } else {
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error registering for event:", error);
      alert("Registration failed due to network error");
    }
  };

  return (
    <div 
      className="d-flex align-items-center justify-content-center min-vh-100" 
      style={{ 
        backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/571a8a1ab6aa6012a71e3971/1547218070587-DSKXEM4CF22JXMAHTDZC/Craft_Republic_header_background.jpg')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
        width: "100vw",
        padding: "20px"
      }}
    >
      <div 
        className="card p-4 shadow-lg text-center w-100"
        style={{ 
          maxWidth: "450px", 
          backgroundColor: "rgba(255, 255, 255, 0.95)", 
          borderRadius: "15px" 
        }}
      >
        <h2 className="text-primary fw-bold">Event Registration</h2>
        
        <p className="fw-bold fs-5">Event: {eventName}</p>
        <p className="fw-bold">Name: {user?.name || "My Name"}</p>
        <p className="fw-bold">Department: {user?.department || "Dept"}</p>
        <p className="fw-bold">Year: {user?.year || "FE"}</p>

        <div className="input-group mb-3">
          <span className="input-group-text bg-secondary text-white">+91</span>
          <input type="text" className="form-control" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
        </div>

        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        <div className="mb-3">
          <textarea className="form-control" placeholder="Performance Description" rows="3" value={performanceDescription} onChange={e => setPerformanceDescription(e.target.value)}></textarea>
        </div>

        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Google Drive Link" value={driveLink} onChange={e => setDriveLink(e.target.value)} />
        </div>

        <button className="btn btn-dark w-100 py-2" onClick={handleRegistration}>
          Register
        </button>

        <p className="text-danger fw-bold mt-3">Make sure your file in Google Drive is visible to anyone with the link</p>
      </div>
    </div>
  );
};

export default EventRegistration2;