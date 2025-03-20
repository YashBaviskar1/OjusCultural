import React, { useState } from 'react';
import puja from "../assets/puja.jpg";
import musicevent from "../assets/musicevent.jpg";
import arts from "../assets/arts.jpg";
import latentapsit from "../assets/latentapsit.jpg";
import karaoke from "../assets/karaoke.jpg";
import paintball from "../assets/paintball.jpg";
import fooseball from "../assets/fooseball.jpg";
import escaperoom from "../assets/escaperoom.jpg";
import doors from "../assets/doors.jpg";
import snake from "../assets/snake.jpg";
import horror from "../assets/horror.jpg";

import neoncricket from "../assets/neoncricket.jpg";
import auction from "../assets/auction.jpg";
import carnival from "../assets/carnival.jpg";
import justdance from "../assets/justdance.jpg";
import squid from "../assets/squid.jpg";
import hunt from "../assets/hunt.jpg";
import hellheaven from "../assets/hellheaven.jpg";
import rocket from "../assets/rocket.jpg";
import funfair from "../assets/funfair.jpg";
import andhadhun from "../assets/andhadhun.jpg";
import scatterball from "../assets/scatterball.jpg";
import waitingroom from "../assets/waitingroom.jpg";
import valo from "../assets/valo.jpg";
import debate from "../assets/debate.jpg";
import "./Schedule.css"

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState(0); 
  const [activeTab, setActiveTab] = useState(null);
  const [isFading, setIsFading] = useState(false);

  const handleDayChange = (day) => {
    setIsFading(true);
    setTimeout(() => {
      setSelectedDay(day);
      setActiveTab(null); // Reset tab on day change
      setIsFading(false);
    }, 300);
  };

  const handleTabClick = (index) => {
    setIsFading(true);
    setTimeout(() => {
      setActiveTab(index);
      setIsFading(false);
    }, 300);
  };

  const eventData = [
    // Day 1
    [
      [
        { name: 'Saraswati Arti', time: "10:00-11:00", image: puja },
        { name: 'Music Event 1', time: "11:00-01:00", image: musicevent },
        { name: 'Fine arts', time: "11:00-3:00", image: arts },
        { name: 'Apsit Got Latent', time: "2:00-5:00", image: latentapsit },
        { name: 'Karaoke', time: "Full Day", image: karaoke },
        { name: 'Paint Ball', time: "11:00-05:00", image: paintball },
        { name: 'Human foosball', time: "11:00-01:00", image: fooseball },
      ],
      [
        { name: 'Escape room', time: "11:00-03:00", image: escaperoom },
        { name: 'Theme based-Doors of fate', time: "11:00-03:00", image: doors },
        { name: 'Debate', time: "2:00-4:00", image: debate },
        { name: 'Snake and ladder-twister', time: "11:00-05:00", image: snake },
        { name: 'Horror Room', time: "12:00-05:00", image: horror },
      ],
      [
        { name: 'Neon Cricket', time: "11:00-03:00", image: neoncricket },
        { name: 'IPL Auction(Round 1)', time: "11:00-03:00", image: auction },
        { name: 'Challenge carnival', time: "11:00-03:00", image: carnival },
        { name: 'Just Dance', time: "11:00-03:00", image: justdance },
        { name: 'Squid Game', time: "11:00-03:00", image: squid },
        { name: 'Treasure Hunt(Round 1)', time: "11:00-03:00", image: hunt },
        { name: 'Theme based-Hell portal v/s Heaven portal', time: "11:00-03:00", image: hellheaven },
      ],
      [{ name: 'Valo', time: "11:00-05:00", image: valo }],
    ],
    // Day 2
    [
      [
        { name: 'Rocket League', time: "11:00-03:00", image: rocket },
        { name: 'Funfair', time: "11:00-03:00", image: funfair },
        { name: 'Andhadhun', time: "11:00-05:00", image: andhadhun },
        { name: 'Scatter Ball', time: "Full Day", image: scatterball },
      ],
      [
        { name: 'Waiting Rooms', time: "Full Day", image: waitingroom },
        { name: 'IPL Auction (Final)', time: "12:00-03:00", image: auction },
      ],
      [
        { name: 'Treasure Hunt (Finals)', time: "11:00-03:00", image: hunt },
        { name: 'Horror House', time: "12:00-05:00", image: horror },
      ],
      [
        { name: 'Debate Finals', time: "2:00-4:00", image: debate },
      ],
    ],
  ];

  const activeEvents = (activeTab !== null) ? eventData[selectedDay][activeTab] : [];

  return (
    <div className="parent">
      <div className="header">
        <div className="schedule-text">
          <h1>SCHEDULE 2k25</h1>
        </div>
      </div>

      {/* Day Switching */}
      <div className="day-switch">
        <button 
          className={`day-btn ${selectedDay === 0 ? 'active' : ''}`} 
          onClick={() => handleDayChange(0)}
        >
          Day 1
        </button>
        <button 
          className={`day-btn ${selectedDay === 1 ? 'active' : ''}`} 
          onClick={() => handleDayChange(1)}
        >
          Day 2
        </button>
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        {['Ground Floor', 'First Floor', 'Second Floor', 'Third Floor'].map((tab, index) => (
          <div
            key={index}
            className={`tab1 ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Event Cards */}
      <div className={`event-cards-container ${isFading ? 'fade-out' : 'fade-in'}`}>
        {activeEvents.length > 0 ? (
          activeEvents.map((event, index) => (
            <div key={index} className="event-card">
              <img src={event.image} alt={event.name} />
              <h3>{event.name}</h3>
              <p>{event.time}</p>
            </div>
          ))
        ) : (
          <p>No events available for this tab.</p>
        )}
      </div>
    </div>
  );
};

export default Schedule;
