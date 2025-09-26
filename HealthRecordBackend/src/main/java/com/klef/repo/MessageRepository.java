package com.klef.repo;

import com.klef.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findByDoctorIdAndPatientIdOrderByTimestampAsc(Long doctorId, Long patientId);
    List<Message> findByDoctorId(Long doctorId);
    List<Message> findByPatientId(Long patientId);
}
