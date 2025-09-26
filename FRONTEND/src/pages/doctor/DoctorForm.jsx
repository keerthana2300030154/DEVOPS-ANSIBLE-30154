import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import Card from "../../components/Card";
import Button from "../../components/Button";

export default function DoctorForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", specialization: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/doctors", form).then(() => navigate("/doctors"));
  };

  return (
    <Card title="Add Doctor">
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
          <label className="form-label">Specialization</label>
          <input
            name="specialization"
            value={form.specialization}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <Button type="submit">Save</Button>
      </form>
    </Card>
  );
}
