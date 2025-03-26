import React from 'react';
import './policy.css';

const Policy = () => {
  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundImage: "url('../../assets/skyyy.gif')", 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      textAlign: "center", 
      padding: "20px", 
      color: "#ffffff", 
      fontWeight: "bold", 
      fontSize: "24px", 
      backdropFilter: "blur(4px)"
    }}>
      <div style={{ 
        backgroundColor: "#2C3E50", 
        padding: "30px", 
        borderRadius: "8px", 
        maxWidth: "600px", 
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
      }}>
        <h1 style={{ color: "#1d4ed8", marginBottom: "16px" }}>Our Policy</h1>
        <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#f3f4f6" }}>
          Welcome to our platform. We are committed to protecting your privacy and ensuring 
          a secure and trustworthy experience for all users. Please read our policies carefully.
        </p>
      </div>
    </div>
  );
};

export default Policy;
