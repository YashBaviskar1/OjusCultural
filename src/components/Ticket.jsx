import React from 'react';
import { useSearchParams } from "react-router-dom";
const Ticket = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") || "Unknown";
  const moodleId = searchParams.get("moodleId") || "N/A";

  return (
    <>
      <div className="main-content">
        <div className="ticket">
          <div className="ticket__main">
            <div className="header">KASHINATH GHANEKAR</div>
            
            <div className="info passenger">
              <div className="info__item">Passenger</div>
              <div className="info__detail">{name}</div>
            </div>

            <div className="info platform">
              <span>Depart</span>
              <span>from</span>
              <span>platform</span>
              <div className="number">
                <div>9</div>
                <div>
                  <span>3</span>
                  <span>4</span>
                </div>
              </div>
            </div>

            <div className="info departure">
              <div className="info__item">Moodle ID</div>
              <div className="info__detail">{moodleId}</div>
            </div>

            <div className="info arrival">
              <div className="info__item">Arrive</div>
              <div className="info__detail">THANE</div>
            </div>

            <div className="info date">
              <div className="info__item">Date</div>
              <div className="info__detail">26 MAR 2025</div>
            </div>

            <div className="info time">
              <div className="info__item">Time</div>
              <div className="info__detail">09:00AM</div>
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
          margin: 4em auto 0;
          width: 740px;
          text-transform: uppercase;
        }

        .ticket {
          display: grid;
          grid-template-columns: auto 143px;
          background: #f3f1c9;
          border-radius: 10px;
          border: 2px solid #222;
          cursor: default;
        }

        .ticket__main {
          display: grid;
          grid-template-columns: repeat(6, 1fr) 120px;
          grid-template-rows: repeat(4, min-content) auto;
          padding: 10px;
        }

        .header {
          grid-column: span 7;
          grid-row: 1;
          font: 500 38px 'Montserrat', sans-serif;
          padding: 5px 0 5px 20px;
          letter-spacing: 6px;
          background: #111;
          color: #f3f1c9;
        }

        .info {
          border: 3px solid #000000;
          border-width: 0 3px 3px 0;
          padding: 8px;
        }

        .info__item {
          font: 400 13px 'Questrial', sans-serif;
          letter-spacing: 0.5px;
          color: #000000;
        }

        .info__detail {
          font: 700 20px/1 'Jura';
          letter-spacing: 1px;
          margin: 4px 0;
          color: #000000;
        }

        .passenger { grid-column: 1 / span 6; }

        .platform {
          grid-column: 7 / span 1;
          grid-row: 2 / span 3;
          background: #c02a28;
          color: #ffffff;
          border-color: #000000;
          text-align: center;
          padding: 10px 0;
        }

        .platform span { display: block; }

        .platform span:nth-child(1) { font: 900 22px/1 'Montserrat'; letter-spacing: 1.5px; }
        .platform span:nth-child(2) { font: 900 29px/1 'Montserrat'; letter-spacing: 3px; }
        .platform span:nth-child(3) { font: 900 16px/1.2 'Montserrat'; letter-spacing: 0.5px; }

        .number {
          display: flex;
          margin-top: 12px;
          position: relative;
        }

        .number div:nth-child(1) {
          position: absolute;
          left: 16px;
          font: 900 90px/1 'Old Standard TT';
        }

        .number div span {
          font: 900 36px/1 'Old Standard TT';
          position: absolute;
          right: 18px;
        }

        .number div span:nth-child(1) {
          top: -2px;
          border-bottom: 2px solid;
          padding: 0 2px;
        }

        .number div span:nth-child(2) { top: 44px; }

        .departure, .arrival { grid-column-start: span 3; }
        .passenger, .departure, .date { border-left: 3px solid #000000; }
        .date, .time { grid-column-start: span 2; }

        .fineprint {
          grid-column-start: span 5;
          font: 14px/1 'Inconsolata';
          margin-top: 10px;
          padding-right: 5px;
          color: #000000;
        }

        .fineprint p:nth-child(2) {
          margin: 4px 4px 0 0;
          padding-top: 4px;
          border-top: 1.5px dotted;
          font: 11px/1 'Inconsolata';
        }

        .snack {
          grid-column: 6 / span 1;
          width: 65px;
          margin: 10px 10px 0 0;
          background: #000000;
          padding: 6px 0 2px;
          text-align: center;
          border-radius: 5px;
        }

        .snack svg {
          fill: #f3f1c9;
          width: 36px;
        }

        .barcode {
          grid-column-start: span 1;
          display: grid;
          margin: 10px 0 0;
          grid-template-rows: 1fr min-content;
        }

        .barcode__scan {
          background: linear-gradient(to right, 
            #333 2%, #333 4%, transparent 4%, transparent 5%, 
            #333 5%, #333 6%, transparent 6%, #333 6%, #333 8%, 
            transparent 8%, transparent 9%, #333 9%, #333 10.5%, 
            transparent 10.5%, transparent 11%, #333 11%, #333 12%, 
            transparent 12%, transparent 13.5%, #333 13.5%, #333 15%, 
            #333 17%, transparent 17%, transparent 19%, #333 19%, #333 20%, 
            transparent 20%, transparent 21%, #333 21%, #333 22%, 
            transparent 22%, transparent 23.5%, #333 23.5%, #333 25%, 
            transparent 25%, transparent 26.5%, #333 26.5%, #333 27.5%, 
            transparent 27.5%, transparent 28.5%, #333 28.5%, #333 30%, 
            transparent 30%, transparent 32%, #333 32%, #333 34%, #333 36%, 
            transparent 36%, transparent 37.5%, #333 37.5%, #333 40%, 
            transparent 40%, transparent 41.5%, #333 41.5%, #333 43%, 
            transparent 43%, transparent 46%, #333 46%, #333 48%, 
            transparent 48%, transparent 49%, #333 49%, transparent 49%, 
            transparent 50%, #333 50%, #333 51%, transparent 51%, 
            transparent 53%, #333 53%, #333 54.5%, transparent 54.5%, 
            transparent 56%, #333 56%, #333 58%, transparent 58%, 
            transparent 59%, #333 59%, #333 60%, #333 62.5%, 
            transparent 62.5%, transparent 64%, #333 64%, #333 64%, 
            #333 67%, transparent 67%, transparent 69%, #333 69%, #333 70%, 
            transparent 70%, transparent 71%, #333 71%, #333 72%, 
            transparent 72%, transparent 73.5%, #333 73.5%, #333 76%, 
            transparent 76%, transparent 79%, #333 79%, #333 80%, 
            transparent 80%, transparent 82%, #333 82%, #333 82.5%, 
            transparent 82.5%, transparent 84%, #333 84%, #333 87%, 
            transparent 87%, transparent 89%, #333 89%, #333 91%, 
            transparent 91%, transparent 92%, #333 92%, #333 95%, 
            transparent 95%);
        }

        .barcode__id {
          letter-spacing: 4px;
          padding: 2px 0 0;
          color: #000000;
          font: 700 16px/1 'Jura';
        }

        .ticket__side {
          background: rgba(192, 42, 40, 0.2);
          border-left: 1.5px dashed #111;
          display: grid;
          grid-template-rows: repeat(2, 124px) 60px;
          grid-template-columns: 40px repeat(2, 45px);
          border-radius: 0 10px 10px 0;
          box-sizing: border-box;
        }

        .logo {
          text-align: center;
          background: #c02a28;
          padding: 10px 5px 10px 0;
          margin: 10px 0 0 10px;
          font: 900 16px/1 'Montserrat';
          letter-spacing: 1.5px;
          grid-column: 1 / span 1;
          grid-row: 1 / span 2;
          color: #ffffff;
          writing-mode: vertical-rl;
        }

        .logo p { transform: rotate(180deg); }

        .ticket__side .info {
          border: 3px solid #c02a28;
          border-width: 3px 3px 0;
          grid-column-start: 2;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }

        .side-arrive { margin-top: 10px; border-width: 3px; }
        .side-date { grid-column-start: 3; border-right: none; }
        .side-time {
          grid-column: 3 / span 1;
          grid-row: 1;
          margin-top: 10px;
          border-width: 3px 0 3px 3px;
        }

        .ticket__side .info__item {
          font-size: 11px;
          color: #c02a28;
        }

        .ticket__side .info__detail {
          font-size: 12px;
          margin: 0 2px 0 0;
          letter-spacing: 0;
          color: #000000;
        }

        .ticket__side .barcode {
          grid-template-rows: 30px min-content;
          grid-row-start: 3;
          grid-column: 1 / span 3;
          margin: 9px 0 0 10px;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Ticket;