import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Events data from the JSON document (unchanged)
const eventsData = {
  "events": [
    {
      "id": 1,
      "name": "MR & MRS APSIT FASHION SHOW",
      "date": "2025-03-10T18:00:00Z",
      "venue": "008(Auditorium) (V-2)",
      "time": "8:00-10:10:00",
      "heads": "Mitali Nerpagar (Head), Furqan Ali Syed (Co-head)",
      "phone_no": "8855071947",
      "category": "Informals",
      "description": "A grand fashion show event."
    },
    {
      "id": 2,
      "name": "JUST DANCE",
      "date": "2025-03-10T20:00:00Z",
      "venue": "{Day-1,2: 207} (Full Day)",
      "time": "Full Day",
      "heads": "Nayan Pingat (Head), Darshan Sanap (Co-head), Kavya Prajapatti (Co-head)",
      "category": "Informals",
      "description": "A high-energy dance competition."
    },
    {
      "id": 3,
      "name": "Karaoke",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1,2: 005}",
      "time": "Varied",
      "heads": "Pawan Boda (Head), Daivik Thakur (Co-head)",
      "category": "Informals",
      "description": "A fun and interactive karaoke event."
    },
    {
      "id": 4,
      "name": "TIC TAC TOE, Roll the can, Beer pong, Guess the props by song",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1,2: 211} (V-3)",
      "time": "Varied",
      "heads": "Aaryan Ghawali (Head), Preeti Yadav (Head), Kaushal SE/A (Co-head) (8451873334)",
      "category": "Informals",
      "description": "A collection of small fun games."
    },
    {
      "id": 5,
      "name": "IPL AUCTION",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1: 201 / Day-2: 112(seminar hall)} (V-8)",
      "time": "Varied",
      "heads": "Harshal Patil (Head), Soham Shivangan (Head), Rishabh Mishra (Co-head), Shreyash Gowda (Co-head)",
      "category": "Informals",
      "description": "A simulated IPL auction event."
    },
    {
      "id": 6,
      "name": "ANDHADHUN",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1: 210} (V-2)",
      "time": "Varied",
      "heads": "Ayush Kanase (Head), Shivam Patil (Head)",
      "category": "Informals",
      "description": "A mystery-solving event."
    },
    {
      "id": 7,
      "name": "ESCAPE ROOM",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1,2: 101,102} (V-15)",
      "time": "Varied",
      "heads": "Abbas (Head), Praniti (Head)",
      "category": "Informals",
      "description": "A challenging escape room experience."
    },
    {
      "id": 8,
      "name": "SQUID GAME (TASK)",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1,2: 204,205} (V-10)",
      "time": "Varied",
      "heads": "Swaraj (Head), Ojas (Head)",
      "category": "Informals",
      "description": "A series of competitive challenges."
    },
    {
      "id": 9,
      "name": "TREASURE HUNT",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1,2: 203} (V-12)",
      "time": "Varied",
      "heads": "Ananya (Head), Vaishnavi Bhojak (Head), Asmita (Head), Rutu Desai (Head)",
      "category": "Informals",
      "description": "An adventurous treasure hunt game."
    },
    {
      "id": 10,
      "name": "FUNFAIR",
      "date": "2025-03-11T18:00:00Z",
      "venue": "{Day-2: 210} (V-6)",
      "time": "Varied",
      "heads": "Nikhil Sahani (Head), Prathamesh Pawar (Head), Ritesh Pandey (Head), Ujjala Thakur (Co-head) (9892894667)",
      "category": "Informals",
      "description": "A funfair with various activities."
    },
    {
      "id": 11,
      "name": "THE COUCH GAME",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1,2: 202} (V-7)",
      "time": "Varied",
      "heads": "Manthan More (Head), Unnati Jain (Head)",
      "category": "Informals",
      "description": "A fun and engaging team game."
    },
    {
      "id": 12,
      "name": "HORROR ROOM",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1,2: 103} (V-11)",
      "time": "Varied",
      "heads": "Pranav Sathe (Head), Parshva Shah (Head), Sonika Sawant (Head)",
      "category": "Informals",
      "description": "A thrilling horror experience."
    },
    {
      "id": 13,
      "name": "ROCKET LEAGUE IRL",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1,2: 213} (V-3)",
      "time": "Varied",
      "heads": "Lucky Sharma (Head), Maulik Zambad (Head)",
      "category": "Informals",
      "description": "A real-life version of Rocket League."
    },
	    {
      "id": 14,
      "name": "Facemask & Face Painting",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1,2: 004} (V-1)",
      "time": "5H",
      "heads": "Anisha Tiwari",
      "category": "Fine Arts",
      "description": "An artistic event focused on facemask and face painting."
    },
    {
      "id": 15,
      "name": "Braiding",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1,2: 004} (V-1)",
      "time": "5H",
      "heads": "Sajni Shetty",
      "category": "Fine Arts",
      "description": "A creative hairstyling event featuring braiding techniques."
    },
    {
      "id": 16,
      "name": "Bracelet Making, Keychain Making, Earrings",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1,2: 004}",
      "time": "5H",
      "heads": "Sanskruti Shelke, Radhika Lakhani",
      "category": "Fine Arts",
      "description": "A craft-based event where participants create bracelets, keychains, and earrings."
    },
    {
      "id": 17,
      "name": "Canvas Painting",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1,2: 004} (V-1)",
      "time": "5H",
      "heads": "Vaishanavi Jadhav",
      "category": "Fine Arts",
      "description": "A painting event that allows participants to express creativity on canvas."
    },
	{
      "id": 18,
      "name": "Dance",
      "date": "2025-03-10T18:00:00Z",
      "venue": "Em Team",
      "time": "2H",
      "heads": "Em Team",
      "category": "Performing Arts",
      "description": "A dance performance showcasing various styles."
    },
    {
      "id": 19,
      "name": "Singing",
      "date": "2025-03-10T18:00:00Z",
      "venue": "Em Team",
      "time": "2H",
      "heads": "Em Team",
      "category": "Performing Arts",
      "description": "A singing event featuring talented vocalists."
    },
    {
      "id": 20,
      "name": "Skit",
      "date": "2025-03-10T18:00:00Z",
      "venue": "Em Team",
      "time": "2H",
      "heads": "Em Team",
      "category": "Performing Arts",
      "description": "A short drama performance prepared by the participants."
    },
    {
      "id": 21,
      "name": "APSIT's Got Latent",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1: 008(Auditorium)} (V-2)",
      "time": "2H",
      "heads": "Swayam Sangave, Piyush Mahankal",
      "category": "Performing Arts",
      "description": "A talent show where participants showcase their hidden talents."
    },
	{
      "id": 22,
      "name": "Paintball",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1,2: College Turf} (V-2)",
      "time": "3H",
      "heads": "Arpit Chopda",
      "category": "Recreational",
      "description": "A thrilling paintball game experience."
    },
    {
      "id": 23,
      "name": "Giant Jenga",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1,2: Flagpost area}",
      "time": "3H",
      "heads": "Chinmay Sawant",
      "category": "Recreational",
      "description": "A larger-than-life version of the classic Jenga game."
    },
    {
      "id": 24,
      "name": "Human Foosball",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1: Flagpost area} (V-2)",
      "time": "3H",
      "heads": "Shailesh Mittapelli",
      "category": "Recreational",
      "description": "A fun and interactive game of human-sized foosball."
    },
	{
      "id": 25,
      "name": "Jenga",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1,2: Nescafe} (V-2)",
      "time": "1H",
      "heads": "Darshan Jain",
      "category": "Pass N Go",
      "description": "A fun and strategic game of Jenga."
    },
	    {
      "id": 26,
      "name": "Doors of Fate",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1,2: 104} (V-6)",
      "time": "4H",
      "heads": "Vinit Rane, Chinmay Sawant",
      "category": "Theme Based",
      "description": "An interactive event based on choices and fate."
    },
    {
      "id": 27,
      "name": "Hell's Portal vs Heaven's Portal",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1,2: 212} (V-6)",
      "time": "4H",
      "heads": "Divya Keni, Abhirami",
      "category": "Theme Based",
      "description": "A thrilling event exploring the themes of heaven and hell."
    }, 
	{
      "id": 28,
      "name": "BGMI",
      "date": "2025-03-11T18:00:00Z",
      "venue": "{Day-2: 201}",
      "time": "8H",
      "heads": "Hrishikesh Mishra, Aditya Mishra (Co-head), Sahik Nayak (Co-head)",
      "category": "Gaming & Sports",
      "description": "A competitive Battlegrounds Mobile India (BGMI) tournament."
    },
    {
      "id": 29,
      "name": "Valorant",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1: 301}",
      "time": "8H",
      "heads": "Karan Vethody, Jay Patil",
      "category": "Gaming & Sports",
      "description": "A high-stakes Valorant eSports competition."
    },
    {
      "id": 30,
      "name": "Scatterball",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1,2: BCR} (Full Day) (V-4)",
      "time": "Full Day",
      "heads": "Hitesh Kesharwani, Yash Madhavi (Co-head)",
      "category": "Gaming & Sports",
      "description": "A fast-paced, action-packed ball game."
    },
    {
      "id": 31,
      "name": "FIFA",
      "date": "2025-03-11T18:00:00Z",
      "venue": "{Day-2: 301}",
      "time": "8H",
      "heads": "Prakhar Asthana",
      "category": "Gaming & Sports",
      "description": "A FIFA video game competition."
    },
    {
      "id": 32,
      "name": "Neon Cricket",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1,2: 206} (V-1)",
      "time": "8H",
      "heads": "Nishant Rathod, Sandesh Sarode, Lavanya Bakre (Co-head)",
      "category": "Gaming & Sports",
      "description": "A unique cricket game played under neon lights."
    }
  ]
}


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
        onClick={() => navigate("/")}
      >
        Back
      </button>
      <div className="container">
        <div className="top row justify-content-center">
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

        .top{
          margin-top: 35rem;
        }

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

          .top{
          margin-top: 65rem
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
