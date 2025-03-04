import { useParams } from "react-router-dom";

export const CategoryPage = () => {
  const { category, count } = useParams();
  const categoryName = category.replace("-", " ").toUpperCase();
  const cardCount = parseInt(count);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">{categoryName} - {cardCount} Events</h2>
      <div className="row justify-content-center">
        {Array.from({ length: cardCount }, (_, index) => (
          <div key={index} className="col-md-4 col-sm-6 col-12 mb-3">
            <div className="card bg-dark text-white text-center">
              <div className="card-body">
                <h5 className="card-title">Event {index + 1}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
