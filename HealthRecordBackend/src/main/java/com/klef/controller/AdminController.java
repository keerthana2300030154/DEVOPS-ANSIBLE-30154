package com.klef.controller;

import com.klef.entity.Admin;
import com.klef.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
public class AdminController {

    @Autowired
    private AdminService service;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Admin admin) {
        Admin loggedInAdmin = service.authenticate(admin.getEmail(), admin.getPassword());
        if (loggedInAdmin != null) {
            loggedInAdmin.setPassword(null); // Hide password in response
            return ResponseEntity.ok(loggedInAdmin);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody Admin admin) {
        try {
            Admin savedAdmin = service.signup(admin);
            savedAdmin.setPassword(null);
            return ResponseEntity.ok(savedAdmin);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body("Signup failed: " + e.getMessage());
        }
    }

    @GetMapping("/all")
    public List<Admin> getAllAdmins() {
        return service.getAllAdmins();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getAdmin(@PathVariable Long id) {
        Optional<Admin> adminOpt = service.getAdminById(id);
        if (adminOpt.isPresent()) {
            Admin admin = adminOpt.get();
            admin.setPassword(null);
            return ResponseEntity.ok(admin);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Admin not found");
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateAdmin(@PathVariable Long id, @RequestBody Admin admin) {
        try {
            // ✅ FIX: Use service, not class
            Admin updated = service.updateAdmin(id, admin);
            updated.setPassword(null);
            return ResponseEntity.ok(updated);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Admin not found");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteAdmin(@PathVariable Long id) {
        try {
            service.deleteAdmin(id);
            return ResponseEntity.ok("Admin deleted successfully");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Delete failed: " + e.getMessage());
        }
    }

    @PostMapping("/approve")
    public ResponseEntity<?> approveDoctor(@RequestParam Long doctorId, @RequestParam Long patientId) {
        try {
            service.approveDoctor(doctorId, patientId);
            return ResponseEntity.ok("Doctor approved successfully");
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body("Approval failed: " + e.getMessage());
        }
    }
}
