import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Events data from the JSON document (unchanged)
const eventsData = {
  "events": [
    {
      "id": 1,
      "name": "MR & MRS APSIT FASHION SHOW",
      "date": "2025-03-10T18:00:00Z",
      "venue": "Main Hall",
      "time": "8:00-10:10:00",
      "heads": "Vaishnavi Bhojak, Mitali Nerpagar",
      "phone_no": "+9183122781, +9183122782",
      "category": "Informals",
      "description": "A grand fashion show event."
    },
    {
      "id": 2,
      "name": "JUST DANCE",
      "date": "2025-03-10T20:00:00Z",
      "venue": "Main Stage",
      "time": "2H",
      "heads": "Prathamesh Pawar, Nayan Pingat",
      "phone_no": "+9183122783, +9183122784",
      "category": "Informals",
      "description": "A high-energy dance competition."
    },
    {
      "id": 3,
      "name": "KARAOKE",
      "date": "2025-03-10T20:00:00Z",
      "venue": "Main Stage",
      "time": "1H",
      "heads": "Pawan Boda",
      "phone_no": "+9183122783",
      "category": "Informals",
      "description": "A high-energy kaorke."
    },
    {
      "id": 4,
      "name": "TIC TAC TOE",
      "date": "2025-03-10T20:00:00Z",
      "venue": "Main Stage",
      "time": "2H",
      "heads": "Aaryan Ghawali, Vinit Rane",
      "phone_no": "+9183122783, +9183122784",
      "category": "Informals",
      "description": "Roll the can-Beer pong-Guess the props by song"
    },
    {
      "id": 5,
      "name": "IPL AUCTION",
      "date": "2025-03-11T14:00:00Z",
      "venue": "Conference Room",
      "time": "2H",
      "heads": "Harshal Patil, Soham Shivangan",
      "phone_no": "+9183122785, +9183122786",
      "category": "Informals",
      "description": "A thrilling auction-style event inspired by IPL."
    },
    {
      "id": 6,
      "name": "ANDHADHUN",
      "date": "2025-03-11T14:00:00Z",
      "venue": "Conference Room",
      "time": "2H",
      "heads": "Ayush Kanase, Shivam Patil",
      "phone_no": "+9183122785, +9183122786",
      "category": "Informals",
      "description": "Andhadhun game "
    },
    {
      "id": 7,
      "name": "ESCAPE ROOM",
      "date": "2025-03-11T16:00:00Z",
      "venue": "Room 101",
      "time": "2H",
      "heads": "Abbas, Praniti",
      "phone_no": "+9183122787, +9183122788",
      "category": "Informals",
      "description": "An immersive escape room experience."
    },
    {
      "id": 8,
      "name": "SQUID GAME (TASK)",
      "date": "2025-03-12T10:00:00Z",
      "venue": "Outdoor Arena",
      "time": "2H",
      "heads": "Swaraj, Ojas",
      "phone_no": "+9183122800, +9183122801",
      "category": "Informals",
      "description": "A thrilling Squid Game-inspired challenge."
    },
    {
      "id": 9,
      "name": "TREASURE HUNT",
      "date": "2025-03-12T12:00:00Z",
      "venue": "Campus Grounds",
      "time": "3H",
      "heads": "Ananya, Asmita, Rutu Desai",
      "phone_no": "+9183122802, +9183122803, +9183122804",
      "category": "Informals",
      "description": "An adventurous treasure hunt across campus."
    },
    {
      "id": 10,
      "name": "FUNFAIR",
      "date": "2025-03-12T15:00:00Z",
      "venue": "Fairground",
      "time": "2H",
      "heads": "Nikhil Sahani, Ritesh Pandey",
      "phone_no": "+9183122805, +9183122806",
      "category": "Informals",
      "description": "A funfair with multiple stalls and activities."
    },
    {
      "id": 11,
      "name": "THE COUCH GAME",
      "date": "2025-03-12T17:00:00Z",
      "venue": "Game Lounge",
      "time": "2H",
      "heads": "Manthan More, Unnati Jain",
      "phone_no": "+9183122807, +9183122808",
      "category": "Informals",
      "description": "A fun and engaging couch game experience."
    },
    {
      "id": 12,
      "name": "HORROR ROOM",
      "date": "2025-03-12T19:00:00Z",
      "venue": "Haunted Room",
      "time": "2H",
      "heads": "Pranav Sathe, Parshva Shah",
      "phone_no": "+9183122809, +9183122810",
      "category": "Informals",
      "description": "A spine-chilling horror experience."
    },
    {
      "id": 13,
      "name": "ROCKET LEAGUE IRL",
      "date": "2025-03-12T21:00:00Z",
      "venue": "Sports Arena",
      "time": "2H",
      "heads": "Lucky Sharma, Maulik Zambad",
      "phone_no": "+9183122811, +9183122812",
      "category": "Informals",
      "description": "A real-life version of the Rocket League game."
    },
    {
      "id": 14,
      "name": "FACEMASK & FACE PAINTING",
      "date": "2025-03-12T10:00:00Z",
      "venue": "Art Room",
      "time": "1H",
      "heads": "Anisha Tiwari",
      "phone_no": "+9183122789",
      "category": "Fine Arts",
      "description": "A creative face mask and painting event."
    },
    {
      "id": 15,
      "name": "BRACELET MAKING",
      "date": "2025-03-12T11:00:00Z",
      "venue": "Craft Zone",
      "time": "1H",
      "heads": "Sajni Shetty",
      "phone_no": "+9183122790",
      "category": "Fine Arts",
      "description": "Design and create beautiful bracelets."
    },
    {
      "id": 16,
      "name": "BRAIDING",
      "date": "2025-03-12T12:00:00Z",
      "venue": "Styling Hub",
      "time": "1H",
      "heads": "Sanskruti Shelke",
      "phone_no": "+9183122791",
      "category": "Fine Arts",
      "description": "Learn different braiding styles and techniques."
    },
    {
      "id": 17,
      "name": "Keychain Making & Earrings",
      "date": "2025-03-12T13:00:00Z",
      "venue": "Handicraft Corner",
      "time": "1H",
      "heads": "Radhika Lakhani",
      "phone_no": "+9183122792",
      "category": "Fine Arts",
      "description": "Create custom keychains and earrings."
    },
    {
      "id": 18,
      "name": "Canvas Painting",
      "date": "2025-03-12T14:00:00Z",
      "venue": "Painting Studio",
      "time": "1H",
      "heads": "Vaishanavi Jadhav",
      "phone_no": "+9183122793",
      "category": "Fine Arts",
      "description": "Express creativity through canvas painting."
    },
    {
      "id": 19,
      "name": "DANCE",
      "date": "2025-03-12T15:00:00Z",
      "venue": "Auditorium",
      "time": "2H",
      "heads": "Em Team",
      "phone_no": "+9183122794",
      "category": "Performing Arts",
      "description": "An energetic dance performance showcasing various styles."
    },
    {
      "id": 20,
      "name": "SINGING",
      "date": "2025-03-12T17:00:00Z",
      "venue": "Music Hall",
      "time": "2H",
      "heads": "Em Team",
      "phone_no": "+9183122795",
      "category": "Performing Arts",
      "description": "A mesmerizing singing competition with talented vocalists."
    },
    {
      "id": 21,
      "name": "SKIT",
      "date": "2025-03-12T19:00:00Z",
      "venue": "Drama Stage",
      "time": "2H",
      "heads": "Em Team",
      "phone_no": "+9183122796",
      "category": "Performing Arts",
      "description": "A theatrical skit performance with engaging storytelling."
    },
    {
      "id": 22,
      "name": "APSITS GOT LATENT",
      "date": "2025-03-12T21:00:00Z",
      "venue": "Main Stage",
      "time": "2H",
      "heads": "Swayam Sangave, Piyush Mahankal",
      "phone_no": "+9183122797",
      "category": "Performing Arts",
      "description": "A talent show featuring diverse and exciting performances."
    },
    {
      "id": 23,
      "name": "PAINTBALL",
      "date": "2025-03-13T14:00:00Z",
      "venue": "Outdoor Field",
      "time": "1H",
      "heads": "Arpit Chopda",
      "phone_no": "+9183122792",
      "category": "Recreational",
      "description": "A competitive paintball match."
    },
    {
      "id": 24,
      "name": "ELIMINATOR",
      "date": "2025-03-13T14:00:00Z",
      "venue": "Outdoor Field",
      "time": "1H",
      "heads": "CHINMAY SAWANT",
      "phone_no": "+9183122792",
      "category": "Recreational",
      "description": "A competitive paintball match."
    },
    {
      "id": 25,
      "name": "PAINTBALL",
      "date": "2025-03-13T14:00:00Z",
      "venue": "Outdoor Field",
      "time": "1H",
      "heads": "Arpit Chopda",
      "phone_no": "+9183122792",
      "category": "Recreational",
      "description": "A competitive paintball match."
    },
    {
      "id": 26,
      "name": "JENGA",
      "date": "2025-03-13T10:00:00Z",
      "venue": "Game Zone",
      "time": "1H",
      "heads": "Darshan Jain",
      "phone_no": "+9183122798",
      "category": "Pass N Go",
      "description": "A thrilling game of balance and strategy with Jenga."
    },
    {
      "id": 27,
      "name": "DOORS OF FATE",
      "date": "2025-03-13T11:00:00Z",
      "venue": "Mystery Arena",
      "time": "2H",
      "heads": "Preeti Yadav, Chinmay Sawant",
      "phone_no": "+9183122799, +9183122799",
      "category": "Theme Based",
      "description": "An interactive experience where participants choose their fate through mysterious doors."
    },
    {
      "id": 28,
      "name": "HELL'S PORTAL VS HEAVEN'S PORTAL",
      "date": "2025-03-13T13:00:00Z",
      "venue": "Fantasy Realm",
      "time": "2H",
      "heads": "Divya Keni, Abhirami",
      "phone_no": "+9183122800, +9183122799",
      "category": "Theme Based",
      "description": "A battle between good and evil in a thrilling theme-based adventure."
    },
    {
      "id": 29,
      "name": "BGMI",
      "date": "2025-03-14T16:00:00Z",
      "venue": "Gaming Zone",
      "time": "1H",
      "heads": "Hrishikesh Mishra",
      "phone_no": "+9183122793",
      "category": "Gaming & Sports",
      "description": "A competitive BGMI tournament."
    },
    {
      "id": 30,
      "name": "VALORANT",
      "date": "2025-03-14T18:00:00Z",
      "venue": "Gaming Zone",
      "time": "2H",
      "heads": "Karan Vethody, Jay Patil",
      "phone_no": "+9183122794, +9183122795",
      "category": "Gaming & Sports",
      "description": "A competitive Valorant gaming tournament."
    },
    {
      "id": 31,
      "name": "STUMBLE GUYS* SCATTERBALL",
      "date": "2025-03-14T19:00:00Z",
      "venue": "Gaming Zone",
      "time": "1H",
      "heads": "Hitesh Kesharwani",
      "phone_no": "+9183122796",
      "category": "Gaming & Sports",
      "description": "A fun and chaotic gaming event."
    },
    {
      "id": 32,
      "name": "FIFA",
      "date": "2025-03-14T20:00:00Z",
      "venue": "Gaming Zone",
      "time": "1H",
      "heads": "Prakhar Asthana",
      "phone_no": "+9183122797",
      "category": "Gaming & Sports",
      "description": "A FIFA gaming tournament."
    },
    {
      "id": 33,
      "name": "NEON PICKLEBALL",
      "date": "2025-03-14T21:00:00Z",
      "venue": "Sports Court",
      "time": "2H",
      "heads": "Nishant Rathod, Sandesh Sarode",
      "phone_no": "+9183122798, +9183122799",
      "category": "Gaming & Sports",
      "description": "An exciting neon-themed pickleball match."
    }
  ]
};

