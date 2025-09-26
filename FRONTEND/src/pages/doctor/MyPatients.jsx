import React, { useState } from "react";

export default function MyPatients() {
  const [patients, setPatients] = useState([
    { id: 1, name: "John Doe", problem: "Diabetes", uploads: [] },
    { id: 2, name: "Jane Smith", problem: "Hypertension", uploads: [] },
    { id: 3, name: "Alice Johnson", problem: "Asthma", uploads: [] },
  ]);

  const handleFileUpload = (patientId, event) => {
    const file = event.target.files[0];
    if (!file) return;
    setPatients(prev =>
      prev.map(p =>
        p.id === patientId
          ? { ...p, uploads: [...(p.uploads || []), { id: Date.now(), fileName: file.name, file }] }
          : p
      )
    );
  };

  return (
    <div style={{ padding: "40px 60px", backgroundColor: "#f0f4f8", minHeight: "100vh" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "22px", color: "#153d6a", letterSpacing: "2px" }}>
        My Patients
      </h2>

      {patients.length === 0 ? (
        <div style={{ fontSize: "1.2rem", color: "#888", textAlign: "center", marginTop: "40px" }}>
          Not assigned any patients.
        </div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
          {patients.map((p) => (
            <div
              key={p.id}
              style={{
                flex: "1 1 300px",
                backgroundColor: "#ffffff",  // Card background color
                border: "1px solid #ddd",
                borderRadius: 8,
                padding: 20,
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 style={{ margin: "0 0 10px" }}>{p.name}</h3>
              <p><b>Problem:</b> {p.problem}</p>
              <div>
                <b>Uploads:</b>
                {p.uploads.length > 0 ? (
                  <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                    {p.uploads.map((upload) => (
                      <li key={upload.id} style={{ margin: "6px 0" }}>
                        <a
                          href={URL.createObjectURL(upload.file)}
                          download={upload.fileName}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#004aad", fontWeight: "bold" }}
                        >
                          {upload.fileName}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ color: "#888" }}>No files</p>
                )}
              </div>
              <div style={{ marginTop: 10 }}>
                <input type="file" onChange={(e) => handleFileUpload(p.id, e)} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
