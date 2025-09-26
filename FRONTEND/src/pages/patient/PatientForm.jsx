import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import Card from "../../components/Card";
import Button from "../../components/Button";

export default function PatientForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/patients", form).then(() => navigate("/patients"));
  };

  return (
    <Card title="Add Patient">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <Button type="submit">Save</Button>
      </form>
    </Card>
  );
}
