import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { doctorAxios, DOCTOR_API } from "../../security/config";

export default function DoctorLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await doctorAxios.post(DOCTOR_API.LOGIN, formData);
      alert("Login Successful");
      // optionally save doctor info in localStorage for session
      localStorage.setItem("doctor", JSON.stringify(res.data));
      navigate("/doctor/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
      alert("Invalid email or password!");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
      <Card style={{ width: "500px", maxWidth: "90%", padding: "30px", boxShadow: "0 0 15px rgba(0,0,0,0.2)" }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Doctor Login</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">Login</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
