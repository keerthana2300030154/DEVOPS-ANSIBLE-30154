// src/pages/admin/PatientModal.jsx
import React from "react";

export default function PatientModal({ patient, onClose }) {
  // Use whichever file is uploaded by doctor (lab report or prescription)
  const fileUrl = patient.labReportFile || patient.prescriptionFile;
  const fileLabel = patient.labReportFile ? "Lab Report" : patient.prescriptionFile ? "Prescription" : null;

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        <h2 style={styles.header}>{patient.name}</h2>
        <div style={styles.row}><span style={styles.label}>Gender:</span> {patient.profile.gender}</div>
        <div style={styles.row}><span style={styles.label}>Email:</span> {patient.profile.email}</div>
        <div style={styles.row}><span style={styles.label}>Age:</span> {patient.profile.age}</div>
        <div style={styles.row}><span style={styles.label}>Address:</span> {patient.profile.address}</div>
        <div style={styles.row}><span style={styles.label}>Problem:</span> {patient.problem}</div>
        <div style={styles.row}><span style={styles.label}>Prescription:</span> {patient.prescription}</div>
        <div style={styles.row}><span style={styles.label}>Lab Report:</span> {patient.labReport}</div>
        {fileUrl && (
          <div style={styles.downloadLine}>
            <a
              href={fileUrl}
              download={`${fileLabel || "file"}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.downloadBtn}
            >
              Download {fileLabel}
            </a>
          </div>
        )}
        <button style={styles.closeBtn} onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
    background: "rgba(0,0,0,0.30)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000
  },
  card: {
    background: "#fff",
    borderRadius: "19px",
    minWidth: "340px",
    maxWidth: "420px",
    width: "95vw",
    boxShadow: "0 0 40px rgba(0,0,0,0.16)",
    padding: "38px 32px 28px 32px",
    display: "flex",
    flexDirection: "column"
  },
  header: {
    fontSize: "2rem",
    fontWeight: 700,
    marginBottom: 24,
    textAlign: "center"
  },
  row: {
    fontSize: "1.13rem",
    marginBottom: 11,
    display: "flex",
    alignItems: "baseline"
  },
  label: {
    color: "#3761c1",
    fontWeight: 600,
    minWidth: "120px",
    display: "inline-block"
  },
  downloadLine: {
    margin: "16px 0",
    textAlign: "center"
  },
  downloadBtn: {
    background: "#27a2ff",
    color: "#fff",
    textDecoration: "none",
    padding: "10px 24px",
    borderRadius: "7px",
    fontWeight: 600,
    fontSize: "1.07rem",
    display: "inline-block"
  },
  closeBtn: {
    marginTop: 26,
    background: "#e57027",
    color: "#fff",
    border: "none",
    borderRadius: "7px",
    padding: "12px 40px",
    fontSize: "1.06rem",
    fontWeight: 600,
    alignSelf: "center",
    cursor: "pointer"
  }
};
