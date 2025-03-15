import React from "react";
import { useLocation } from "react-router-dom";


const EventRegistration = () => {
  const location = useLocation();
  const eventName = location.state?.eventName || "Unknown Event";

  const handleRegistration = () => {
    console.log(`Registered Event is: ${eventName}`);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
    //   style={{ backgroundImage: `url(${https://images.squarespace-cdn.com/content/v1/571a8a1ab6aa6012a71e3971/1547218070587-DSKXEM4CF22JXMAHTDZC/Craft_Republic_header_background.jpg})`, 
    //         backgroundSize: "cover",
    //         backgroundPosition: "center",
    //         backgroundRepeat: "no-repeat",
    
    // }}
    >
<div className="bg-white p-8 rounded-2xl shadow-lg w-96 text-center">
  <h2 className="text-2xl font-bold mb-4">Event Registration</h2>
  <p className="text-lg font-semibold">Event: {eventName}</p>
  <p className="text-lg font-semibold">Name: My Name</p>
  <p className="text-lg font-semibold">Department: Dept</p>
  <p className="text-lg font-semibold">Year: FE</p>

  <div className="mt-4">
    {/* Phone Number Field with Fixed +91 */}
    <div className="flex items-center border rounded mb-2">
      <span className="px-3 bg-gray-200 text-gray-700 rounded-l">+91</span>
      <input
        type="text"
        placeholder="Phone Number"
        className="w-full p-2 border-l rounded-r outline-none"
      />
    </div>

    {/* Email Input */}
    <input
      type="email"
      placeholder="Email"
      className="w-full p-2 border rounded mb-4 outline-none"
    />
  </div>

  {/* Register Button */}
  <button
    className="bg-black-900 text-black px-4 py-2 rounded-lg hover:bg-black-900"
    onClick={handleRegistration}
  >
    Register
  </button>

  <p className="text-red-500 font-bold mt-4">Give Details once! Never Again!</p>
</div>

    </div>
  );
};

export default EventRegistration;
