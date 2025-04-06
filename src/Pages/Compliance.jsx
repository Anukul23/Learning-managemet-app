import React from 'react';
import './Compliance.css';

const Compliance = () => {
  const policies = [
    {
      title: 'Data Privacy & GDPR',
      description: 'Understand how we collect, use, and protect user data in line with GDPR.',
    },
    {
      title: 'Cybersecurity Awareness',
      description: 'Best practices and responsibilities to keep systems and data secure.',
    },
    {
      title: 'Code of Conduct',
      description: 'Standards for ethical behavior, harassment prevention, and professional conduct.',
    },
    {
      title: 'IT Industry Regulations',
      description: 'Overview of compliance with IT and software industry laws and frameworks.',
    },
  ];

  return (
    <div className="compliance-container">
      <header className="compliance-header">
        <h1>📋 Compliance Center</h1>
        <p>Stay informed. Stay compliant. Stay protected.</p>
      </header>

      <section className="policy-section">
        <h2>Mandatory Compliance Modules</h2>
        <div className="policy-cards">
          {policies.map((policy, index) => (
            <div key={index} className="policy-card">
              <h3>{policy.title}</h3>
              <p>{policy.description}</p>
              <button className="view-policy-btn">View Module</button>
            </div>
          ))}
        </div>
      </section>

      <section className="reminder-section">
        <h2>🔒 Why Compliance Matters</h2>
        <ul>
          <li>✅ Protects user and company data</li>
          <li>✅ Ensures ethical business practices</li>
          <li>✅ Builds customer trust and legal safety</li>
          <li>✅ Prevents costly violations and penalties</li>
        </ul>
      </section>
    </div>
  );
};

export default Compliance;
