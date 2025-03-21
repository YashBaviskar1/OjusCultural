import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Form, Button, Card, Container } from "react-bootstrap";
import { APIURL } from "../url.config";

const Login = () => {
  const [moodleId, setMoodleId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      const response = await fetch(`${APIURL}/api/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          moodle_id: moodleId,
          password: password,
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        const redirectPath = location.state?.from || "/";
        navigate(redirectPath);
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="animated-bg">
        <div className="gradient-circle circle1"></div>
        <div className="gradient-circle circle2"></div>
        <div className="gradient-circle circle3"></div>
      </div>
      
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card className="p-4 glass-card shadow-lg">
          <Card.Body>
            <div className="text-center mb-4">
              <h2 className="text-white fw-bold mb-1">Welcome Back</h2>
              <p className="text-light mb-4">Sign in to continue your journey</p>
            </div>
            
            {error && <div className="alert alert-danger text-center">{error}</div>}
            
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-4">
                <Form.Label className="text-white small fw-bold">MOODLE ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Moodle ID"
                  value={moodleId}
                  onChange={(e) => setMoodleId(e.target.value)}
                  required
                  className="glass-input py-2"
                />
              </Form.Group>
              
              <Form.Group className="mb-4">
          <Form.Label className="text-white small fw-bold">PASSWORD</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="glass-input py-2"
          />
          <Form.Text className="text-light small">
            Password: firstname@moodleid
          </Form.Text>
        </Form.Group>
              
              <Button 
                variant="primary" 
                type="submit" 
                className="w-100 py-2 mt-3 login-btn"
              >
                Sign In
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
      <style>{`

        html, body {
          height: 100%;
          margin: 0;
          padding: 0;
        }

        .login-page {
          background: url("https://i.pinimg.com/1200x/0d/15/eb/0d15ebece691ca06a43463b4626e2f2c.jpg") no-repeat center fixed;
          background-size: cover;
          min-height: 100vh;
          width: 100%;
          position: relative;
          overflow: hidden;
        }
        
        /* Animated background */
        .animated-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .gradient-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.6;
          animation: float 15s infinite ease-in-out;
        }
        
        .circle1 {
          width: 600px;
          height: 600px;
          {/* background: radial-gradient(circle, rgba(70, 131, 180, 0.8), rgba(70, 131, 180, 0)); */}
          top: -200px;
          left: -100px;
          animation-delay: 0s;
        }
        
        .circle2 {
          width: 500px;
          height: 500px;
          {/* background: radial-gradient(circle, rgba(147, 112, 219, 0.8), rgba(147, 112, 219, 0)); */}
          bottom: -150px;
          right: -50px;
          animation-delay: -5s;
        }
        
        .circle3 {
          width: 400px;
          height: 400px;
          {/* background: radial-gradient(circle, rgba(0, 191, 255, 0.8), rgba(0, 191, 255, 0)); */}
          top: 50%;
          left: 60%;
          animation-delay: -10s;
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(50px, -30px) scale(1.05); }
          50% { transform: translate(0, 50px) scale(0.95); }
          75% { transform: translate(-50px, -20px) scale(1.1); }
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
          max-width: 420px;
          width: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .glass-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }
        
        .glass-input {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          padding: 12px 15px;
          transition: all 0.3s ease;
        }
        
        .glass-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        
        .glass-input:focus {
          background: rgba(255, 255, 255, 0.25);
          box-shadow: 0 0 15px rgba(131, 185, 255, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }
        
        .login-btn {
          background: linear-gradient(45deg, #4F74E3, #6D5BFA);
          border: none;
          border-radius: 12px;
          font-weight: bold;
          font-size: 1rem;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 15px rgba(79, 116, 227, 0.5);
          transition: all 0.3s ease;
        }
        
        .login-btn:hover {
          background: linear-gradient(45deg, #5F84F3, #7D6BFF);
          box-shadow: 0 6px 20px rgba(79, 116, 227, 0.7);
          transform: translateY(-2px);
        }
        
        a {
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        a:hover {
          color: #6D5BFA !important;
        }
      `}</style>
    </div>
  );
};

export default Login;
