import React from "react";

const About = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f3f4f6", padding: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ maxWidth: "600px", backgroundColor: "#ffffff", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px", padding: "24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#1d4ed8", marginBottom: "16px" }}>About Us</h2>
        <p style={{ color: "#4b5563", marginBottom: "24px" }}>
          Welcome to <strong>Student Helper App</strong>, your go-to platform for academic and career growth. We are dedicated to connecting students with experienced mentors and providing essential resources to support your success.
        </p>
        <h3 style={{ fontSize: "20px", fontWeight: "600", color: "#1d4ed8", marginBottom: "12px" }}>Our Services</h3>
        <ul style={{ color: "#374151", textAlign: "left", listStyleType: "disc", paddingLeft: "20px" }}>
          <li style={{ marginBottom: "8px" }}><strong>One-to-One Chatting</strong> – Get personalized guidance from experts.</li>
          <li style={{ marginBottom: "8px" }}><strong>Resume Review</strong> – Improve your resume for job applications.</li>
          <li style={{ marginBottom: "8px" }}><strong>Zoom Call Booking</strong> – Schedule a session with professionals.</li>
          <li style={{ marginBottom: "8px" }}><strong>Mentor Guidance</strong> – Connect and learn from experienced mentors.</li>
          <li style={{ marginBottom: "8px" }}><strong>Expand Your Network</strong> – Build valuable connections for your future.</li>
        </ul>
        
      </div>
    </div>
  );
};

export default About;
