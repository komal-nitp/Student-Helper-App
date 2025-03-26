import React from 'react';
import AllEmployee from './AllEmployee';
import { useAuth } from '../../context/AuthContext';
import { Link, NavLink } from 'react-router-dom';
import './Admin.css';

const AdminPage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <div className='container-fluid' style={{ minHeight: "100vh", display: "flex", backgroundColor: "#f4f6f9" }}>
      {/* Sidebar */}
      <div className='col-md-3 p-4' style={{ backgroundColor: "#2c3e50", color: "#ffffff", minHeight: "100vh" }}>
        <h3 className='text-center'>Admin Panel</h3>
        {auth?.user?.role === 1 && (
          <NavLink to='/dashboard/create-employee' style={{ display: "block", color: "#ffffff", textDecoration: "none", padding: "10px", marginTop: "10px", borderRadius: "5px", backgroundColor: "#34495e" }}>
            Create Employee
          </NavLink>
        )}
        <div style={{ marginTop: "20px" }}>
          <AllEmployee />
        </div>
      </div>
      {/* Main Content */}
      <div className='col-md-9 d-flex align-items-center justify-content-center'>
        <div className='card shadow p-4' style={{ width: "500px", borderRadius: "10px", backgroundColor: "#ffffff" }}>
          <h3 style={{ borderBottom: "2px solid #3498db", paddingBottom: "10px", color: "#2c3e50" }}>Admin Details</h3>
          <p><strong>Name:</strong> {auth?.user?.name.toUpperCase()}</p>
          <p><strong>Email:</strong> {auth?.user?.email}</p>
          <p><strong>Phone:</strong> {auth?.user?.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
