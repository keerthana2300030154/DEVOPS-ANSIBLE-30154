// src/pages/doctor/ManageRecords.jsx
import { useEffect, useState } from "react";
import { doctorAxios } from "../../security/config";
import Card from "../../components/Card";
import Button from "../../components/Button";

export default function ManageRecords() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    doctorAxios.get("/records").then(res => setRecords(res.data));
  }, []);

  const handleEdit = (record) => {
    const newDetails = prompt("Update record details:", record.details);
    if (newDetails) {
      doctorAxios.put(`/records/${record.id}`, { details: newDetails })
        .then(() => {
          alert("Record updated");
          setRecords(records.map(r => r.id === record.id ? { ...r, details: newDetails } : r));
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <Card title="Manage Health Records">
      {records.map(r => (
        <div key={r.id} className="d-flex justify-content-between align-items-center mb-2">
          <span>{r.patientName} - {r.details}</span>
          <Button onClick={() => handleEdit(r)}>Edit</Button>
        </div>
      ))}
    </Card>
  );
}
