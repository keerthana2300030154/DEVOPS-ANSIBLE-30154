import React, { useState } from "react";

const doctors = [
  { id: 1, name: "Dr. Arun", specialization: "Cardiology", email: "arun@hospital.com" }
];

export default function DoctorsList() {
  const [searchName, setSearchName] = useState("");
  const [searchSpecialization, setSearchSpecialization] = useState("");
  const [searchEmail, setSearchEmail] = useState("");

  // Optionally filter doctors using search fields
  const filteredDoctors = doctors.filter(
    doc =>
      doc.name.toLowerCase().includes(searchName.toLowerCase()) &&
      doc.specialization.toLowerCase().includes(searchSpecialization.toLowerCase()) &&
      doc.email.toLowerCase().includes(searchEmail.toLowerCase())
  );

  return (
    <div style={{ marginTop: "40px" }}>
      <h2 style={{
        fontSize: "2rem",
        color: "#244170",
        fontWeight: "bold",
        marginBottom: "24px",
        letterSpacing: "2px"
      }}>
        Doctors List
      </h2>
      <div style={{
        display: "flex",
        gap: "18px",
        marginBottom: "28px"
      }}>
        <input
          type="text"
          placeholder="Name"
          value={searchName}
          onChange={e => setSearchName(e.target.value)}
          style={{
            padding: "14px",
            borderRadius: "8px",
            border: "1px solid #224aad",
            width: "220px",
            fontSize: "1rem"
          }}
        />
        <input
          type="text"
          placeholder="Specialization"
          value={searchSpecialization}
          onChange={e => setSearchSpecialization(e.target.value)}
          style={{
            padding: "14px",
            borderRadius: "8px",
            border: "1px solid #224aad",
            width: "220px",
            fontSize: "1rem"
          }}
        />
        <input
          type="text"
          placeholder="Email"
          value={searchEmail}
          onChange={e => setSearchEmail(e.target.value)}
          style={{
            padding: "14px",
            borderRadius: "8px",
            border: "1px solid #224aad",
            width: "220px",
            fontSize: "1rem"
          }}
        />
        <button
          style={{
            padding: "14px 34px",
            backgroundColor: "#2779fa",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "1rem"
          }}
        >
          Add Doctor
        </button>
      </div>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        background: "#fff",
        borderRadius: "18px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.07)"
      }}>
        <thead>
          <tr style={{ background: "#004aad", color: "#fff" }}>
            <th style={{ padding: "18px", fontSize: "1.05rem" }}>Name</th>
            <th style={{ padding: "18px", fontSize: "1.05rem" }}>Specialization</th>
            <th style={{ padding: "18px", fontSize: "1.05rem" }}>Email</th>
            <th style={{ padding: "18px", fontSize: "1.05rem" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredDoctors.map(doc => (
            <tr key={doc.id} style={{
              background: "#f6fafd",
              borderBottom: "1px solid #e9f0fb",
              textAlign: "center"
            }}>
              <td style={{ padding: "18px" }}>{doc.name}</td>
              <td style={{ padding: "18px" }}>{doc.specialization}</td>
              <td style={{ padding: "18px" }}>{doc.email}</td>
              <td style={{ padding: "18px" }}>
                <button
                  style={{
                    background: "#fcdc4d",
                    color: "#244170",
                    border: "none",
                    borderRadius: "6px",
                    padding: "8px 18px",
                    fontWeight: "600",
                    marginRight: "8px",
                    width: "62px"
                  }}
                >
                  Edit
                </button>
                <button
                  style={{
                    background: "#f95757",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "8px 18px",
                    fontWeight: "600",
                    width: "74px"
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
