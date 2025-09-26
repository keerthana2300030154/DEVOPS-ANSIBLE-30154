import React, { useState } from "react";

const initialDoctors = [
  { id: 1, name: "Dr. Arun", specialization: "Cardiology", email: "arun@hospital.com" }
];

export default function DoctorsList() {
  const [doctors, setDoctors] = useState(initialDoctors);
  const [form, setForm] = useState({ name: "", specialization: "", email: "" });
  const [editId, setEditId] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = () => {
    setDoctors([...doctors, { ...form, id: Date.now() }]);
    setForm({ name: "", specialization: "", email: "" });
  };

  const handleEdit = (doc) => {
    setEditId(doc.id);
    setForm(doc);
  };

  const handleUpdate = () => {
    setDoctors(doctors.map(d => d.id === editId ? { ...form, id: editId } : d));
    setEditId(null);
    setForm({ name: "", specialization: "", email: "" });
  };

  const handleDelete = (id) => setDoctors(doctors.filter(d => d.id !== id));

  return (
    <div style={styles.outer}>
      <h2 style={styles.heading}>Doctors List</h2>
      <form
        style={styles.addForm}
        onSubmit={e => {
          e.preventDefault();
          editId ? handleUpdate() : handleAdd();
        }}
      >
        <input
          style={styles.input}
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          style={styles.input}
          name="specialization"
          value={form.specialization}
          onChange={handleChange}
          placeholder="Specialization"
          required
        />
        <input
          style={styles.input}
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <button type="submit" style={editId ? styles.updateBtn : styles.addBtn}>
          {editId ? "Update" : "Add Doctor"}
        </button>
        {editId && (
          <button
            type="button"
            style={styles.cancelBtn}
            onClick={() => {
              setEditId(null);
              setForm({ name: "", specialization: "", email: "" });
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <div style={styles.scrollTable}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Specialization</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map(doc => (
              <tr key={doc.id}>
                <td>{doc.name}</td>
                <td>{doc.specialization}</td>
                <td>{doc.email}</td>
                <td>
                  <button style={styles.editBtn} onClick={() => handleEdit(doc)}>Edit</button>
                  <button style={styles.deleteBtn} onClick={() => handleDelete(doc.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  outer: {
    margin: "0 auto",
    paddingTop: 30,
    maxWidth: 800
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "2rem",
    color: "#27477d"
  },
  addForm: {
    display: "flex",
    gap: 16,
    alignItems: "center",
    marginBottom: 28,
    flexWrap: "wrap",
    paddingBottom: 14
  },
  input: {
    fontSize: "1rem",
    padding: "10px 14px",
    borderRadius: "7px",
    border: "1.5px solid #b5bbd1",
    outline: "none",
    minWidth: 125,
    background: "#f8fbff"
  },
  addBtn: {
    background: "#2e8cff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "10px 20px",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: "1rem"
  },
  updateBtn: {
    background: "#fec107",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "10px 20px",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: "1rem"
  },
  cancelBtn: {
    background: "#999",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "10px 20px",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: "1rem"
  },
  scrollTable: {
    overflowX: "auto"
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    background: "#fff",
    borderRadius: "11px",
    boxShadow: "0 0 11px rgba(60,110,180,0.09)",
    fontSize: "1.08rem"
  },
  editBtn: {
    background: "#ffd94b",
    color: "#27477d",
    border: "none",
    marginRight: 8,
    borderRadius: "5px",
    padding: "8px 16px",
    fontWeight: 600,
    cursor: "pointer"
  },
  deleteBtn: {
    background: "#e7475a",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "8px 16px",
    fontWeight: 600,
    cursor: "pointer"
  }
};
