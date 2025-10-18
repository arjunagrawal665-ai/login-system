import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const [protectedData, setProtectedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axios.get('/api/protected');
        setProtectedData(response.data);
      } catch (error) {
        console.error('Error fetching protected data:', error);
        setError('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchProtectedData();
  }, []);

  if (loading) {
    return (
      <div className="page-container">
        <div className="loading">
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 className="page-title">Dashboard</h1>
      
      <div className="page-content">
        <div className="user-info">
          <h3>Welcome to your Dashboard, {user?.name}!</h3>
          <p>This is a protected page that only authenticated users can access.</p>
        </div>

        {error && (
          <div className="alert alert-error">
            {error}
          </div>
        )}

        {protectedData && (
          <div className="user-info">
            <h3>Protected Route Data</h3>
            <p><strong>Message:</strong> {protectedData.message}</p>
            <p><strong>Timestamp:</strong> {new Date(protectedData.timestamp).toLocaleString()}</p>
            <p><strong>User ID:</strong> {protectedData.user._id}</p>
            <p><strong>User Email:</strong> {protectedData.user.email}</p>
          </div>
        )}

        <div style={{ marginTop: '40px' }}>
          <h3>Dashboard Features</h3>
          <ul style={{ marginTop: '15px', paddingLeft: '20px' }}>
            <li>Real-time authentication status</li>
            <li>Protected API endpoint integration</li>
            <li>User information display</li>
            <li>Secure data fetching with JWT tokens</li>
          </ul>
        </div>

        <div style={{ marginTop: '30px', padding: '20px', background: '#e9ecef', borderRadius: '6px' }}>
          <h4>Quick Actions</h4>
          <div style={{ marginTop: '15px' }}>
            <a href="/profile" className="navbar-button" style={{ marginRight: '10px' }}>
              View Profile
            </a>
            <a href="/" className="navbar-button">
              Go Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


