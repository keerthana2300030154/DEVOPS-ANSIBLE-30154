import React from "react";
import { useNavigate } from "react-router-dom";

export default function DoctorDashboard() {
  const navigate = useNavigate();

  // Get doctor info saved after login
  const doctor = JSON.parse(localStorage.getItem("doctor")) || {};
  const doctorName = doctor.name ? `Dr. ${doctor.name}` : "Doctor";

  // Sidebar button style
  const sidebarBtnStyle = (isActive) => ({
    backgroundColor: isActive ? "#1a73e8" : "#ffffff",
    color: isActive ? "#ffffff" : "#1a73e8",
    border: "none",
    padding: "18px 20px",
    fontWeight: "600",
    fontSize: "1.05rem",
    borderRadius: "12px",
    marginBottom: "15px",
    cursor: "pointer",
    boxShadow: isActive ? "0 3px 8px rgba(26,115,232,0.4)" : "none",
    transition: "background-color 0.3s ease, color 0.3s ease",
  });

  const logoutBtnStyle = {
    backgroundColor: "#eb4d4b",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    fontWeight: "600",
    fontSize: "1.05rem",
    borderRadius: "12px",
    marginTop: "30px",
    cursor: "pointer",
    width: "100%",
    boxShadow: "0 3px 8px rgba(235,77,75,0.2)"
  };

  const mainBtnStyle = {
    padding: "14px 38px",
    backgroundColor: "#1a73e8",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontWeight: "600",
    fontSize: "1.1rem",
    marginRight: "20px",
    cursor: "pointer",
    boxShadow: "0 4px 16px rgba(26,115,232,0.3)",
    transition: "background-color 0.3s",
  };

  const handleLogout = () => {
    localStorage.removeItem("doctor");
    navigate("/doctor/login");
  };

  const renderDashboard = () => (
    <div>
      <h2 style={{ marginBottom: "18px" }}>Doctor Dashboard</h2>
      <div>
        <button style={mainBtnStyle} onClick={() => navigate("/doctor/my-patients")}>
          My Patients
        </button>
        <button style={mainBtnStyle} onClick={() => navigate("/doctor/profile")}>
          Profile
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "270px",
          backgroundColor: "#eef3fa",
          padding: "40px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "center",
        }}
      >
        <h2 style={{ marginBottom: "32px", color: "#244170" }}>
          Welcome, {doctorName}
        </h2>
        <button style={sidebarBtnStyle(false)} onClick={() => navigate("/doctor/dashboard")}>
          Dashboard
        </button>
        <button style={sidebarBtnStyle(false)} onClick={() => navigate("/doctor/my-patients")}>
          My Patients
        </button>
        <button style={sidebarBtnStyle(false)} onClick={() => navigate("/doctor/profile")}>
          Profile
        </button>
        <button style={logoutBtnStyle} onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "40px 60px" }}>{renderDashboard()}</div>
    </div>
  );
}
