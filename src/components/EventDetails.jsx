import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Sample sub-card data for each category (extended with date info for demo)
const subCardData = {
  "informals": [
    { text: "Event 1: Quiz", image: "quiz.jpg", month: "MAR", date: "04" },
    { text: "Event 2: Debate", image: "debate.jpg", month: "MAR", date: "05" },
    { text: "Event 3: Jam", image: "jam.jpg", month: "MAR", date: "06" },
  ],
  "fine-arts": [
    { text: "Event 1: Painting", image: "painting.jpg", month: "APR", date: "10" },
    { text: "Event 2: Sculpture", image: "sculpture.jpg", month: "APR", date: "11" },
  ],
  "performing-arts": [
    { text: "Event 1: Dance", image: "dance.jpg", month: "MAY", date: "15" },
    { text: "Event 2: Drama", image: "drama.jpg", month: "MAY", date: "16" },
  ],
  "recreational": [
    { text: "Event 1: Treasure Hunt", image: "treasure.jpg", month: "JUN", date: "20" },
    { text: "Event 2: Fun Games", image: "games.jpg", month: "JUN", date: "21" },
  ],
  "pass-n-go": [
    { text: "Event 1: Quick Pass", image: "quickpass.jpg", month: "JUL", date: "25" },
  ],
  "theme-based": [
    { text: "Event 1: Cosplay", image: "cosplay.jpg", month: "AUG", date: "01" },
    { text: "Event 2: Theme Quiz", image: "themequiz.jpg", month: "AUG", date: "02" },
  ],
  "gaming-sports": [
    { text: "Event 1: Football", image: "football.jpg", month: "SEP", date: "10" },
    { text: "Event 2: Esports", image: "esports.jpg", month: "SEP", date: "11" },
    { text: "Event 3: Basketball", image: "basketball.jpg", month: "SEP", date: "12" },
  ],
};

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
              <div className="parent">
                <div className="card">
                  <div className="content-box">
                    <img src={card.image} className="card-img" alt={card.text} />
                    <span className="card-title">{card.text}</span>
                    {/* Optional: Add description if extended in subCardData */}
                    {/* <p className="card-content">Lorem ipsum dolor sit amet...</p> */}
                    <span className="see-more">View Details</span>
                  </div>
                  <div className="date-box">
                    <span className="month">{card.month}</span>
                    <span className="date">{card.date}</span>
                  </div>
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
          color: #ffffff; /* Adjusted for visibility */
        }

        .back-btn {
          position: absolute;
          top: 20px;
          left: 20px;
          padding: 10px 20px;
          background-color: #fff;
          color: #333;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
        }

        .back-btn:hover {
          background-color: #ddd;
        }

        .parent {
          width: 300px;
          padding: 20px;
          perspective: 1000px;
          margin: 0 auto;
        }

        .card {
          padding-top: 50px;
          border: 3px solid rgb(255, 255, 255);
          transform-style: preserve-3d;
          background: linear-gradient(
              135deg,
              #0000 18.75%,
              #f3f3f3 0 31.25%,
              #0000 0
            ),
            repeating-linear-gradient(
              45deg,
              #f3f3f3 -6.25% 6.25%,
              #ffffff 0 18.75%
            );
          background-size: 60px 60px;
          background-position: 0 0, 0 0;
          background-color: #f0f0f0;
          width: 100%;
          box-shadow: rgba(142, 142, 142, 0.3) 0px 30px 30px -10px;
          transition: all 0.5s ease-in-out;
          cursor: pointer;
          position: relative;
          height: 400px; /* Fixed height for consistency */
        }

        .card:hover {
          background-position: -100px 100px, -100px 100px;
          transform: rotate3d(0.5, 1, 0, 30deg);
        }

        .content-box {
          background: rgba(4, 193, 250, 0.732);
          transition: all 0.5s ease-in-out;
          padding: 60px 25px 25px 25px;
          transform-style: preserve-3d;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .card-img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          margin-bottom: 15px;
          transform: translate3d(0px, 0px, 40px);
          transition: all 0.5s ease-in-out;
        }

        .card:hover .card-img {
          transform: translate3d(0px, 0px, 60px);
        }

        .content-box .card-title {
          display: inline-block;
          color: white;
          font-size: 20px; /* Slightly smaller for fit */
          font-weight: 900;
          transition: all 0.5s ease-in-out;
          transform: translate3d(0px, 0px, 50px);
          text-align: center;
        }

        .content-box .card-title:hover {
          transform: translate3d(0px, 0px, 60px);
        }

        .content-box .card-content {
          margin-top: 10px;
          font-size: 12px;
          font-weight: 700;
          color: #f2f2f2;
          transition: all 0.5s ease-in-out;
          transform: translate3d(0px, 0px, 30px);
          text-align: center;
        }

        .content-box .card-content:hover {
          transform: translate3d(0px, 0px, 60px);
        }

        .content-box .see-more {
          cursor: pointer;
          margin-top: 1rem;
          display: inline-block;
          font-weight: 900;
          font-size: 9px;
          text-transform: uppercase;
          color: rgb(7, 185, 255);
          background: white;
          padding: 0.5rem 0.7rem;
          transition: all 0.5s ease-in-out;
          transform: translate3d(0px, 0px, 20px);
        }

        .content-box .see-more:hover {
          transform: translate3d(0px, 0px, 60px);
        }

        .date-box {
          position: absolute;
          top: 30px;
          right: 30px;
          height: 60px;
          width: 60px;
          background: white;
          border: 1px solid rgb(7, 185, 255);
          padding: 10px;
          transform: translate3d(0px, 0px, 80px);
          box-shadow: rgba(100, 100, 111, 0.2) 0px 17px 10px -10px;
        }

        .date-box span {
          display: block;
          text-align: center;
        }

        .date-box .month {
          color: rgb(4, 193, 250);
          font-size: 9px;
          font-weight: 700;
        }

        .date-box .date {
          font-size: 20px;
          font-weight: 900;
          color: rgb(4, 193, 250);
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

          .parent {
            width: 250px;
            padding: 15px;
          }

          .card {
            height: 350px;
          }

          .card-img {
            height: 120px;
          }

          .content-box .card-title {
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.3rem;
          }

          .parent {
            width: 200px;
            padding: 10px;
          }

          .card {
            height: 300px;
          }

          .card-img {
            height: 100px;
          }

          .content-box .card-title {
            font-size: 16px;
          }

          .date-box {
            top: 20px;
            right: 20px;
            height: 50px;
            width: 50px;
          }

          .date-box .date {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default SubCardsPage;