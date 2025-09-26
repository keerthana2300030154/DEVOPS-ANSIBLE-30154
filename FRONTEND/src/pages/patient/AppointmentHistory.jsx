// src/pages/patient/AppointmentHistory.jsx
import React from "react";
import { useSelector } from "react-redux";

const AppointmentHistory = () => {
  const appointments = useSelector((state) => state.patient.appointments);

  return (
    <div style={styles.outer}>
      <h2 style={styles.heading}>Appointment History</h2>
      {appointments.length === 0 ? (
        <p style={{ fontSize: "1.3rem" }}>No appointments yet.</p>
      ) : (
        <div style={styles.cardList}>
          {appointments.map((apt, i) => (
            <div key={i} style={styles.card}>
              <div style={styles.field}>
                <span style={styles.label}>Problem:</span>
                <span style={styles.value}>{apt.problem}</span>
              </div>
              <div style={styles.field}>
                <span style={styles.label}>Date:</span>
                <span style={styles.value}>{apt.date}</span>
              </div>
              <div style={styles.field}>
                <span style={styles.label}>Specialization:</span>
                <span style={styles.value}>{apt.specialization}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  outer: {
    maxWidth: "900px",
    margin: "auto",
    padding: "36px 0",
  },
  heading: {
    fontSize: "2.2rem",
    marginBottom: "2.3rem",
    color: "#2d3a5b",
    fontWeight: 700,
  },
  cardList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
  },
  card: {
    minWidth: "270px",
    background: "rgba(256,256,256,0.97)",
    borderRadius: "16px",
    boxShadow: "0 0 15px rgba(100,110,140,0.11)",
    padding: "30px 28px",
    marginBottom: "18px",
    fontSize: "1.22rem",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  field: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  label: {
    fontWeight: 700,
    color: "#3761c1",
    minWidth: "120px",
    fontSize: "1.08rem",
  },
  value: {
    color: "#333",
    fontWeight: 400,
    fontSize: "1.12rem",
    wordBreak: "break-word",
  },
};

export default AppointmentHistory;
