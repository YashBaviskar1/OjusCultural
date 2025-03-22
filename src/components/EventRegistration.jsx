import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { APIURL } from "../url.config";

const EventRegistration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const eventName = location.state?.eventName || "Unknown Event";
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

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
          console.log("Fetched User Data:", userData);
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

  const Events = [
    { id: 1, name: "MR & MRS APSIT FASHION SHOW" },
    { id: 4, name: "VALORANT" },
    { id: 5, name: "BGMI" },
    { id: 6, name: "TREASURE HUNT" },
  ];
  const teams = ["BGMI", "VALORANT", "TREASURE HUNT"]
  const handleRegistration = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      alert("Please login first");
      navigate("/login");
      return;
    }
  
    const event = Events.find(e => e.name === eventName);
    if (!event) {
      console.log("Event not found!");
      return;
    }
  
    try {
      const response = await fetch(`${APIURL}/api/events/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          event: event.id,
          email: email,
          phone_no: phone
        })
      });
  
      if (response.ok) {
        alert("Registration successful for the event");
        console.log(`Registered Event: ${eventName}, Event ID: ${event.id}`);
        if (teams.some(teamName => teamName.toLowerCase() === event.name.toLowerCase())) {
          navigate("/team", { 
            state: { 
              eventId: event.id,
              eventName: event.name
            }
          });
        }
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

        <button className="btn btn-dark w-100" onClick={handleRegistration}>
          Register
        </button>

        <p className="text-danger fw-bold mt-3 text-center">Give Details once! Never Again!</p>
      </div>
    </div>
  );
};

export default EventRegistration;
