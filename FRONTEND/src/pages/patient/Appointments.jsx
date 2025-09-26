// src/pages/patient/Appointments.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAppointment } from "../../stores/patientSlice";

const Appointments = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    problem: "",
    date: "",
    specialization: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.problem || !form.date || !form.specialization) {
      alert("Please fill all fields");
      return;
    }

    dispatch(addAppointment(form));
    alert("Appointment booked successfully!");

    setForm({ problem: "", date: "", specialization: "" }); // reset after submission
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Book Appointment</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Problem Domain:</label>
        <input
          type="text"
          name="problem"
          value={form.problem}
          onChange={handleChange}
          style={styles.input}
          required
          placeholder="Enter your problem"
        />

        <label style={styles.label}>Date:</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Specialization:</label>
        <select
          name="specialization"
          value={form.specialization}
          onChange={handleChange}
          style={styles.input}
          required
        >
          <option value="">Select specialization</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Dermatology">Dermatology</option>
          <option value="Orthopedics">Orthopedics</option>
          {/* Add more as needed */}
        </select>

        <button type="submit" style={styles.button}>
          Book Appointment
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "450px",
    margin: "auto",
    background: "rgba(255,255,255,0.95)",
    padding: "25px 30px",
    borderRadius: "15px",
    boxShadow: "0 6px 15px rgba(73, 78, 83, 0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "22px",
    fontSize: "2rem",
    color: "#253858",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "6px",
    fontWeight: "600",
    fontSize: "1.1rem",
    color: "#444",
  },
  input: {
    fontSize: "1.1rem",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "7px",
    border: "1.5px solid #d0d5db",
    outline: "none",
  },
  button: {
    padding: "12px",
    fontSize: "1.2rem",
    borderRadius: "10px",
    backgroundColor: "#3a8cff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default Appointments;