// Transform events data into subCardData structure (image removed)
const subCardData = eventsData.events.reduce((acc, event) => {
  const categoryKey = event.category.toLowerCase().replace(" ", "-");
  if (!acc[categoryKey]) {
    acc[categoryKey] = [];
  }

  const eventDate = new Date(event.date);
  const month = eventDate.toLocaleString('default', { month: 'short' }).toUpperCase();
  const date = eventDate.getDate().toString().padStart(2, '0');

  acc[categoryKey].push({
    text: event.name,
    month,
    date,
    description: event.description
  });

  return acc;
}, {});

const SubCardsPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const cards = subCardData[category] || [];

  const handleSubCardClick = (index) => {
    navigate(`/events/${category}/${index}`);
  };

  return (
    <div className="sub-cards-page">
      <h2 className="section-title">
        {category.replace("-", " ").toUpperCase()} Events
      </h2>
      <button
        className="back-btn"
        onClick={() => navigate("/#events-section")}
      >
        Back
      </button>
      <div className="container">
        <div className="row justify-content-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-6 col-12 mb-3"
              onClick={() => handleSubCardClick(index)}
            >
              <div className="card bg-dark text-white card-overlay">
                <div className="card-img-overlay d-flex flex-column justify-content-between align-items-center">
                  <h5 className="card-title text-center">{card.text}</h5>
                  <p className="card-text text-center">{card.description}</p>
                  <p className="card-date text-center">{`${card.month} ${card.date}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .sub-cards-page {
          width: 100vw;
          min-height: 100vh;
          background: #000000;
          background-size: 200% 200%;
          animation: gradientAnimation 12s ease infinite;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
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
          text-align: center;
          color: #ffffff;
        }

        .back-btn {
          position: absolute;
          top: 20px;
          left: 20px;
          padding: 5px 10px;
          color: #333;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }

        .back-btn:hover {
          background-color: #ddd;
        }

        .card-overlay {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          width: 100%;
          height: 220px; /* Fixed height to match previous image height */
          cursor: pointer;
          animation: gradientAnimation 12s ease infinite;
          background: linear-gradient(
            45deg,
            #0a0a0a,  /* Deep Black */
            #1a1a1a,  /* Dark Black */
            #2b2b2b,  /* Medium Black */
            #3c3c3c,  /* Light Black */
            #4d4d4d,  /* Lighter Black (shine highlight) */
            #2b2b2b,  /* Medium Black */
            #1c1c1c   /* Slightly Darker Black */
          );
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

        .card-img-overlay {
          background: rgba(0, 0, 0, 0.5);
          transition: background 0.3s ease-in-out;
          padding: 15px;
        }

        .card-overlay:hover .card-img-overlay {
          background: rgba(0, 0, 0, 0.7);
        }

        .card-title {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .card-text {
          font-size: 0.9rem;
          margin-bottom: 10px;
        }

        .card-date {
          font-size: 1rem;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 1.5rem;
            margin-bottom: 20px;
          }

          .card-overlay {
            height: 150px;
          }

          .card-title {
            font-size: 1.1rem;
          }

          .card-text {
            font-size: 0.8rem;
          }

          .card-date {
            font-size: 0.9rem;
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
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.3rem;
          }

          .card-overlay {
            height: 120px;
          }

          .card-title {
            font-size: 1rem;
          }

          .card-text {
            font-size: 0.75rem;
          }

          .card-date {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SubCardsPage;