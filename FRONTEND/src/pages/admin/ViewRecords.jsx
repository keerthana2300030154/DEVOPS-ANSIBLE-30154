import { useEffect, useState } from "react";
import { adminAxios } from "../../security/config";
import Card from "../../components/Card";

export default function ViewRecords() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    adminAxios.get("/records").then(res => setRecords(res.data));
  }, []);

  return (
    <Card title="All Health Records">
      <table className="table table-bordered table-hover">
        <thead><tr><th>Patient</th><th>Doctor</th><th>Details</th></tr></thead>
        <tbody>
          {records.map(r => (
            <tr key={r.id}>
              <td>{r.patientName}</td>
              <td>{r.doctorName}</td>
              <td>{r.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
