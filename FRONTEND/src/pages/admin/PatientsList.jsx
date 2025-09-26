import React, { useState } from "react";
import PatientModal from "./PatientModal";

const initialPatients = [
  { id: 1, name: "John Doe", problem: "Fever", profile: { gender: "Male", email: "john@email.com", age: 40, address: "Hyderabad" }, prescription: "Paracetamol", labReport: "CBC" }
];

export default function PatientsList() {
  const [patients] = useState(initialPatients);
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <div>
      <h3>Patients List</h3>
      <table style={{ marginTop: 18, width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: '#004aad', color: 'white' }}>
            <th style={{ padding: '10px' }}>Name</th>
            <th>Problem</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Address</th>
            <th>Prescription</th>
            <th>Lab Report</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(p => (
            <tr key={p.id} style={{ borderBottom: '1px solid #ccc', textAlign: 'center' }}>
              <td style={{ padding: '10px' }}>{p.name}</td>
              <td>{p.problem}</td>
              <td>{p.profile.age}</td>
              <td>{p.profile.gender}</td>
              <td>{p.profile.email}</td>
              <td>{p.profile.address}</td>
              <td>{p.prescription}</td>
              <td>{p.labReport}</td>
              <td>
                <button 
                  style={{ backgroundColor: '#004aad', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '4px' }}
                  onClick={() => setSelectedPatient(p)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedPatient && (
        <PatientModal
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}
    </div>
  );
}
