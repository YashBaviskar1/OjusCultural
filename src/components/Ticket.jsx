


import React from 'react';

const Ticket = () => {
  return (
    <>
      <div className="main-content">
        <div className="ticket">
          <div className="ticket__main">
            <div className="header">KASHINATH GHANEKAR</div>
            
            <div className="info passenger">
              <div className="info__item">Passenger</div>
              <div className="info__detail">Yash Baviskar</div>
            </div>

            <div className="info departure">
              <div className="info__item">Moodle ID</div>
              <div className="info__detail">23102210</div>
            </div>

            <div className="info arrival">
              <div className="info__item">Arrive</div>
              <div className="info__detail">Thane</div>
            </div>

            <div className="info date">
              <div className="info__item">Date</div>
              <div className="info__detail">26 MAR 2025</div>
            </div>

            <div className="info time">
              <div className="info__item">Time</div>
              <div className="info__detail">10:00AM</div>
            </div>

            <div className="fineprint">
              <p>OJUS CULTURALS • Ghanekar Theatre</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(body) {
          background: #f2f2f2;
          font-family: 'Questrial', sans-serif;
          color: #000000;
        }

        .main-content {
          margin: 2em auto;
          max-width: 90%;
          text-transform: uppercase;
        }

        .ticket {
          display: flex;
          flex-direction: column;
          background: #f3f1c9;
          border-radius: 10px;
          border: 2px solid #222;
          cursor: default;
          padding: 1rem;
        }

        .header {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 600;
          padding: 10px 0;
          background: #111;
          color: #f3f1c9;
          border-radius: 5px;
        }

        .info {
          border: 2px solid #000;
          padding: 8px;
          margin: 5px 0;
          border-radius: 5px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .info__item {
          font-size: 0.9rem;
          color: #000000;
        }

        .info__detail {
          font-size: 1.2rem;
          font-weight: 700;
          color: #000000;
        }

        .fineprint {
          text-align: center;
          font-size: 1rem;
          margin-top: 10px;
          color: #000000;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .ticket {
            padding: 0.8rem;
          }

          .header {
            font-size: 1.3rem;
          }

          .info {
            flex-direction: column;
            text-align: center;
          }

          .info__item {
            font-size: 0.8rem;
          }

          .info__detail {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .main-content {
            max-width: 95%;
          }

          .header {
            font-size: 1.1rem;
            padding: 8px 0;
          }

          .info__item {
            font-size: 0.75rem;
          }

          .info__detail {
            font-size: 0.9rem;
          }

          .fineprint {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </>
  );
};

export default Ticket;