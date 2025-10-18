import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="page-container">
      <h1 className="page-title">Welcome to Auth System</h1>
      
      <div className="page-content">
        <p>
          This is a complete authentication system built with React and Node.js.
          It includes user registration, login, and protected routes.
        </p>

        {isAuthenticated() ? (
          <div className="user-info">
            <h3>Welcome back, {user?.name}!</h3>
            <p>You are currently logged in.</p>
            <div style={{ marginTop: '20px' }}>
              <Link to="/dashboard" className="navbar-button" style={{ marginRight: '10px' }}>
                Go to Dashboard
              </Link>
              <Link to="/profile" className="navbar-button">
                View Profile
              </Link>
            </div>
          </div>
        ) : (
          <div className="user-info">
            <h3>Get Started</h3>
            <p>Please sign up or login to access protected features.</p>
            <div style={{ marginTop: '20px' }}>
              <Link to="/signup" className="navbar-button" style={{ marginRight: '10px' }}>
                Sign Up
              </Link>
              <Link to="/login" className="navbar-button">
                Login
              </Link>
            </div>
          </div>
        )}

        <div style={{ marginTop: '40px' }}>
          <h3>Features</h3>
          <ul style={{ marginTop: '15px', paddingLeft: '20px' }}>
            <li>User registration with email validation</li>
            <li>Secure login with JWT tokens</li>
            <li>Protected routes that require authentication</li>
            <li>Password hashing with bcrypt</li>
            <li>Responsive design</li>
            <li>Real-time authentication state management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;


