import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Reuse the same subCardData from SubCardsPage
const subCardData = {
  "informals": [
    { text: "Event 1: Quiz", image: "quiz.jpg", description: "A fun quiz event!" },
    { text: "Event 2: Debate", image: "debate.jpg", description: "Test your debating skills." },
    { text: "Event 3: Jam", image: "jam.jpg", description: "Just a Minute competition." },
  ],
  "fine-arts": [
    { text: "Event 1: Painting", image: "painting.jpg", description: "Showcase your painting talent." },
    { text: "Event 2: Sculpture", image: "sculpture.jpg", description: "Create amazing sculptures." },
  ],
  "performing-arts": [
    { text: "Event 1: Dance", image: "dance.jpg", description: "Dance your heart out!" },
    { text: "Event 2: Drama", image: "drama.jpg", description: "Perform a dramatic play." },
  ],
  "recreational": [
    { text: "Event 1: Treasure Hunt", image: "treasure.jpg", description: "Find the hidden treasure." },
    { text: "Event 2: Fun Games", image: "games.jpg", description: "Enjoy some fun games." },
  ],
  "pass-n-go": [
    { text: "Event 1: Quick Pass", image: "quickpass.jpg", description: "Fast-paced passing game." },
  ],
  "theme-based": [
    { text: "Event 1: Cosplay", image: "cosplay.jpg", description: "Dress up as your favorite character." },
    { text: "Event 2: Theme Quiz", image: "themequiz.jpg", description: "Themed trivia challenge." },
  ],
  "gaming-sports": [
    { text: "Event 1: Football", image: "football.jpg", description: "Play a football match." },
    { text: "Event 2: Esports", image: "esports.jpg", description: "Compete in esports." },
    { text: "Event 3: Basketball", image: "basketball.jpg", description: "Shoot some hoops!" },
  ],
};

const EventDetailPage = () => {
  const { category, eventId } = useParams();
  const navigate = useNavigate();
  const event = subCardData[category]?.[eventId];

  if (!event) {
    return <div>Event not found!</div>;
  }

  return (
    <div className="event-detail-page">
      <h2 className="event-title">{event.text}</h2>
      <button
        className="back-btn"
        onClick={() => navigate(`/events/${category}`)}
      >
        Back 
      </button>
      <div className="event-content">
        <img src={event.image} alt={event.text} className="event-image" />
        <p className="event-description">{event.description}</p>
      </div>

      {/* Styles */}
      <style jsx>{`
        .event-detail-page {
          width: 100vw;
          min-height: 100vh;
          background: linear-gradient(135deg, #1e1e2f, #3a3a5e);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
        }

        .event-title {
          font-size: 2rem;
          margin-bottom: 20px;
          text-align: center;
        }

        .back-btn {
          position: absolute;
          top: 20px;
          left: 20px;
          padding: 10px 20px;
          background-color: #fff;
          color: #1e1e2f;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
        }

        .back-btn:hover {
          background-color: #ddd;
        }

        .event-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 600px;
        }

        .event-image {
          width: 100%;
          max-width: 400px;
          height: auto;
          border-radius: 10px;
          margin-bottom: 20px;
        }

        .event-description {
          font-size: 1.2rem;
          text-align: center;
        }

        @media (max-width: 768px) {
          .event-title {
            font-size: 1.5rem;
          }

          .event-description {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .event-title {
            font-size: 1.3rem;
          }

          .event-image {
            max-width: 300px;
          }

          .event-description {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default EventDetailPage;