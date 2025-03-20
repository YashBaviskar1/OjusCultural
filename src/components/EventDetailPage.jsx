import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Events data from the JSON document
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
};

const EventDetailPage = () => {
  const { category, eventId } = useParams();
  const navigate = useNavigate();
  const reg = ["MR & MRS APSIT FASHION SHOW", "BGMI", "VALORANT", "TREASURE HUNT", "FIFA"]
  // Filter events by category and get the event by index
  const eventsInCategory = eventsData.events.filter(
    (event) => event.category.toLowerCase().replace(" ", "-") === category
  );
  const eventIndex = parseInt(eventId, 10);
  const event = eventsInCategory[eventIndex];

  if (!event) {
    return <div>Event not found!</div>;
  }

  // Format date for display
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleString('default', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  }); // e.g., "March 10, 2025"
  const handleRegistration = () => {
    console.log(`Registered Event is: ${event.name}`);
    const Auth = !!localStorage.getItem("accessToken");
    if(Auth){
      navigate("/register", { state: { eventName: event.name } });
    } else {
      navigate("/login")
    }
  };
  const shouldShowRegistration = reg.some(
    (regName) => regName.toLowerCase() === event.name.toLowerCase()
  );
  return (
    <div className="event-detail-page">
      <h2 className="event-title">{event.name}</h2>
      <button
        className="back-btn"
        onClick={() => navigate(`/events/${category}`)}
      >
        Back
      </button>
      <div className="event-content">
        <div className="event-details">
          <p><strong>Date:</strong> {formattedDate}</p>
          <p><strong>Venue:</strong> {event.venue}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <p><strong>Heads:</strong> {event.heads}</p>
          <p><strong>Contact:</strong> {event.phone_no}</p>
          <p><strong>Category:</strong> {event.category}</p>
          <p><strong>Description:</strong> {event.description}</p>
        </div>
        {shouldShowRegistration && (
          <button className="register-btn" onClick={handleRegistration}>
            Register
          </button>
        )}
      </div>
    
      {/* Styles */}
     
    </div>
  );
};

export default EventDetailPage;
