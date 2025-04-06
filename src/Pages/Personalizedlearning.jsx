import React from 'react'
import { useState ,useEffect } from 'react';
import "./Personalized.css"

const Personalizedlearning = () => {
    const [username, setUsername] = useState('');
    const [learningPaths, setLearningPaths] = useState([]);
  
    // Simulate user-specific recommendations
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('userData'));
      if (user && user.username) {
        setUsername(user.username);
        setLearningPaths([
          {
            title: 'React Developer Path',
            progress: 60,
            description: 'Build dynamic web apps with React, hooks, and state management.',
          },
          {
            title: 'Backend with Node.js',
            progress: 30,
            description: 'Learn Express.js, REST APIs, authentication, and MongoDB integration.',
          },
          {
            title: 'Cloud & DevOps Starter',
            progress: 10,
            description: 'Get started with AWS, Docker, CI/CD, and modern deployment pipelines.',
          },
        ]);
      }
    }, []);
  
    return (
      <div className="personalized-container">
        <section className="header">
          <h1>Welcome back, {username} 👋</h1>
          <p>Your personalized learning dashboard is here.</p>
        </section>
  
        <section className="learning-section">
          <h2>Your Learning Paths</h2>
          <div className="learning-cards">
            {learningPaths.map((path, index) => (
              <div key={index} className="learning-card">
                <h3>{path.title}</h3>
                <p>{path.description}</p>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${path.progress}%` }}
                  ></div>
                </div>
                <p className="progress-text">{path.progress}% complete</p>
              </div>
            ))}
          </div>
        </section>
  
        <section className="cta">
          <h2>Want to add more skills?</h2>
          <button className="explore-btn">Explore More Courses</button>
        </section>
      </div>
    );
}

export default Personalizedlearning
