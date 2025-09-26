package com.klef.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.klef.entity.Doctor;
import com.klef.repo.DoctorRepository;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class PasswordResetServiceImpl implements PasswordResetService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Temporary in-memory store for tokens (for demo)
    private Map<String, String> resetTokens = new HashMap<>();

    @Override
    public void sendResetLink(String email) {
        Doctor doctor = doctorRepository.findByEmail(email);
        if (doctor == null) {
            throw new RuntimeException("User not found with email: " + email);
        }

        // Generate a random token
        String token = UUID.randomUUID().toString();

        // Store token associated with email
        resetTokens.put(token, email);

        // TODO: Send token via email in production
        System.out.println("Password reset token for " + email + ": " + token);
    }

    @Override
    public void resetPassword(String token, String newPassword) {
        String email = resetTokens.get(token);
        if (email == null) {
            throw new RuntimeException("Invalid or expired token");
        }

        Doctor doctor = doctorRepository.findByEmail(email);
        if (doctor == null) {
            throw new RuntimeException("User not found with email: " + email);
        }

        // Encode and set new password
        doctor.setPassword(passwordEncoder.encode(newPassword));
        doctorRepository.save(doctor);

        // Remove token after successful reset
        resetTokens.remove(token);
    }
}
