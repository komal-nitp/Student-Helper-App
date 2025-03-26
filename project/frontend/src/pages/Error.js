import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh", 
      backgroundColor: "#f8f9fa", 
      textAlign: "center", 
      flexDirection: "column" 
    }}>
      <h1 style={{ fontSize: "100px", fontWeight: "bold", color: "#dc3545", marginBottom: "10px" }}>404</h1>
      <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#343a40", marginBottom: "20px" }}>Oops! Page Not Found</h2>
      <p style={{ fontSize: "16px", color: "#6c757d", marginBottom: "20px" }}>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <Link to="/home" style={{ 
        padding: "10px 20px", 
        backgroundColor: "#007bff", 
        color: "#ffffff", 
        textDecoration: "none", 
        borderRadius: "5px", 
        fontSize: "16px", 
        fontWeight: "bold" 
      }}>
        Go Back to Home
      </Link>
    </div>
  );
};

export default Error;
