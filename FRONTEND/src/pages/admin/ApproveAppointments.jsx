import React, { useState } from "react";

const initialAppointments = [
  {
    id: 1,
    patient: "Sonu",
    problem: "Fever",
    date: "2025-09-24",
    specialization: "General",
    status: "pending"
  }
  // Add more appointments if desired
];

export default function ApproveAppointments() {
  const [appointments, setAppointments] = useState(initialAppointments);

  const handleApprove = (id) => {
    setAppointments(appointments.map(app =>
      app.id === id ? { ...app, status: "approved" } : app
    ));
  };

  return (
    <div>
      <h3>Approve Appointments</h3>
      <table style={{ marginTop: 18, width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: '#004aad', color: 'white' }}>
            <th style={{ padding: '10px' }}>Patient</th>
            <th>Problem</th>
            <th>Date</th>
            <th>Specialization</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(app => (
            <tr key={app.id} style={{ borderBottom: '1px solid #ccc', textAlign: 'center' }}>
              <td style={{ padding: '10px' }}>{app.patient}</td>
              <td>{app.problem}</td>
              <td>{app.date}</td>
              <td>{app.specialization}</td>
              <td>
                <span style={{
                  color: app.status === "approved" ? "green" : "orange",
                  fontWeight: "bold"
                }}>
                  {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                </span>
              </td>
              <td>
                {app.status === "pending" && (
                  <button
                    style={{ backgroundColor: '#004aad', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '4px' }}
                    onClick={() => handleApprove(app.id)}
                  >
                    Approve
                  </button>
                )}
                {app.status === "approved" && (
                  <span style={{ color: "green", fontWeight: "bold" }}>Approved</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
