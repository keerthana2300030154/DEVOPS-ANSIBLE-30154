package com.klef.service;

import com.klef.entity.Doctor;
import com.klef.entity.Patient;
import com.klef.entity.Message;
import com.klef.repo.DoctorRepository;
import com.klef.repo.PatientRepository;
import com.klef.repo.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private PatientRepository patientRepository;

    @Override
    public Message sendMessage(Long doctorId, Long patientId, String sender, String text) {
        Doctor d = doctorRepository.findById(doctorId)
                .orElseThrow(() -> new RuntimeException("Doctor not found"));
        Patient p = patientRepository.findById(patientId)
                .orElseThrow(() -> new RuntimeException("Patient not found"));

        Message m = new Message();
        m.setDoctor(d);
        m.setPatient(p);
        m.setSender(sender);
        m.setText(text);
        return messageRepository.save(m);
    }

    @Override
    public List<Message> getConversation(Long doctorId, Long patientId) {
        return messageRepository.findByDoctorIdAndPatientIdOrderByTimestampAsc(doctorId, patientId);
    }
}
