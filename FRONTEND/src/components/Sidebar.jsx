// src/components/Sidebar.jsx

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const links = [
    { to: "/", label: "Dashboard" },
    { to: "/patients", label: "Patients" },
    { to: "/doctors", label: "Doctors" },
    { to: "/admin", label: "Admin" },
  ];

  return (
    <div
      className="bg-primary text-white vh-100 p-3"
      style={{ minWidth: "220px" }}
    >
      <h2 className="mb-4">🏥 HRS</h2>
      <nav className="nav flex-column">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              `nav-link text-white ${
                isActive ? "bg-white text-primary rounded" : "custom-hover"
              }`
            }
            style={{ padding: "10px", transition: "0.3s" }}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
