package com.klef.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.klef.entity.Doctor;
import com.klef.repo.DoctorRepository;

import java.util.List;

@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Doctor signup(Doctor doctor) throws Exception {
        if (doctorRepository.findByEmail(doctor.getEmail()) != null) {
            throw new Exception("Email already exists");
        }
        doctor.setPassword(passwordEncoder.encode(doctor.getPassword()));
        return doctorRepository.save(doctor);
    }

    @Override
    public Doctor login(String email, String password) throws Exception {
        Doctor doctor = doctorRepository.findByEmail(email);
        if (doctor == null) {
            throw new Exception("Doctor not found with email: " + email);
        }
        if (!passwordEncoder.matches(password, doctor.getPassword())) {
            throw new Exception("Invalid password");
        }
        return doctor;
    }

    @Override
    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    @Override
    public Doctor getDoctorById(Long id) throws Exception {
        return doctorRepository.findById(id)
                .orElseThrow(() -> new Exception("Doctor not found with ID: " + id));
    }

    @Override
    public Doctor updateDoctor(Long id, Doctor doctorDetails) throws Exception {
        Doctor existingDoctor = getDoctorById(id);
        existingDoctor.setName(doctorDetails.getName());
        existingDoctor.setEmail(doctorDetails.getEmail());
        if (doctorDetails.getPassword() != null && !doctorDetails.getPassword().isEmpty()) {
            existingDoctor.setPassword(passwordEncoder.encode(doctorDetails.getPassword()));
        }
        existingDoctor.setAge(doctorDetails.getAge());
        existingDoctor.setGender(doctorDetails.getGender());
        existingDoctor.setSpecialization(doctorDetails.getSpecialization());
        existingDoctor.setDesignation(doctorDetails.getDesignation());

        return doctorRepository.save(existingDoctor);
    }

    @Override
    public void deleteDoctor(Long id) throws Exception {
        Doctor existingDoctor = getDoctorById(id);
        doctorRepository.delete(existingDoctor);
    }
}