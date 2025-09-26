package com.klef.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "records")
public class Record {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // the patient this record belongs to
    @ManyToOne
    @JoinColumn(name = "patient_id")
    private Patient patient;

    // the doctor who created/owns this record
    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;

    @Column(columnDefinition = "TEXT")
    private String details;

    private LocalDateTime createdAt;

    public Record() {
        this.createdAt = LocalDateTime.now();
    }

    // Getters / Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Patient getPatient() { return patient; }
    public void setPatient(Patient patient) { this.patient = patient; }

    public Doctor getDoctor() { return doctor; }
    public void setDoctor(Doctor doctor) { this.doctor = doctor; }

    public String getDetails() { return details; }
    public void setDetails(String details) { this.details = details; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
