import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { doctorAxios } from "../../security/config";

export default function UploadPrescription({ doctorId, patient, onClose }) {
  const [date, setDate] = useState("");
  const [file, setFile] = useState(null);
  const [type, setType] = useState("PRESCRIPTION"); // or LABREPORT

  const submit = async (e) => {
    e.preventDefault();
    if (!file || !date) return alert("Select date and file");

    const fd = new FormData();
    fd.append("doctorId", doctorId);
    fd.append("patientId", patient.id);
    fd.append("date", date);
    fd.append("file", file);

    const url = type === "PRESCRIPTION" ? "/upload/prescription" : "/upload/labreport";
    try {
      await doctorAxios.post(url, fd, { headers: { "Content-Type": "multipart/form-data" } });
      alert("Uploaded");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton><Modal.Title>Upload for {patient.name}</Modal.Title></Modal.Header>
      <Modal.Body>
        <Form onSubmit={submit}>
          <Form.Group className="mb-2">
            <Form.Label>Type</Form.Label>
            <Form.Select value={type} onChange={e => setType(e.target.value)}>
              <option value="PRESCRIPTION">Prescription</option>
              <option value="LABREPORT">Lab report</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" value={date} onChange={e => setDate(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>File</Form.Label>
            <Form.Control type="file" onChange={e => setFile(e.target.files[0])} required />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="secondary" onClick={onClose} className="me-2">Cancel</Button>
            <Button type="submit">Upload</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
