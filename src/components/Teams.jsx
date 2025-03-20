import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const JoinTeam = () => {
  const [view, setView] = useState(null);
  const [teamId, setTeamId] = useState("");
  const [teamDetails, setTeamDetails] = useState(null);
  const [teamName, setTeamName] = useState("");
  const [generatedTeamId, setGeneratedTeamId] = useState(null);
  const [joined, setJoined] = useState(false);

  const handleJoinTeam = () => {
    if (teamId) {
      setTeamDetails({
        teamName: "Alpha Squad",
        leaderName: "John Doe",
        members: ["Alice", "Bob", "Charlie"],
      });
    }
  };

  const handleCreateTeam = () => {
    if (teamName) {
      const newTeamId = Math.floor(1000 + Math.random() * 9000);
      setGeneratedTeamId(newTeamId);
    }
  };

  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center min-vh-100 min-vw-100 text-center"
      style={{
        backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/571a8a1ab6aa6012a71e3971/1547218070587-DSKXEM4CF22JXMAHTDZC/Craft_Republic_header_background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {!view && (
        <div>
          <button
            className="btn btn-dark btn-lg mb-3 d-block mx-auto"
            onClick={() => setView("join")}
          >
            Join Team
          </button>
          <button
            className="btn btn-secondary btn-lg d-block mx-auto"
            onClick={() => setView("create")}
          >
            Create Team
          </button>
        </div>
      )}

      {view === "join" && !teamDetails && (
        <div className="card mt-4 p-4 shadow-lg" style={{ maxWidth: "400px" }}>
          <h2>Enter Team ID</h2>
          <input
            type="text"
            className="form-control mt-3"
            value={teamId}
            onChange={(e) => setTeamId(e.target.value)}
            placeholder="Team ID"
          />
          <button className="btn btn-dark w-100 mt-3" onClick={handleJoinTeam}>
            Submit
          </button>
          {/* Modified back button color for better visibility */}
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={() => setView(null)}
          >
            Back
          </button>
        </div>
      )}

      {teamDetails && !joined && (
        <div className="card mt-4 p-4 shadow-lg" style={{ maxWidth: "400px" }}>
          <h2>Team Details</h2>
          <p><strong>Team Name:</strong> {teamDetails.teamName}</p>
          <p><strong>Leader:</strong> {teamDetails.leaderName}</p>
          <p><strong>Members:</strong> {teamDetails.members.join(", ")}</p>
          <button
            className="btn btn-dark w-100 mt-3"
            onClick={() => setJoined(true)}
          >
            Join
          </button>
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={() => { setTeamDetails(null); setView(null); }}
          >
            Back
          </button>
        </div>
      )}

      {joined && (
        <div className="alert alert-success mt-4" style={{ maxWidth: "400px" }}>
          <h4>Thanks for Joining!</h4>
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={() => { setJoined(false); setTeamDetails(null); setView(null); }}
          >
            Back to Home
          </button>
        </div>
      )}

      {view === "create" && (
        <div className="card mt-4 p-4 shadow-lg" style={{ maxWidth: "400px" }}>
          <h2>Create Team</h2>
          <input
            type="text"
            className="form-control mt-3"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="Enter Team Name"
          />
          <button className="btn btn-dark w-100 mt-3" onClick={handleCreateTeam}>
            Submit
          </button>
          {generatedTeamId && (
            <div className="alert alert-info mt-3">
              <strong>Your Team ID:</strong> {generatedTeamId} <br /> Share it with your friends!
            </div>
          )}
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={() => setView(null)}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default JoinTeam;
