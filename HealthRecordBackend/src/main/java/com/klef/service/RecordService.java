package com.klef.service;

import com.klef.entity.Record;

import java.util.List;

public interface RecordService {
    List<Record> getRecordsByPatientId(Long patientId);
    Record addRecord(Long patientId, Long doctorId, String details);
    void deleteRecord(Long recordId);
}
