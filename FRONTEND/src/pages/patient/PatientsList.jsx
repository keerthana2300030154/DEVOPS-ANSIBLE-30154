import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../../security"
import Card from "../../components/Card";
import Button from "../../components/Button";

export default function PatientsList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    api.get("/patients").then(res => setPatients(res.data));
  }, []);

  return (
    <Card title="Patients">
      <div className="d-flex justify-content-between mb-3 align-items-center">
        <h5>Patients List</h5>
        <Link to="/patients/new">
          <Button>+ Add Patient</Button>
        </Link>
      </div>
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(p => (
            <tr key={p.id}>
              <td>{p.firstName} {p.lastName}</td>
              <td>{p.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
