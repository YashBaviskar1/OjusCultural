import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { APIURL } from "../url.config";
const Teams = ({ eventId }) => {
  const [teamStatus, setTeamStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [teamCode, setTeamCode] = useState("");
  const [teamName, setTeamName] = useState("");

  // Fetch team status when component mounts
  useEffect(() => {
    const fetchTeamStatus = async () => {
      try {
        const response = await axios.get(`${APIURL}api/check-team/34/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        });
        setTeamStatus(response.data);
      } catch (err) {
        setError(err.response?.data?.error || 'Error fetching team status');
      } finally {
        setLoading(false);
      }
    };

    fetchTeamStatus();
  }, [eventId]);

  const handleJoinTeam = async () => {
    try {
      await axios.post('/api/join-team/', { code: teamCode }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      });
      // Refresh team status after successful join
      const response = await axios.get(`/api/check-team/${eventId}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      });
      setTeamStatus(response.data);
      setTeamCode("");
    } catch (err) {
      setError(err.response?.data?.error || 'Error joining team');
    }
  };

  const handleCreateTeam = async () => {
    try {
      await axios.post('/api/create-team/', { 
        event_id: eventId,
        team_name: teamName 
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      });
      // Refresh team status after creation
      const response = await axios.get(`/api/check-team/${eventId}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      });
      setTeamStatus(response.data);
      setTeamName("");
    } catch (err) {
      setError(err.response?.data?.error || 'Error creating team');
    }
  };

  if (loading) {
    return <div className="text-center mt-4">Loading team status...</div>;
  }

  if (error) {
    return <div className="alert alert-danger mt-4">{error}</div>;
  }

  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center min-vh-100 min-vw-100 text-center"
      style={{
        backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/571a8a1ab6aa6012a71e3971/1547218070587-DSKXEM4CF22JXMAHTDZC/Craft_Republic_header_background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {teamStatus.in_team ? (
        <div className="card mt-4 p-4 shadow-lg" style={{ maxWidth: "600px" }}>
          <h2>Your Team Details</h2>
          <div className="text-start">
            <p><strong>Team Name:</strong> {teamStatus.team.name}</p>
            <p><strong>Team Code:</strong> {teamStatus.team.code}</p>
            <p><strong>Leader:</strong> {teamStatus.team.leader}</p>
            <h5 className="mt-3">Members:</h5>
            <ul className="list-group">
              {teamStatus.team.members.map((member, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  {member.member}
                  <span className="text-muted small">
                    Joined: {new Date(member.joined_at).toLocaleDateString()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="row gap-3">
          {teamStatus.max_team_size > 1 ? (
            <>
              <div className="card p-4 shadow-lg">
                <h3>Join Existing Team</h3>
                <input
                  type="text"
                  className="form-control mt-3"
                  value={teamCode}
                  onChange={(e) => setTeamCode(e.target.value.toUpperCase())}
                  placeholder="Enter 5-digit Team Code"
                  maxLength="5"
                />
                <button 
                  className="btn btn-dark w-100 mt-3"
                  onClick={handleJoinTeam}
                  disabled={teamCode.length !== 5}
                >
                  Join Team
                </button>
              </div>

              <div className="card p-4 shadow-lg">
                <h3>Create New Team</h3>
                <input
                  type="text"
                  className="form-control mt-3"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="Enter Team Name"
                />
                <button 
                  className="btn btn-secondary w-100 mt-3"
                  onClick={handleCreateTeam}
                  disabled={!teamName.trim()}
                >
                  Create Team
                </button>
              </div>
            </>
          ) : (
            <div className="alert alert-info">
              This event doesn't require team registration
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Teams;