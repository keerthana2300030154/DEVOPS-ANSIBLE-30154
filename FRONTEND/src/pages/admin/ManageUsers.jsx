import React, { useState } from "react";
import DoctorsList from "./DoctorsList";
import PatientsList from "./PatientsList";

export default function ManageUsers() {
  const [section, setSection] = useState("doctor");
  return (
    <div>
      <div style={styles.switchBox}>
        <button
          style={{
            ...styles.switchBtn,
            ...(section === "doctor" ? styles.switchBtnActive : {}),
            borderRadius: "8px 0 0 8px"
          }}
          onClick={() => setSection("doctor")}
        >
          Doctor
        </button>
        <button
          style={{
            ...styles.switchBtn,
            ...(section === "patient" ? styles.switchBtnActive : {}),
            borderRadius: "0 8px 8px 0"
          }}
          onClick={() => setSection("patient")}
        >
          Patient
        </button>
      </div>
      <div style={{ marginTop: 35 }}>
        {section === "doctor" ? <DoctorsList /> : <PatientsList />}
      </div>
    </div>
  );
}

const styles = {
  switchBox: {
    display: "inline-flex",
    background: "#eef3fb",
    borderRadius: "8px",
    boxShadow: "0 2px 8px #4688e921",
    margin: "18px 0 34px 0",
    padding: "3px"
  },
  switchBtn: {
    background: "transparent",
    padding: "10px 38px",
    border: "none",
    fontWeight: 600,
    fontSize: "1.13rem",
    color: "#325cb1",
    cursor: "pointer",
    transition: "background .13s, color .13s"
  },
  switchBtnActive: {
    background: "#326aea",
    color: "#fff",
    boxShadow: "0 4px 14px #90b5ff44"
  }
};
