import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { doctorAxios } from "../../security/config";

export default function MessageModal({ doctorId, patient, onClose }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const fetch = async () => {
    try {
      const res = await doctorAxios.get(`/messages?doctorId=${doctorId}&patientId=${patient.id}`);
      setMessages(res.data);
    } catch (err) {
      console.error(err);
      setMessages([]);
    }
  };

  useEffect(() => {
    fetch();
    // optionally poll every N seconds for new messages
    const id = setInterval(fetch, 5000);
    return () => clearInterval(id);
  }, []);

  const send = async () => {
    if (!text.trim()) return;
    try {
      await doctorAxios.post(`/messages?doctorId=${doctorId}&patientId=${patient.id}&text=${encodeURIComponent(text)}`);
      setText("");
      fetch();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Modal show onHide={onClose} size="lg">
      <Modal.Header closeButton><Modal.Title>Chat with {patient.name}</Modal.Title></Modal.Header>
      <Modal.Body style={{ maxHeight: "60vh", overflowY: "auto" }}>
        {messages.map(m => (
          <div key={m.id} style={{ marginBottom: 8, textAlign: m.sender === "DOCTOR" ? "right" : "left" }}>
            <div style={{ display: "inline-block", padding: "8px 12px", borderRadius: 12, background: m.sender === "DOCTOR" ? "#cfe9d8" : "#eee" }}>
              <div style={{ fontSize: 14 }}>{m.content}</div>
              <div style={{ fontSize: 11, color: "#666" }}>{new Date(m.sentAt).toLocaleString()}</div>
            </div>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Form.Control type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Type a message..." />
        <Button onClick={send}>Send</Button>
      </Modal.Footer>
    </Modal>
  );
}
