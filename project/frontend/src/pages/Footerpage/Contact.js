import React from 'react';

const Contact = () => {
  return (
    <div style={{ display: "flex", minHeight: "70vh", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#f3f4f6", padding: "20px" }}>
      <div style={{ backgroundColor: "#ffffff", padding: "30px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
        <h1 style={{ color: "#1d4ed8", marginBottom: "16px" }}>Meet Our Team</h1>
        <p style={{ color: "#4b5563", marginBottom: "24px" }}>We are dedicated to providing the best support and guidance.</p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "12px" }}>
            <strong>1. Komal Kumari</strong> - <a href="https://www.linkedin.com/in/komal-kumari-79234a258" target="_blank" style={{ color: "#1d4ed8", textDecoration: "none" }}>LinkedIn</a>
          </li>
          <li style={{ marginBottom: "12px" }}>
            <strong>2. Abhishek Kumar</strong> - <a href="https://www.linkedin.com/in/abhishekk7352" target="_blank" style={{ color: "#1d4ed8", textDecoration: "none" }}>LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
