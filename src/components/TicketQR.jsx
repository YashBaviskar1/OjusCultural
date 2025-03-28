import React, { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import { APIURL } from "../url.config";
import "bootstrap/dist/css/bootstrap.min.css";

const TicketQRGenerator = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        navigate("/Login2");
        return;
      }

      try {
        const response = await fetch(`${APIURL}/api/get/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          navigate("/Login2");
          return;
        }

        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to fetch user data");
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-black text-white text-center">
        <div>
          <h2>Loading Ticket...</h2>
          <p>Please wait while we load your ticket information</p>
        </div>
      </div>
    );
  }

  if (error || !userData) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-black text-white text-center">
        <div className="p-4 bg-dark rounded">
          <h2 className="text-danger">Error</h2>
          <p>{error || "Failed to load ticket information"}</p>
          <button onClick={() => navigate("/Login2")} className="btn btn-primary mt-2">
            Return to Login
          </button>
        </div>
      </div>
    );
  }

  const ticketIds = [
    "98406510456013475623405610576134587346985327456145",
    "10985714098561049857140958703458714098751908745048701957",
    "7434957234957209382043820934820934849850348908",
    "1594169847104283503853405834905",
    "16491874092384028342034820348209348209",
    "34139847142934729347923479237428934729834",
    "742937429374293472934729347239092342342323109283018230918320912830912",
    "80192810298088438881281928739487230471048304402389420394820934820934823094823094832904",
    "159236523046230621034871230948721309487120958124095714390573490571094785109845714098357340987",
  ];
  
  // Function to pick a random ticket ID
  const getRandomTicket = () => {
    const randomIndex = Math.floor(Math.random() * ticketIds.length);
    return ticketIds[randomIndex];
  };
  
  // Generate the QR value with a random ticket ID
  const qrValue = `https://ojus-culturals.vercel.app/ticket17333345672129899234/${getRandomTicket()}?name=${encodeURIComponent(
    userData.name
  )}&moodleId=${encodeURIComponent(userData.moodle_id)}`;

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-black text-white text-center">
      <div className="p-4 bg-dark rounded w-75">
        <h2>Your Theatre Ticket</h2>
        <h4 className="text-warning">Take a screenshot</h4>
        <div className="d-flex justify-content-center my-3">
          <QRCodeCanvas value={qrValue} size={200} includeMargin={true} level="H" />
        </div>
        <ul className="list-unstyled text-start mx-auto text-white" style={{ maxWidth: "300px" }}>
          <li>Present this QR code at the venue for entry</li>
          <li>Bring your ID card</li>
          <li>Be on time or No Entry!</li>
        </ul>
      </div>
    </div>
  );
};

export default TicketQRGenerator;
