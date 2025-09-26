// src/pages/patient/PatientDashboard.jsx
import React, { useContext, useState } from "react";
import { PatientContext } from "../../context/PatientContext";
import Profile from "./Profile";
import Appointments from "./Appointments";
import AppointmentHistory from "./AppointmentHistory";
import { useNavigate } from "react-router-dom";

const PatientDashboard = () => {
  const { patient, setPatient } = useContext(PatientContext);
  const [tab, setTab] = useState("dashboard");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("patient");  // clear patient data
    setPatient(null);                    // clear context
    navigate("/patient/login");          // redirect
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <div style={{ width: "240px", background: "#eef2fa", padding: "30px 15px" }}>
        <h3>Welcome, {patient?.name || "Patient"}</h3>
        <div style={{ marginTop: "40px" }}>
          <button style={styles.tabBtn} onClick={() => setTab("dashboard")}>Dashboard</button>
          <button style={styles.tabBtn} onClick={() => setTab("book")}>Book Appointment</button>
          <button style={styles.tabBtn} onClick={() => setTab("history")}>Appointment History</button>
          {/* 🔴 Logout Button */}
          <button style={{ ...styles.tabBtn, background: "#d9534f" }} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "50px" }}>
        {tab === "dashboard" && (
          <div>
            <button style={styles.actionBtn} onClick={() => setTab("profile")}>Profile</button>
            <button style={styles.actionBtn} onClick={() => setTab("book")}>Book Appointment</button>
            <button style={styles.actionBtn} onClick={() => setTab("history")}>My Appointments</button>
          </div>
        )}
        {tab === "profile" && <Profile />}
        {tab === "book" && <Appointments />}
        {tab === "history" && <AppointmentHistory />}
      </div>
    </div>
  );
};

const styles = {
  tabBtn: {
    display: "block",
    padding: "12px 20px",
    width: "100%",
    marginBottom: "12px",
    background: "#4765a9",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px"
  },
  actionBtn: {
    marginRight: "16px",
    padding: "10px 22px",
    background: "#3a8cff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px"
  }
};

export default PatientDashboard;
