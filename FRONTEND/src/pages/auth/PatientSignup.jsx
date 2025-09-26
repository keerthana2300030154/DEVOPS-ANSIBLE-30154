import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { patientAxios, PATIENT_API } from "../../security/config";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function PatientSignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await patientAxios.post(PATIENT_API.SIGNUP, formData);
      alert("Signup successful! Please login.");
      navigate("/patient/login");
    } catch (err) {
      console.error("Signup failed:", err.response?.data || err);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <Card style={{ width: "400px", margin: "auto", padding: "20px" }}>
      <Card.Body>
        <Card.Title>Patient Signup</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" value={formData.name} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
          </Form.Group>
          <Button type="submit" className="w-100">Sign Up</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
