import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { APIURL } from "../url.config";
// Events data from the JSON document
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
      "description": "A grand fashion show event.",
      "src" :  "https://res.cloudinary.com/dfkkdv8et/image/upload/v1742588976/apsit_oopryt.jpg"
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
      "description": "A high-energy dance competition.",
      "src" : "https://res.cloudinary.com/dfkkdv8et/image/upload/v1742588586/justdance_av2fo2.jpg"
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
      "description": "A fun and interactive karaoke event.",
      "src" : "https://res.cloudinary.com/dfkkdv8et/image/upload/v1742588586/karaoke_i8pqnl.jpg"
    },
    {
      "id": 5,
      "name": "IPL AUCTION",
      "date": "2025-03-24T18:00:00Z",
      "venue": " Day-1: 201 / Day-2: 112(seminar hall)} ",
      "time": "11:00 AM to 3:00 PM / 11:00 AM to 4:00 PM",
      "heads": "Harshal Patil , Soham Shivangan",
      "phone_no":"9222474104, 9767205460",
      "category": "Informals",
      "description": "A simulated IPL auction event.",
      "src" : "https://res.cloudinary.com/dfkkdv8et/image/upload/v1742588977/auction_oszthd.jpg"
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
      "description": "A mystery-solving event.",
      "src" :  "https://res.cloudinary.com/dfkkdv8et/image/upload/v1742588977/andhadhun_qgh65i.jpg"
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
      "description": "A challenging escape room experience.",
      "src" : "https://res.cloudinary.com/dfkkdv8et/image/upload/v1742589121/escaperoom_y2slat.jpg"
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
      "description": "A series of competitive challenges.",
      "src" : "https://res.cloudinary.com/dfkkdv8et/image/upload/v1742589312/squid_bkva6f.jpg"
    },
    {
      "id": 9,
	  "backend_id" : 6,
      "name": "TREASURE HUNT",
      "date": "2025-03-24T18:00:00Z",
      "venue": "203",
      "time": "11:00 AM to 3:00 PM / 10:00 AM to 12:00 AM",
      "heads": "Vaishanvi Bhojak, Aanya Singh, Rutu Desai",
      "phone_no":"8591067050, 9324357482, 7448168628",
      "category": "Informals",
      "description": "An adventurous treasure hunt game.",
      "src" : "https://res.cloudinary.com/dfkkdv8et/image/upload/v1742589478/hunt_nbfeev.jpg"
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
      "description": "A funfair with various activities.",
      "src" : "https://res.cloudinary.com/dfkkdv8et/image/upload/v1742589388/funfair_lkvcua.jpg"
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
      "description": "A fun and engaging team game.",
      "src" : "https://res.cloudinary.com/dfkkdv8et/image/upload/v1742589591/couch_pdpmef.jpg"
    },
    {
      "id": 12,
      "name": "HORROR ROOM",
      "date": "2025-03-24T18:00:00Z",
      "venue": "103",
      "time": "DAY 1 : 12:00 AM TO 5:00 PM / DAY2 : 12:00 AM TO 3:00 PM",
      "heads": "SONIKA SAWANT, PARSHV SHAH, PRANAV SATHE",
      "phone_no":"8657434372, 9921617179, 9067253739",
      "category": "Informals",
      "description": "A thrilling horror experience.",
      "src" : "https://res.cloudinary.com/dfkkdv8et/image/upload/v1742589532/horror_goj6ec.jpg"
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
      "description": "A real-life version of Rocket League.",
      "src" : "https://res.cloudinary.com/dfkkdv8et/image/upload/v1742589637/rocket_1_h90m2c.jpg"
    },
	    {
      "id": 14,
      "name": "Facemask & Face Painting",
      "date": "2025-03-24T18:00:00Z",
      "venue": "004",
      "time": "11:00 AM to 3:00 PM",
      "heads": "Anisha Tiwari",
      "phone_no":"9967488072",
      "category": "Fine Arts",
      "description": "An artistic event focused on facemask and face painting."
    },
    {
      "id": 15,
      "name": "Braiding",
      "date": "2025-03-24T18:00:00Z",
      "venue": "004",
      "time": "11:00 AM to  3:00 PM",
      "heads": "Sajni Shetty",
      "phone_no":"6361869221",
      "category": "Fine Arts",
      "description": "A creative hairstyling event featuring braiding techniques."
    },
    {
      "id": 16,
      "name": "Canvas Painting",
      "date": "2025-03-25T18:00:00Z",
      "venue": "004",
      "time": "5H",
      "heads": "Radhika Lakhani",
      "phone_no":"6381844986",
      "category": "Fine Arts",
      "description": "A craft-based event where participants create bracelets, keychains, and earrings."
    },
    {
      "id": 17,
      "name": "Cosmic Chains",
      "date": "2025-03-24T18:00:00Z",
      "venue": "004",
      "time": "11:00 AM to 3:00 PM",
      "heads": "Vaishanavi Jadhav",
      "phone_no":"9076157274",
      "category": "Fine Arts",
      "description": "Cosmic Chains – Craft your own style statement!."
    },
    {
      "id": 21,
      "backend_id" : 3,
      "name": "APSIT's Got Latent",
      "date": "2025-03-24T18:00:00Z",
      "venue": "008",
      "time": "2PM to 5 PM",
      "heads": "Swayam Sangave, Piyush Mahankal",
      "phone_no":"8087619562, 7758854971",
      "category": "Performing Arts",
      "description": "A talent show where participants showcase their hidden talents.",
      "src" : "https://res.cloudinary.com/dfkkdv8et/image/upload/v1742590453/latentapsit_n5oryt.jpg"
    },
	{
      "id": 22,
      "name": "Paintball",
      "date": "2025-03-24T18:00:00Z",
      "venue": "Collegeg turf",
      "time": "3H",
      "heads": "Arpit Chopda",
      "phone_no":"9022331132",
      "category": "Recreational",
      "description": "A thrilling paintball game experience.",
      "src" : "https://res.cloudinary.com/dfkkdv8et/image/upload/v1742590341/paintball_lctcw3.jpg"
    },
    {
      "id": 23,
      "name": "Giant Jenga",
      "date": "2025-03-25T18:00:00Z",
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
      "date": "2025-03-24T18:00:00Z",
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
      "date": "2025-03-24T18:00:00Z",
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
      "description": "An interactive event based on choices and fate.",
      "src" : "https://res.cloudinary.com/dfkkdv8et/image/upload/v1742590221/doors_hup7xb.jpg"
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
      "description": "A thrilling event exploring the themes of heaven and hell.",
      "src" : "https://res.cloudinary.com/dfkkdv8et/image/upload/v1742590152/hellheaven_alm9ew.jpg"
    }, 
	{
      "id": 28,
	  "backend_id" :5,
      "name": "BGMI",
      "date": "2025-03-24T18:00:00Z",
      "venue": "{Day-2: 201}",
      "time": "8H",
      "heads": "Hrishikesh Mishra, Aditya Mishra (Co-head), Sahik Nayak (Co-head)",
      "phone_no":"9321839469",
      "category": "Gaming & Sports",
      "description": "A competitive Battlegrounds Mobile India (BGMI) tournament.",
      "src" : "https://res.cloudinary.com/dfkkdv8et/image/upload/v1742589957/bgmi_zboyqh.jpg"
    },
    {
      "id": 29,
	  "backend_id" : 4,
      "name": "Valorant",
      "date": "2025-03-24T18:00:00Z",
      "venue": "301",
      "time": "full day",
      "heads": "Karan Vethody, Jay Patil",
      "phone_no":"8850106942, 9106311774",
      "category": "Gaming & Sports",
      "description": "A high-stakes Valorant eSports competition.",
      "src" : "https://res.cloudinary.com/dfkkdv8et/image/upload/v1742589959/valo_udtbmu.jpg"
    },
    {
      "id": 30,
      "name": "Scatterball",
      "date": "2025-03-24T18:00:00Z",
      "venue": "BCR",
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
      "date": "2025-03-24T18:00:00Z",
      "venue": "{Day-2: 301}",
      "time": "8H",
      "heads": "Prakhar Asthana",
      "category": "Gaming & Sports",
      "description": "A FIFA video game competition.",
      "src" : "https://res.cloudinary.com/dfkkdv8et/image/upload/v1742589880/fifa_fiwupq.jpg"
    },
    {
      "id": 32,
      "name": "Neon Cricket",
      "date": "2025-03-24T18:00:00Z",
      "venue": "206",
      "time": "10:00AM",
      "heads": "Nishant Rathod, Sandesh Sarode",
      "phone_no":"8850409126, 9021677152",
      "category": "Gaming & Sports",
      "description": "A unique cricket game played under neon lights.",
	  "src" : "https://res.cloudinary.com/dfkkdv8et/image/upload/v1742590069/neoncricket_d8q7ut.jpg"
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
      "description": "Lights, music, and pure talent—get ready for a spectacular showcase of creativity and expression",
	  "src" : "https://res.cloudinary.com/dth2rinzf/image/upload/v1742594144/harmony_hive_mgohrx.jpg"
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
      "description": "Lights, music, and pure talent—get ready for a spectacular showcase of creativity and expression",
	  "src" : "https://res.cloudinary.com/dth2rinzf/image/upload/v1742594241/dance_ljdjoy.jpg"
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
      "description": "Lights, music, and pure talent—get ready for a spectacular showcase of creativity and expression",
      "src" : "https://res.cloudinary.com/dfkkdv8et/image/upload/v1742590632/musicevent_edlvgm.jpg"
    }
  ]
}

