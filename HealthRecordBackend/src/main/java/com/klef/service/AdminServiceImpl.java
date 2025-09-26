package com.klef.service;

import com.klef.entity.Admin;

import com.klef.repo.AdminRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private AdminRepository adminRepository;

   
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Admin signup(Admin admin) {
        if (adminRepository.findByEmail(admin.getEmail()) != null) {
            throw new RuntimeException("Email already exists");
        }
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        return adminRepository.save(admin);
    }

    @Override
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    @Override
    public Optional<Admin> getAdminById(Long id) {
        return adminRepository.findById(id);
    }

    @Override
    public Admin updateAdmin(Long id, Admin updatedAdmin) {
        Admin existing = adminRepository.findById(id).orElseThrow(() -> new RuntimeException("Admin not found"));

        existing.setName(updatedAdmin.getName());
        existing.setEmail(updatedAdmin.getEmail());

        if (updatedAdmin.getPassword() != null && !updatedAdmin.getPassword().isEmpty()) {
            existing.setPassword(passwordEncoder.encode(updatedAdmin.getPassword()));
        }

        existing.setGender(updatedAdmin.getGender());
        existing.setAge(updatedAdmin.getAge());

        return adminRepository.save(existing);
    }

    @Override
    public void deleteAdmin(Long id) {
        adminRepository.deleteById(id);
    }

   

    @Override
    public Admin authenticate(String email, String password) {
        Admin admin = adminRepository.findByEmail(email);
        if (admin != null && passwordEncoder.matches(password, admin.getPassword())) {
            return admin;
        }
        return null;
    }

	@Override
	public void approveDoctor(Long doctorId, Long patientId) {
		// TODO Auto-generated method stub
		
	}
}
