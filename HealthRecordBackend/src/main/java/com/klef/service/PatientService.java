package com.klef.service;

import java.util.List;
import java.util.Optional;

import com.klef.entity.Patient;

public interface PatientService {
    Patient registerPatient(Patient patient);
    Patient loginPatient(String email, String password);
    List<Patient> getAllPatients();
    Optional<Patient> getPatientById(Long id);
    void updatePatient(Long id, Patient updatedPatient);
    void deletePatient(Long id);

}