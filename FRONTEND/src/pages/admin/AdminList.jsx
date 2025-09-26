import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api";
import Card from "../../components/Card";
import Button from "../../components/Button";

export default function AdminList() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    api.get("/admins").then(res => setAdmins(res.data));
  }, []);

  return (
    <Card title="Admins">
      <div className="d-flex justify-content-between mb-3 align-items-center">
        <h5>Admins List</h5>
        <Link to="/admin/new">
          <Button>+ Add Admin</Button>
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
          {admins.map(a => (
            <tr key={a.id}>
              <td>{a.firstName} {a.lastName}</td>
              <td>{a.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
