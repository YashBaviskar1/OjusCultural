import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Sample sub-card data for each category
const subCardData = {
  "informals": [
    { text: "Event 1: Quiz", image: "quiz.jpg" },
    { text: "Event 2: Debate", image: "debate.jpg" },
    { text: "Event 3: Jam", image: "jam.jpg" },
  ],
  "fine-arts": [
    { text: "Event 1: Painting", image: "painting.jpg" },
    { text: "Event 2: Sculpture", image: "sculpture.jpg" },
  ],
  "performing-arts": [
    { text: "Event 1: Dance", image: "dance.jpg" },
    { text: "Event 2: Drama", image: "drama.jpg" },
  ],
  "recreational": [
    { text: "Event 1: Treasure Hunt", image: "treasure.jpg" },
    { text: "Event 2: Fun Games", image: "games.jpg" },
  ],
  "pass-n-go": [
    { text: "Event 1: Quick Pass", image: "quickpass.jpg" },
  ],
  "theme-based": [
    { text: "Event 1: Cosplay", image: "cosplay.jpg" },
    { text: "Event 2: Theme Quiz", image: "themequiz.jpg" },
  ],
  "gaming-sports": [
    { text: "Event 1: Football", image: "football.jpg" },
    { text: "Event 2: Esports", image: "esports.jpg" },
    { text: "Event 3: Basketball", image: "basketball.jpg" },
  ],
};

const SubCardsPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const cards = subCardData[category] || [];

  // Function to handle sub-card click and navigate to detail page
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
              onClick={() => handleSubCardClick(index)} // Add click handler
            >
              <div className="card bg-dark text-white card-overlay">
                <img src={card.image} className="card-img" alt={card.text} />
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                  <h5 className="card-title text-center">{card.text}</h5>
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
          background: linear-gradient(135deg, #1e1e2f, #3a3a5e);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
        }

        .section-title {
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

        .card-overlay {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          width: 100%;
          cursor: pointer; /* Indicate clickability */
        }

        .card-overlay img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          transition: transform 0.3s ease-in-out;
        }

        .card-overlay:hover img {
          transform: scale(1.05);
        }

        .card-img-overlay {
          background: rgba(0, 0, 0, 0.5);
          transition: background 0.3s ease-in-out;
        }

        .card-overlay:hover .card-img-overlay {
          background: rgba(0, 0, 0, 0.7);
        }

        .card-title {
          font-size: 1.2rem;
          font-weight: bold;
        }

        @media (max-width: 1024px) {
          .section-title {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 1.5rem;
          }

          .card-title {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.3rem;
          }

          .card-title {
            font-size: 0.9rem;
          }

          .card-overlay img {
            height: 180px;
          }
        }
      `}</style>
    </div>
  );
};

export default SubCardsPage;