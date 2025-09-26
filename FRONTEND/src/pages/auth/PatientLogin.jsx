import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { patientAxios, PATIENT_API } from "../../security/config";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function PatientLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await patientAxios.post(PATIENT_API.LOGIN, formData);
      alert(res.data);
      if (res.data.includes("Login Successful")) navigate("/patient/dashboard");
    } catch (err) {
      console.error("Login failed:", err.response?.data || err);
      alert("Invalid email or password!");
    }
  };

  return (
    <Card style={{ width: "400px", margin: "auto", padding: "20px" }}>
      <Card.Body>
        <Card.Title>Patient Login</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" value={formData.email} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
          </Form.Group>
          <Button type="submit" className="w-100">Login</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
