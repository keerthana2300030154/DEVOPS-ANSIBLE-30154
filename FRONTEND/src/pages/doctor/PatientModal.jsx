import React, { useState } from "react";
import axios from "axios";

export default function PatientModal({ doctorId, patient, onClose }) {
  const [form, setForm] = useState(
    patient || { name: "", email: "", contactNumber: "" }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const request = patient
      ? axios.put(`/api/doctor/auth/patients/${patient.id}`, form)
      : axios.post(`/api/doctor/auth/patients?doctorId=${doctorId}`, form);

    request
      .then(() => onClose())
      .catch((err) => alert("Error saving patient: " + err.message));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-xl w-96">
        <h2 className="text-lg font-bold mb-4">
          {patient ? "Edit Patient" : "Add Patient"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Contact Number"
            className="w-full p-2 border rounded"
            value={form.contactNumber}
            onChange={(e) =>
              setForm({ ...form, contactNumber: e.target.value })
            }
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
