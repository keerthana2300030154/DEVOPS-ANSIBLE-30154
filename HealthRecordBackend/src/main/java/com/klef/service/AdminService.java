package com.klef.service;

import java.util.List;
import java.util.Optional;
import com.klef.entity.Admin;

public interface AdminService {
    Admin signup(Admin admin);
    List<Admin> getAllAdmins();
    Optional<Admin> getAdminById(Long id);
    Admin updateAdmin(Long id, Admin updatedAdmin);
    void deleteAdmin(Long id);
    void approveDoctor(Long doctorId, Long patientId);
    Admin authenticate(String email, String password);
}
