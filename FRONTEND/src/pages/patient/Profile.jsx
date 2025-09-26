// src/pages/patient/Profile.jsx
import React, { useContext, useState } from "react";
import { PatientContext } from "../../context/PatientContext";

const Profile = () => {
  const { patient, setPatient } = useContext(PatientContext);
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({ ...patient });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleEdit = () => setIsEditing(true);

  const handleSave = (e) => {
    e.preventDefault();
    setPatient(form);
    setIsEditing(false);
  };

  if (!isEditing) {
    // View Mode
    return (
      <div style={styles.outer}>
        <div style={styles.profileBox}>
          <h2 style={{ fontSize: "2.4rem", marginBottom: "2rem" }}>Profile</h2>
          <div style={styles.viewLine}><b>Name:</b> <span style={styles.value}>{patient.name}</span></div>
          <div style={styles.viewLine}><b>Gender:</b> <span style={styles.value}>{patient.gender}</span></div>
          <div style={styles.viewLine}><b>Email:</b> <span style={styles.value}>{patient.email}</span></div>
          <div style={styles.viewLine}><b>Age:</b> <span style={styles.value}>{patient.age}</span></div>
          <div style={styles.viewLine}><b>Address:</b> <span style={styles.value}>{patient.address}</span></div>
          <button 
            onClick={handleEdit} 
            style={styles.editBtn}
          >Edit</button>
        </div>
      </div>
    );
  }

  // Edit Mode
  return (
    <div style={styles.outer}>
      <form onSubmit={handleSave} style={styles.profileBox}>
        <h2 style={{ fontSize: "2.4rem", marginBottom: "2rem" }}>Profile</h2>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input style={styles.input} name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Gender:</label>
          <select style={styles.input} name="gender" value={form.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input style={styles.input} name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Age:</label>
          <input style={styles.input} name="age" type="number" min="0" value={form.age} onChange={handleChange} required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Address:</label>
          <textarea style={{...styles.input, height: "80px"}} name="address" value={form.address} onChange={handleChange} required />
        </div>
        <button 
          type="submit"
          style={styles.editBtn}
        >Save</button>
      </form>
    </div>
  );
};

const styles = {
  outer: {
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  profileBox: {
    width: "100%",
    maxWidth: "600px",
    margin: "auto",
    background: "rgba(255,255,255,0.97)",
    borderRadius: "20px",
    padding: "48px 40px",
    boxShadow: "0 0 24px rgba(100,110,140,0.11)",
    fontSize: "1.3rem",
  },
  viewLine: {
    marginBottom: "2rem",
    fontSize: "1.35rem",
    display: "flex",
    alignItems: "center",
  },
  value: {
    marginLeft: "1.4rem",
    color: "#333",
    fontWeight: 400,
    letterSpacing: "0.02em",
    wordBreak: "break-word"
  },
  formGroup: {
    marginBottom: "2.1rem",
    display: "flex",
    flexDirection: "column"
  },
  label: {
    marginBottom: "0.7rem",
    fontWeight: 600,
    fontSize: "1.12rem"
  },
  input: {
    fontSize: "1.13rem",
    lineHeight: 1.5,
    padding: "0.8rem 1rem",
    borderRadius: "7px",
    border: "1px solid #b5bbd1"
  },
  editBtn: {
    background: "#ffa500",
    color: "#fff",
    border: "none",
    borderRadius: "7px",
    padding: "14px 42px",
    marginTop: "15px",
    fontSize: "1.18rem",
    fontWeight: 600,
    cursor: "pointer"
  }
};

export default Profile;
