import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { APIURL } from "../url.config";
import { useLocation } from "react-router-dom";

const Teams = () => {
  const { state } = useLocation();
  const eventId = state?.eventId;
  const [teamStatus, setTeamStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [teamCode, setTeamCode] = useState("");
  const [teamName, setTeamName] = useState("");

  useEffect(() => {
    const fetchTeamStatus = async () => {
      try {
        const response = await fetch(`${APIURL}/api/check-team/${eventId}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        if (!response.ok) throw new Error("Failed to fetch team status");
        const data = await response.json();
        setTeamStatus(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamStatus();
  }, [eventId]);

  const handleJoinTeam = async () => {
    try {
      setError(null);
      const response = await fetch(`${APIURL}/api/join-team/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ code: teamCode }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to join team");
      }

      const teamData = await response.json();
      setTeamStatus(prev => ({
        ...prev,
        in_team: true,
        team: teamData,
      }));
      setTeamCode("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCreateTeam = async () => {
    try {
      setError(null);
      const response = await fetch(`${APIURL}/api/create-team/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ event_id: eventId, team_name: teamName }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create team");
      }

      const teamData = await response.json();
      setTeamStatus(prev => ({
        ...prev,
        in_team: true,
        team: teamData,
      }));
      setTeamName("");
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="text-center mt-4">Loading...</div>;
  if (error) return <div className="alert alert-danger mt-4">{error}</div>;

  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center min-vh-100"
      style={{
        backgroundImage: "url('https://example.com/background.jpg')",
        backgroundSize: "cover",
      }}
    >
      {teamStatus.in_team ? (
        <div className="card p-4 shadow-lg" style={{ maxWidth: "600px" }}>
          <h2>Team Details</h2>
          <div className="text-start">
            <p><strong>Name:</strong> {teamStatus.team.name}</p>
            <p><strong>Code:</strong> {teamStatus.team.code}</p>
            <p><strong>Leader:</strong> {teamStatus.team.leader}</p>
            <h5>Members:</h5>
            <ul className="list-group">
              {teamStatus.team.members.map((member, index) => (
                <li key={index} className="list-group-item">
                  {member.member}
                  <span className="text-muted ms-2">
                    ({new Date(member.joined_at).toLocaleDateString()})
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        teamStatus.max_team_size > 1 ? (
          <div className="row gap-3">
            <div className="card p-4 shadow-lg">
              <h3>Join Team</h3>
              <input
                type="text"
                className="form-control mt-3"
                value={teamCode}
                onChange={(e) => setTeamCode(e.target.value.toUpperCase())}
                placeholder="Enter team code"
                maxLength="5"
              />
              <button
                className="btn btn-dark mt-3"
                onClick={handleJoinTeam}
                disabled={teamCode.length !== 5}
              >
                Join
              </button>
            </div>

            <div className="card p-4 shadow-lg">
              <h3>Create Team</h3>
              <input
                type="text"
                className="form-control mt-3"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Enter team name"
              />
              <button
                className="btn btn-secondary mt-3"
                onClick={handleCreateTeam}
                disabled={!teamName.trim()}
              >
                Create
              </button>
            </div>
          </div>
        ) : (
          <div className="alert alert-info">
            Individual event - No team required
          </div>
        )
      )}
    </div>
  );
};

export default Teams;