const EventDetailPage = () => {
  const { category, eventId } = useParams();
  const navigate = useNavigate();
 // const reg = ["MR & MRS APSIT FASHION SHOW", "BGMI", "VALORANT", "TREASURE HUNT", "FIFA", "APSIT's Got Latent"]
  const reg = ["MR & MRS APSIT FASHION SHOW", "APSIT's Got Latent", "BGMI", "VALORANT", "TREASURE HUNT"]
  const teams = ["BGMI", "VALORANT", "TREASURE HUNT"]
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

  const handleRegistration = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const isTeamEvent = teams.some(
      teamName => teamName.toLowerCase() === event.name.toLowerCase()
    );
    const isApsitLatent = event.name === "APSIT's Got Latent";
    if (!accessToken) {
      alert("Please login first");
      navigate("/login");
      return;
    }
    if (isApsitLatent) {
      navigate("/register_latent", { 
        state: { 
          eventId: 3,
          eventName: event.name
        }
      });
      return; // Exit early to prevent normal registration flow
    }
  
    try {
      console.log("here")
      const response = await fetch(`${APIURL}/api/events/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          event: event.backend_id || event.id
        })
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        if (data.error === "Email and phone number are required for first registration") {
          navigate("/register", { 
            state: { 
              eventId: event.id,
              eventName: event.name,
              needsInfo: true 
            }
          });
        } else if (data.error === "Already registered for this event" && isTeamEvent) {
          // Redirect to team display page for team events
          console.log("Here in teams")
          console.log(event)
          navigate("/team", { 
            state: { 
              eventId: event.backend_id || event.id,
              eventName: event.name
            }
          });
        } else {
          alert(`Error: ${data.error}`);
        }
      } else {
        if (isTeamEvent) {
          navigate("/team", { 
            state: { 
              eventId: event.backend_id || event.id,
              eventName: event.name
            }
          });
        } else {
          alert("Successfully registered for the event!");
        }
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert("Registration failed. Please try again.");
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
