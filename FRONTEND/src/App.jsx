// src/App.jsx
import { Routes, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import FrontPage from "./pages/FrontPage";
import AboutPage from "./pages/AboutPage";

// Patient
import PatientLogin from "./pages/auth/PatientLogin";
import PatientSignup from "./pages/auth/PatientSignup";
import PatientDashboard from "./pages/patient/PatientDashboard";
import HealthRecords from "./pages/patient/HealthRecords";
import Downloads from "./pages/patient/Downloads";
import Profile from "./pages/patient/Profile";
import Appointments from "./pages/patient/Appointments";

// Doctor
import DoctorLogin from "./pages/auth/DoctorLogin";
import DoctorSignup from "./pages/auth/DoctorSignup";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import MyPatients from "./pages/doctor/MyPatients";
import ManageRecords from "./pages/doctor/ManageRecords";
import Messages from "./pages/doctor/Messages";
import DoctorProfile from "./pages/doctor/DoctorProfile";


// Admin
import AdminLogin from "./pages/auth/AdminLogin";
import AdminSignup from "./pages/auth/AdminSignup";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import ApproveAppointments from "./pages/admin/ApproveAppointments";  // Correct file
import ViewRecords from "./pages/admin/ViewRecords";
import SystemSettings from "./pages/admin/SystemSettings";

import bgImage from "./assets/image.jpg";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navbar */}
      <Navbar
        expand="lg"
        sticky="top"
        style={{ backgroundColor: "rgba(0, 123, 255, 0.8)" }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Health Record System
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">
                <b>Home</b>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                <b>About Us</b>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/patient/signup">
                <b>Patient Signup</b>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/doctor/signup">
                <b>Doctor Signup</b>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/admin/signup">
                <b>Admin Signup</b>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container
        fluid
        style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "20px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <Routes>
            {/* General Pages */}
            <Route path="/" element={<FrontPage />} />
            <Route path="/about" element={<AboutPage />} />

            {/* Patient */}
            <Route path="/patient/login" element={<PatientLogin />} />
            <Route path="/patient/signup" element={<PatientSignup />} />
            <Route path="/patient/dashboard" element={<PatientDashboard />} />
            <Route path="/patient/health-records" element={<HealthRecords />} />
            <Route path="/patient/downloads" element={<Downloads />} />
            <Route path="/patient/profile" element={<Profile />} />
            <Route path="/patient/appointments" element={<Appointments />} />

            {/* Doctor */}
<Route path="/doctor/login" element={<DoctorLogin />} />
<Route path="/doctor/signup" element={<DoctorSignup />} />
<Route path="/doctor/dashboard" element={<DoctorDashboard />} />
<Route path="/doctor/my-patients" element={<MyPatients />} />
<Route path="/doctor/manage-records" element={<ManageRecords />} />
<Route path="/doctor/messages" element={<Messages />} />
<Route path="/doctor/profile" element={<DoctorProfile />} />

            {/* Admin */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/signup" element={<AdminSignup />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/manage-users" element={<ManageUsers />} />
            <Route path="/admin/approve-appointments" element={<ApproveAppointments />} />
            <Route path="/admin/view-records" element={<ViewRecords />} />
            <Route path="/admin/system-settings" element={<SystemSettings />} />

            {/* 404 */}
            <Route path="*" element={<h2 className="text-center mt-5">404: Page Not Found</h2>} />
          </Routes>
        </div>
      </Container>
    </div>
  );
}
