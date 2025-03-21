import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Events data from the JSON document (unchanged)
const eventsData = {
  "events": [
    {
      "id": 1,
	  "backend_id" : 1,
      "name": "MR & MRS APSIT FASHION SHOW",
      "date": "2025-03-25T18:00:00Z",
      "venue": "008(Auditorium) ",
      "time": ":10:00 AM to 12:30 PM",
      "heads": "Mitali Nerpagar ",
      "phone_no": "8355839204",
      "category": "Informals",
      "description": "A grand fashion show event."
    },
    {
      "id": 2,
      "name": "JUST DANCE",
      "date": "2025-03-24T20:00:00Z",
      "venue": "207",
      "time": "Full Day",
      "heads": "Nayan Pingat (Head)",
      "phone_no": "8767369835",
      "category": "Informals",
      "description": "A high-energy dance competition."
    },
    {
      "id": 3,
      "name": "Karaoke",
      "date": "2025-03-24T18:00:00Z",
      "venue": "005",
      "time": "Full day",
      "heads": "Pawan Boda",
      "phone_no":"9082747148",
      "category": "Informals",
      "description": "A fun and interactive karaoke event."
    },
    {
      "id": 5,
      "name": "IPL AUCTION",
      "date": "2025-03-10T18:00:00Z",
      "venue": " Day-1: 201 / Day-2: 112(seminar hall)} ",
      "time": "11:00 AM to 3:00 PM / 11:00 AM to 4:00 PM",
      "heads": "Harshal Patil , Soham Shivangan",
      "phone_no":"9222474104, 9767205460",
      "category": "Informals",
      "description": "A simulated IPL auction event."
    },
    {
      "id": 6,
      "name": "ANDHADHUN",
      "date": "2025-03-24T18:00:00Z",
      "venue": "209",
      "time": "11:00 AM to 3:00 PM",
      "heads": "Ayush Kanase , Shivam Patil",
      "phone_no":"9867228830, 7058221605",
      "category": "Informals",
      "description": "A mystery-solving event."
    },
    {
      "id": 7,
      "name": "ESCAPE ROOM",
      "date": "2025-03-24T18:00:00Z",
      "venue": "Day-1 : 101 / Day 2 :102 ",
      "time": "11:00 AM to 3:00 PM / 11:00AM to 4:00PM ",
      "heads": "PRANITI AHIRE, ABBAS SANGAMESHWARI",
      "phone_no":"8097092120, 8591246669",
      "category": "Informals",
      "description": "A challenging escape room experience."
    },
    {
      "id": 8,
      "name": "SQUID GAME",
      "date": "2025-03-24T18:00:00Z",
      "venue": "204",
      "time": "Day 1 : 11:00 AM to 3:00 PM / Day 2 : 11:00 AM to 3:00 PM",
      "heads": "Swaraj Paranjape, Ojas patrikar",
      "phone_no":"9920131934, 8085846892",
      "category": "Informals",
      "description": "A series of competitive challenges."
    },
    {
      "id": 9,
	  "backend_id" : 36,
      "name": "TREASURE HUNT",
      "date": "2025-03-24T18:00:00Z",
      "venue": "203",
      "time": "11:00 AM to 3:00 PM / 10:00 AM to 12:00 AM",
      "heads": "Vaishanvi Bhojak, Aanya Singh, Rutu Desai",
      "phone_no":"8591067050, 9324357482, 7448168628",
      "category": "Informals",
      "description": "An adventurous treasure hunt game."
    },
    {
      "id": 10,
      "name": "FUNFAIR",
      "date": "2025-03-24T18:00:00Z",
      "venue": "210",
      "time": "Day 1 : 11:00 AM to 3:00 PM / Day 2 : 11:00 AM to 3:00 PM",
      "heads": "Ritesh Pandey, Nikhil Sawant, Prathamesh Pawar",
      "phone_no":"9960435308, 9137369097, 8169605420",
      "category": "Informals",
      "description": "A funfair with various activities."
    },
    {
      "id": 11,
      "name": "THE COUCH GAME",
      "date": "2025-03-25T18:00:00Z",
      "venue": "210",
      "time": "11:00 AM to 3:00 PM",
      "heads": "Manthan More , Unnati Jain ",
      "phone_no":"7020834048, 9320005645",
      "category": "Informals",
      "description": "A fun and engaging team game."
    },
    {
      "id": 12,
      "name": "HORROR ROOM",
      "date": "2025-03-10T18:00:00Z",
      "venue": "103",
      "time": "DAY 1 : 12:00 AM TO 5:00 PM / DAY2 : 12:00 AM TO 3:00 PM",
      "heads": "SONIKA SAWANT, PARSHV SHAH, PRANAV SATHE",
      "phone_no":"8657434372, 9921617179, 9067253739",
      "category": "Informals",
      "description": "A thrilling horror experience."
    },
    {
      "id": 13,
      "name": "ROCKET LEAGUE IRL",
      "date": "2025-03-24T18:00:00Z",
      "venue": "213",
      "time": "Day 1 : 11:00 AM to 3:00 PM / Day 2 : 11:00 AM to 3:00 PM",
      "heads": "Lucky Sharma (Head)",
      "phone_no":"9670240625",
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
      "phone_no":"9967488072",
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
      "phone_no":"6361869221",
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
      "phone_no":"9076157274",
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
      "phone_no":"6381844986",
      "category": "Fine Arts",
      "description": "A painting event that allows participants to express creativity on canvas."
    },
    {
      "id": 21,
      "name": "APSIT's Got Latent",
      "date": "2025-03-24T18:00:00Z",
      "venue": "008",
      "time": "2PM to 5 PM",
      "heads": "Swayam Sangave, Piyush Mahankal",
      "phone_no":"8087619562, 7758854971",
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
      "phone_no":"9022331132",
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
      "phone_no":"9960351165",
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
      "phone_no":"9970752318",
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
      "date": "2025-03-24T18:00:00Z",
      "venue": "104",
      "time": "Day 1 : 11AM to 3:00PM / DAY 2 : 11:00 AM to 3:00 PM",
      "phone_no":"7045464624, 7021344084",
      "heads": "Vinit Rane, Chinmay Sawant",
      "category": "Informals",
      "description": "An interactive event based on choices and fate."
    },
    {
      "id": 27,
      "name": "Hell's Portal vs Heaven's Portal",
      "date": "2025-03-24T18:00:00Z",
      "venue": "212",
      "time": "DAY 1 : 11:00 AM to 3:00 PM / DAY 2 : 11: AM to 3:00 PM",
      "heads": "Divya Keni, Abhirami",
      "phone_no":"9324547628, 8691960219",
      "category": "Informals",
      "description": "A thrilling event exploring the themes of heaven and hell."
    }, 
	{
      "id": 28,
	  "backend_id" : 35,
      "name": "BGMI",
      "date": "2025-03-11T18:00:00Z",
      "venue": "{Day-2: 201}",
      "time": "8H",
      "heads": "Hrishikesh Mishra, Aditya Mishra (Co-head), Sahik Nayak (Co-head)",
      "phone_no":"9321839469",
      "category": "Gaming & Sports",
      "description": "A competitive Battlegrounds Mobile India (BGMI) tournament."
    },
    {
      "id": 29,
	  "backend_id" : 34,
      "name": "Valorant",
      "date": "2025-03-10T18:00:00Z",
      "venue": "{Day-1: 301}",
      "time": "8H",
      "heads": "Karan Vethody, Jay Patil",
      "phone_no":"8850106942, 9106311774",
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
      "phone_no":"9834791967",
      "category": "Gaming & Sports",
      "description": "A fast-paced, action-packed ball game."
    },
    {
      "id": 31,
      "name": "FIFA",
	  "backend_id" : 37,
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
      "phone_no":"8850409126, 9021677152",
      "category": "Gaming & Sports",
      "description": "A unique cricket game played under neon lights."
    },
    {
      "id": 33,
      "name": "Challenge Carnival",
      "date": "2025-03-24T18:00:00Z",
      "venue": "211",
      "time": "8H",
      "heads": "AARYAN GHAWALI, PREETI YADAV",
      "phone_no":"7304372657, 842501072",
      "category": "Informals",
      "description": "Party Packed Mini Games"
    },
    {
      "id": 34,
      "name": "Creator's Quest",
      "date": "2025-03-24T18:00:00Z",
      "venue": "College Campus",
      "time": "everywhere everytime",
      "heads": "AARYAN GHAWALI, PREETI YADAV",
      "phone_no":"7304372657, 842501072",
      "category": "Informals",
      "description": "Unleash your inner story telling!"
    },
    {
      "id": 35,
      "name": "Twister",
      "date": "2025-03-24T18:00:00Z",
      "venue": "Saraswati Idol",
      "time": "9:00AM to 5:00PM",
      "heads": "ANIKET CHOPADA",
      "phone_no":"9960351165",
      "category": "Informals",
      "description": "Twist yourself"
    },
    {
      "id": 36,
      "name": "SNAKES AND LADDERS",
      "date": "2025-03-24T18:00:00Z",
      "venue": "Saraswati Idol",
      "time": "9:00AM to 5:00PM",
      "heads": "ANIKET CHOPADA",
      "phone_no":"9960351165",
      "category": "Informals",
      "description": "Step into Life Size board Game"
    },
    {
      "id": 37,
      "name": "HUMAN LUDO",
      "date": "2025-03-25T18:00:00Z",
      "venue": "Saraswati Idol",
      "time": "9:00AM to 5:00PM",
      "heads": "ANIKET CHOPADA",
      "phone_no":"9960351165",
      "category": "Informals",
      "description": "Step into Life Size board Game"
    },
   {
      "id": 37,
      "name": "Harmony Hive",
      "date": "2025-03-24T18:00:00Z",
      "venue": "008",
      "time": "11:00AM to 1:00PM",
      "heads": "Vivek Behra",
      "phone_no":"9321815952",
      "category": "Performing Arts",
      "description": "Lights, music, and pure talent—get ready for a spectacular showcase of creativity and expression"
    },
   {
      "id": 38,
      "name": "Dance",
      "date": "2025-03-26T18:00:00Z",
      "venue": "DR. Kashinath Ghanekar Natyagraha",
      "time": "11:00AM to 1:00PM",
      "heads": "Pranav Sathe",
      "phone_no":"9321815952",
      "category": "Performing Arts",
      "description": "Lights, music, and pure talent—get ready for a spectacular showcase of creativity and expression"
    },
   {
      "id": 39,
      "name": "Drama",
      "date": "2025-03-26T18:00:00Z",
      "venue": "DR. Kashinath Ghanekar Natyagraha",
      "time": "11:00AM to 1:00PM",
      "heads": "Pranav Sathe",
      "phone_no":"9321815952",
      "category": "Performing Arts",
      "description": "Lights, music, and pure talent—get ready for a spectacular showcase of creativity and expression"
    },
   {
      "id": 40,
      "name": "Fashion Show",
      "date": "2025-03-26T18:00:00Z",
      "venue": "DR. Kashinath Ghanekar Natyagraha",
      "time": "11:00AM to 1:00PM",
      "heads": "Pranav Sathe",
      "phone_no":"9321815952",
      "category": "Performing Arts",
      "description": "Lights, music, and pure talent—get ready for a spectacular showcase of creativity and expression"
    },
   {
      "id": 41,
      "name": "Singing",
      "date": "2025-03-26T18:00:00Z",
      "venue": "DR. Kashinath Ghanekar Natyagraha",
      "time": "11:00AM to 1:00PM",
      "heads": "Pranav Sathe",
      "phone_no":"9321815952",
      "category": "Performing Arts",
      "description": "Lights, music, and pure talent—get ready for a spectacular showcase of creativity and expression"
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
      <div className="top container">
        <div className=" row justify-content-center">
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
          height: 60vh;
        }

        .sub-cards-page {
          width: 100vw;
          {/* min-height: 100vh; */}
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

          {/* .top{
          margin-top: 65rem
          } */}

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