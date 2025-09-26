package com.klef.service;

import com.klef.entity.Patient;
import com.klef.repo.PatientRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // ===========================
    // ✅ Register Patient (Signup)
    // ===========================
    @Override
    public Patient registerPatient(Patient patient) {
        // Encode password before saving
        patient.setPassword(passwordEncoder.encode(patient.getPassword()));
        return patientRepository.save(patient);
    }

    // ===========================
    // ✅ Login Patient
    // ===========================
    @Override
    public Patient loginPatient(String email, String rawPassword) {
        // Find patient by email
        Patient patient = patientRepository.findByEmail(email);

        // Check if patient exists and password matches
        if (patient != null && passwordEncoder.matches(rawPassword, patient.getPassword())) {
            return patient;
        }
        return null; // login failed
    }

    // ===========================
    // ✅ Get all patients
    // ===========================
    @Override
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    // ===========================
    // ✅ Get patient by ID
    // ===========================
    @Override
    public Optional<Patient> getPatientById(Long id) {
        return patientRepository.findById(id);
    }

    // ===========================
    // ✅ Update patient
    // ===========================
    @Override
    public void updatePatient(Long id, Patient updatedPatient) {
        Patient existingPatient = patientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Patient not found with id: " + id));

        existingPatient.setName(updatedPatient.getName());
        existingPatient.setEmail(updatedPatient.getEmail());

        // Only update password if provided
        if (updatedPatient.getPassword() != null && !updatedPatient.getPassword().isEmpty()) {
            existingPatient.setPassword(passwordEncoder.encode(updatedPatient.getPassword()));
        }

        patientRepository.save(existingPatient);
    }

    // ===========================
    // ✅ Delete patient
    // ===========================
    @Override
    public void deletePatient(Long id) {
        Patient existingPatient = patientRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Patient not found with id: " + id));
        patientRepository.delete(existingPatient);
    }
}