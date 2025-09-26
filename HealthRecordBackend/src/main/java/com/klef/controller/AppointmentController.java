package com.klef.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.klef.entity.Appointment;
import com.klef.repo.AppointmentRepository;

import java.util.List;

@RestController
@RequestMapping("/appointments")
@CrossOrigin(origins = "*")
public class AppointmentController {

    @Autowired
    private AppointmentRepository appointmentRepo;

    @PostMapping("/book")
    public Appointment bookAppointment(@RequestBody Appointment appointment) {
        appointment.setStatus("PENDING");
        return appointmentRepo.save(appointment);
    }

    @GetMapping("/history/{patientId}")
    public List<Appointment> getHistory(@PathVariable Long patientId) {
        return appointmentRepo.findByPatientId(patientId);
    }
}
