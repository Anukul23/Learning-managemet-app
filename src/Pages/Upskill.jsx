import React from 'react'
import "./Upskill.css"

const Upskill = () => {
    const skillTracks = [
        {
          title: 'Frontend Development',
          description: 'Master HTML, CSS, JavaScript, React, and responsive design to build modern UIs.',
        },
        {
          title: 'Backend Development',
          description: 'Learn Node.js, Express, REST APIs, and database management with MongoDB & SQL.',
        },
        {
          title: 'Cloud & DevOps',
          description: 'Explore AWS, Docker, Kubernetes, CI/CD pipelines, and infrastructure automation.',
        },
        {
          title: 'Data Analytics & AI',
          description: 'Get hands-on with Python, Pandas, machine learning, and AI applications.',
        },
      ];
    
      return (
        <div className="upskill-container">
          <section className="upskill-hero">
            <h1>Upskill for the Future of Tech</h1>
            <p>Stay relevant, advance your career, and lead innovation in the IT industry.</p>
          </section>
    
          <section className="skills-section">
            <h2>Skill Tracks You Can Explore</h2>
            <div className="skills-grid">
              {skillTracks.map((skill, index) => (
                <div key={index} className="skill-card">
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </div>
              ))}
            </div>
          </section>
    
          <section className="benefits-section">
            <h2>Why Upskill with Us?</h2>
            <ul>
              <li>📈 Career advancement and better job opportunities</li>
              <li>💼 Industry-aligned curriculum with real-world projects</li>
              <li>🎓 Certification and portfolio building</li>
              <li>🧠 Learn at your own pace, anywhere, anytime</li>
            </ul>
          </section>
    
          <section className="cta-section">
            <h2>Ready to Level Up?</h2>
            <p>Join thousands of IT professionals growing with us.</p>
            <button className="start-learning-btn">Start Learning</button>
          </section>
        </div>
      );
    };


export default Upskill
