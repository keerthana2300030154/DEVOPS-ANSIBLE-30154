package com.klef.repo;

import com.klef.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
    Patient findByEmail(String email);

    // Custom query to fetch patients by approved doctor
    List<Patient> findByApprovedDoctorId(Long doctorId);
}