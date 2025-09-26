import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { patientAxios } from "../../security/config";

export default function Downloads() {
  const [records, setRecords] = useState([]);
  const patientId = localStorage.getItem("patientId");

  useEffect(() => {
    if (!patientId) return;
    patientAxios.get(`/records/${patientId}`)
      .then(res => setRecords(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container style={{ padding: 20 }}>
      <h3>My Prescriptions & Lab Reports</h3>
      {records.length === 0 ? <p>No records yet.</p> : (
        <Table striped bordered hover>
          <thead>
            <tr><th>Type</th><th>Date</th><th>Uploaded By</th><th>File</th></tr>
          </thead>
          <tbody>
            {records.map(r => (
              <tr key={r.id}>
                <td>{r.type}</td>
                <td>{r.dateString}</td>
                <td>{r.doctor ? r.doctor.name : r.doctorId}</td>
                <td>
                  <a href={`http://localhost:4000/${r.filePath}`} target="_blank" rel="noreferrer">Download</a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
