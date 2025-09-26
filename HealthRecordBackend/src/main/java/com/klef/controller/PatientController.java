package com.klef.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.klef.entity.Patient;
import com.klef.service.PatientService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/patient")
@CrossOrigin(origins = "*")
public class PatientController {

    @Autowired
    private PatientService patientService;

    // ✅ Signup (Create)
    @PostMapping("/signup")
    public Patient signup(@RequestBody Patient patient) {
        return patientService.registerPatient(patient);
    }

    // ✅ Login
    @PostMapping("/login")
    public String login(@RequestBody Patient patient) {
        Patient existing = patientService.loginPatient(patient.getEmail(), patient.getPassword());
        if (existing != null) {
            return "Login Successful! Welcome " + existing.getName();
        } else {
            return "Invalid email or password!";
        }
    }

    // ✅ Get All Patients
    @GetMapping("/all")
    public List<Patient> getAllPatients() {
        return patientService.getAllPatients();
    }

    // ✅ Get Patient by ID
    @GetMapping("/{id}")
    public Optional<Patient> getPatientById(@PathVariable Long id) {
        return patientService.getPatientById(id);
    }

    // ✅ Update Patient by ID
    @PutMapping("/update/{id}")
    public String updatePatient(@PathVariable Long id, @RequestBody Patient updatedPatient) {
        try {
            patientService.updatePatient(id, updatedPatient);
            return "Patient updated successfully!";
        } catch (RuntimeException e) {
            return "Update Failed: " + e.getMessage();
        }
    }

    // ✅ Delete Patient by ID
    @DeleteMapping("/delete/{id}")
    public String deletePatient(@PathVariable Long id) {
        try {
            patientService.deletePatient(id);
            return "Patient deleted successfully!";
        } catch (RuntimeException e) {
            return "Delete Failed: " + e.getMessage();
        }
    }
}