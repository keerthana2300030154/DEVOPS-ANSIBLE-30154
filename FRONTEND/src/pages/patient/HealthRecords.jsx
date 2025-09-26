import { useEffect, useState } from "react";
import { patientAxios } from "../../security/config";
import Card from "../../components/Card";

export default function HealthRecords() {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    patientAxios.get("/records").then(res => setRecords(res.data));
  }, []);

  return (
    <Card title="My Health Records">
      <table className="table table-bordered table-hover">
        <thead><tr><th>Date</th><th>Doctor</th><th>Details</th></tr></thead>
        <tbody>
          {records.map(r => (
            <tr key={r.id}><td>{r.date}</td><td>{r.doctorName}</td><td>{r.details}</td></tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
