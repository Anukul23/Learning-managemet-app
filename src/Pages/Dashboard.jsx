import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userData'));
    if (user && user.username) {
      setUsername(user.username);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome, {username} 👋</h1>
        <p>Your personalized dashboard overview</p>
      </header>

      <section className="dashboard-grid">
        <div className="dashboard-card">
          <h3>📚 Your Learning</h3>
          <p>View your active courses and progress.</p>
          <button onClick={() => navigate('/personalizedlearning')}>View Learning</button>
        </div>
        <div className="dashboard-card">
          <h3>💼 Corporate Training</h3>
          <p>Explore programs tailored for your organization.</p>
          <button onClick={() => navigate('/corporatetraning')}>Explore Training</button>
        </div>
        <div className="dashboard-card">
          <h3>🚀 Upskill Programs</h3>
          <p>Advance your career with the latest tech skills.</p>
          <button onClick={() => navigate('/upskill')}>Start Upskilling</button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
