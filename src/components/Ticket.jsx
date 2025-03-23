import React from "react";
import { useSearchParams } from "react-router-dom";

const Ticket = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") || "Unknown";
  const moodleId = searchParams.get("moodleId") || "N/A";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-300 w-80 text-center text-black">
        <h2 className="text-xl font-bold mb-2 text-black">Event Ticket</h2>
        <hr className="mb-4" />
        <p className="text-lg font-semibold text-black">
          Name: <span className="font-normal">{name}</span>
        </p>
        <p className="text-lg font-semibold text-black">
          Moodle ID: <span className="font-normal">{moodleId}</span>
        </p>
      </div>
    </div>
  );
};

export default Ticket;
