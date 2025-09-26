package com.klef.service;

import com.klef.entity.Doctor;
import com.klef.entity.Patient;
import com.klef.entity.Record;
import com.klef.repo.DoctorRepository;
import com.klef.repo.PatientRepository;
import com.klef.repo.RecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecordServiceImpl implements RecordService {

    @Autowired
    private RecordRepository recordRepository;

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    public List<Record> getRecordsByPatientId(Long patientId) {
        return recordRepository.findByPatientId(patientId);
    }

    @Override
    public Record addRecord(Long patientId, Long doctorId, String details) {
        Patient p = patientRepository.findById(patientId)
                .orElseThrow(() -> new RuntimeException("Patient not found"));
        Doctor d = doctorRepository.findById(doctorId)
                .orElseThrow(() -> new RuntimeException("Doctor not found"));

        Record r = new Record();
        r.setPatient(p);
        r.setDoctor(d);
        r.setDetails(details);
        return recordRepository.save(r);
    }

    @Override
    public void deleteRecord(Long recordId) {
        recordRepository.deleteById(recordId);
    }
}
