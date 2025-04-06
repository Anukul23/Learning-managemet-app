import React from 'react'
import "./Corporatetraning.css"
const Corporatetraning = () => {
  const trainingPrograms = [
    {
      title: 'Full Stack Web Development',
      description: 'Hands-on training in React, Node.js, Express, MongoDB, and modern DevOps tools.',
    },
    {
      title: 'Cloud Computing & DevOps',
      description: 'AWS, Azure, Docker, Kubernetes, Jenkins, and CI/CD pipelines for scalable systems.',
    },
    {
      title: 'Data Science & AI',
      description: 'Training on Python, Machine Learning, Deep Learning, and real-world data analytics.',
    },
    {
      title: 'Cybersecurity Essentials',
      description: 'Network security, ethical hacking, penetration testing, and risk assessment.',
    },
  ];

  return (
    <div className="training-container">
      <section className="hero-section">
        <h1>Corporate IT Training Solutions</h1>
        <p>Upskill your workforce with cutting-edge IT programs delivered by industry experts.</p>
      </section>

      <section className="programs-section">
        <h2>Our Training Programs</h2>
        <div className="programs-list">
          {trainingPrograms.map((program, index) => (
            <div key={index} className="program-card">
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Train Your Team?</h2>
        <p>Contact us to design a custom program that fits your company’s needs.</p>
        <button className="contact-btn">Get In Touch</button>
      </section>
    </div>
  );
};


export default Corporatetraning;
