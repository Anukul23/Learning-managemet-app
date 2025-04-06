import React from 'react';
import Ragister from './Ragister';
import './Home.css';
import { FaGraduationCap } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title"> 
          <FaGraduationCap className="hat-icon" /> Welcome to the Learning Management System
          </h1>
        <p className="home-description">
          Upgrade your skills with our certification programs. Register now to get started!
        </p>
      </div>

      <div className="home-register-section">
        <Ragister />
      </div>
    </div>
  );
};

export default Home;
