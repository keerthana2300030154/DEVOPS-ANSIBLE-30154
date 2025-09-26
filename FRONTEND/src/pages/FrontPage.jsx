import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function FrontPage() {
  const navigate = useNavigate();

  // Button base style
  const buttonStyle = {
    backgroundColor: "#7ec8e3", // light blue
    color: "#fff",
    fontWeight: 500,
    border: "none",
    borderRadius: "8px",
    padding: "12px 0",
    transition: "all 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#5ab0d7", // slightly darker on hover
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  };

  const [hovered, setHovered] = React.useState(null);
  const handleMouseEnter = (name) => setHovered(name);
  const handleMouseLeave = () => setHovered(null);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Card
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)", // semi-transparent
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
          textAlign: "center",
          maxWidth: "500px",
          width: "90%",
        }}
      >
        <Card.Body>
          <Card.Title style={{ fontSize: "2rem", marginBottom: "20px" }}>
            🏥 HealthCare Portal
          </Card.Title>
          <Card.Text style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
            Welcome! Please choose your role to continue
          </Card.Text>

          <div className="d-grid gap-3">
            <Button
              size="lg"
              style={{
                ...buttonStyle,
                ...(hovered === "patient" ? buttonHoverStyle : {}),
              }}
              onMouseEnter={() => handleMouseEnter("patient")}
              onMouseLeave={handleMouseLeave}
              onClick={() => navigate("/patient/login")}
            >
              Patient
            </Button>

            <Button
              size="lg"
              style={{
                ...buttonStyle,
                ...(hovered === "doctor" ? buttonHoverStyle : {}),
              }}
              onMouseEnter={() => handleMouseEnter("doctor")}
              onMouseLeave={handleMouseLeave}
              onClick={() => navigate("/doctor/login")}
            >
              Doctor
            </Button>

            <Button
              size="lg"
              style={{
                ...buttonStyle,
                ...(hovered === "admin" ? buttonHoverStyle : {}),
              }}
              onMouseEnter={() => handleMouseEnter("admin")}
              onMouseLeave={handleMouseLeave}
              onClick={() => navigate("/admin/login")}
            >
              Admin
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
