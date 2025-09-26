package com.klef.service;

import com.klef.entity.Doctor;
import java.util.List;

public interface DoctorService {
    Doctor signup(Doctor doctor) throws Exception;
    Doctor login(String email, String password) throws Exception;

    List<Doctor> getAllDoctors();
    Doctor getDoctorById(Long id) throws Exception;
    Doctor updateDoctor(Long id, Doctor doctor) throws Exception;
    void deleteDoctor(Long id) throws Exception;
}