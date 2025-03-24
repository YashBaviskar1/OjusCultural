import React, { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import { APIURL } from "../url.config";

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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-300 w-96 text-center">
          <h2 className="text-xl font-bold mb-4">Loading Ticket...</h2>
          <p>Please wait while we load your ticket information</p>
        </div>
      </div>
    );
  }

  if (error || !userData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-300 w-96 text-center">
          <h2 className="text-xl font-bold mb-4 text-red-500">Error</h2>
          <p>{error || "Failed to load ticket information"}</p>
          <button
            onClick={() => navigate("/Login2")}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Return to Login
          </button>
        </div>
      </div>
    );
  }

  const qrValue = `https://ojus-culturals.vercel.app/ticket9981257890?name=${encodeURIComponent(
    userData.name
  )}&moodleId=${encodeURIComponent(userData.moodle_id)}`;

  return (
    <div >
      <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-300 w-96 text-center">
        <h2 style={{textAlign: "center", color:"black"}}>Your Theatre Ticket</h2>
        <h4 className="text1">Take screenshot</h4>
        <div className="mb-4">
          {/* <p className="font-semibold">Name: {userData.name}</p>
          <p className="font-semibold">Moodle ID: {userData.moodle_id}</p>
          <p className="font-semibold">Department: {userData.dept}</p>
          <p className="font-semibold">Year: {userData.year}</p> */}
        </div>
        <div className="mt-4 flex justify-center">
          <QRCodeCanvas
            value={qrValue}
            size={200}
            includeMargin={true}
            level="H"
          />
        </div>
        <ul>
          <li className="text">Present this QR code at the venue for entry</li>
          <li className="text">Bring your ID card </li>
          <li className="text">Be on time or QR will be expired</li>
        </ul>
      </div>
      <style jsx>{`
        .text {
          color: #000000;
          text-align: start;
        }
        .text1 {
          color: #000000;
          padding: 5px;
        }
        .main-div {
          margin: 4em auto 0;
          padding: 50px;
        }
      `}</style>
    </div>
  );
};

export default TicketQRGenerator;
