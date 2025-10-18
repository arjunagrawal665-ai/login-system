import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, logout } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('/api/auth/me');
        setProfileData(response.data.user);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setError('Failed to load profile data');
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return (
      <div className="page-container">
        <div className="loading">
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 className="page-title">Profile</h1>
      
      <div className="page-content">
        <div className="user-info">
          <h3>User Profile</h3>
          <p>This page displays your personal information and account details.</p>
        </div>

        {error && (
          <div className="alert alert-error">
            {error}
          </div>
        )}

        {profileData && (
          <div className="user-info">
            <h3>Account Information</h3>
            <p><strong>Name:</strong> {profileData.name}</p>
            <p><strong>Email:</strong> {profileData.email}</p>
            <p><strong>User ID:</strong> {profileData._id}</p>
            <p><strong>Member Since:</strong> {new Date(profileData.createdAt).toLocaleDateString()}</p>
            <p><strong>Last Updated:</strong> {new Date(profileData.updatedAt).toLocaleDateString()}</p>
          </div>
        )}

        <div style={{ marginTop: '40px' }}>
          <h3>Profile Features</h3>
          <ul style={{ marginTop: '15px', paddingLeft: '20px' }}>
            <li>Secure user data retrieval</li>
            <li>Account creation and update timestamps</li>
            <li>Protected profile information</li>
            <li>Real-time authentication status</li>
          </ul>
        </div>

        <div style={{ marginTop: '30px', padding: '20px', background: '#f8d7da', borderRadius: '6px' }}>
          <h4>Account Actions</h4>
          <p style={{ marginTop: '10px', color: '#721c24' }}>
            Need to sign out? Click the logout button below.
          </p>
          <div style={{ marginTop: '15px' }}>
            <button 
              onClick={logout} 
              className="navbar-button"
              style={{ background: '#dc3545' }}
            >
              Logout
            </button>
          </div>
        </div>

        <div style={{ marginTop: '20px', padding: '20px', background: '#e9ecef', borderRadius: '6px' }}>
          <h4>Navigation</h4>
          <div style={{ marginTop: '15px' }}>
            <a href="/dashboard" className="navbar-button" style={{ marginRight: '10px' }}>
              Back to Dashboard
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

export default Profile;


