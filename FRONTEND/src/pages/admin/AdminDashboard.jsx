import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminProfile from "./AdminProfile";
import ApproveAppointments from "./ApproveAppointments";
import ManageUsers from "./ManageUsers";

export default function AdminDashboard() {
  const [tab, setTab] = useState("dashboard");
  const navigate = useNavigate();

  // Safely parse admin from localStorage
  const admin = JSON.parse(localStorage.getItem("admin")) || {};
  const adminName = admin.name || "Admin";

  const btn = {
    display: "block",
    width: "100%",
    margin: "15px 0",
    padding: 12,
    borderRadius: 6,
    border: "none",
    background: "#4477cc",
    color: "#fff",
    cursor: "pointer",
    fontSize: 16,
  };

  const btn2 = {
    marginRight: 18,
    padding: "10px 22px",
    background: "#4a90e2",
    borderRadius: 7,
    border: "none",
    color: "#fff",
    cursor: "pointer",
    fontSize: 15,
  };

  const handleLogout = () => {
    localStorage.removeItem("admin"); // Clear admin session
    navigate("/admin/login");         // Redirect to login
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <div style={{ width: 240, background: "#eef2fa", padding: 30 }}>
        <h3>Welcome, {adminName}</h3>
        <button style={btn} onClick={() => setTab("dashboard")}>
          Dashboard
        </button>
        <button style={btn} onClick={() => setTab("approve")}>
          Approve Appointments
        </button>
        <button style={btn} onClick={() => setTab("manage")}>
          Manage
        </button>
        <button style={btn} onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: 32 }}>
        {tab === "dashboard" && (
          <div>
            <button style={btn2} onClick={() => setTab("profile")}>
              Profile
            </button>
            <button style={btn2} onClick={() => setTab("approve")}>
              Approve
            </button>
            <button style={btn2} onClick={() => setTab("manage")}>
              Manage
            </button>
          </div>
        )}

        {tab === "profile" && <AdminProfile />}
        {tab === "approve" && <ApproveAppointments />}
        {tab === "manage" && <ManageUsers />}
      </div>
    </div>
  );
}
