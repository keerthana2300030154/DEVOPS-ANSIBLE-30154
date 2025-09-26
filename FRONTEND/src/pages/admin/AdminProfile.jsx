import React, { useState, useEffect } from "react";
import { adminAxios } from "../../security/config";

export default function AdminProfile() {
  const adminData = JSON.parse(localStorage.getItem("admin")) || {};

  const [profile, setProfile] = useState({
    id: "",
    name: "",
    email: "",
    gender: "",
    age: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
    gender: "",
    age: "",
  });

  useEffect(() => {
    console.log("Admin data from localStorage:", adminData);

    if (adminData && adminData.id) {
      setProfile(adminData);
      setForm({
        id: adminData.id || "",
        name: adminData.name || "",
        email: adminData.email || "",
        gender: adminData.gender || "",
        age: adminData.age || "",
      });
    }
  }, []);

  const handleEdit = () => setIsEditing(true);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = async (e) => {
    e.preventDefault();

    if (!form.id) {
      alert("Admin ID missing. Cannot update profile.");
      return;
    }

    // const token = localStorage.getItem("token");
    // if (!token) {
    //   alert("You are not logged in.");
    //   return;
    // }

    try {
      const res = await adminAxios.put(`/${form.id}`, form);

      setProfile(res.data);
      setForm({
        id: res.data.id || "",
        name: res.data.name || "",
        email: res.data.email || "",
        gender: res.data.gender || "",
        age: res.data.age || "",
      });

      localStorage.setItem("admin", JSON.stringify(res.data));

      setIsEditing(false);
      alert("Profile updated successfully.");
    } catch (err) {
      console.error("Update error:", err.response || err);
      alert("Failed to update profile.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: 30,
          borderRadius: 10,
          boxShadow: "0 0 15px rgba(0,0,0,.1)",
          width: 400,
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>
          Admin Profile
        </h2>

        {!isEditing ? (
          <>
            <div>
              <strong>Name:</strong> {profile.name || "-"}
            </div>
            <div>
              <strong>Email:</strong> {profile.email || "-"}
            </div>
            <div>
              <strong>Gender:</strong> {profile.gender || "-"}
            </div>
            <div>
              <strong>Age:</strong> {profile.age || "-"}
            </div>
            <button onClick={handleEdit} style={{ marginTop: 20 }}>
              Edit
            </button>
          </>
        ) : (
          <form
            onSubmit={handleSave}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label>Name</label>
            <input
              name="name"
              value={form.name || ""}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email || ""}
              onChange={handleChange}
              required
            />

            <label>Gender</label>
            <select
              name="gender"
              value={form.gender || ""}
              onChange={handleChange}
              required
            >
              <option value="">Select...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <label>Age</label>
            <input
              type="number"
              name="age"
              value={form.age || ""}
              onChange={handleChange}
              required
            />

            <button type="submit" style={{ marginTop: 20 }}>
              Save
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
