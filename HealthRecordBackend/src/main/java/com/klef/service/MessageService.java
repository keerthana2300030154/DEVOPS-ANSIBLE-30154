package com.klef.service;

import com.klef.entity.Message;

import java.util.List;

public interface MessageService {
    Message sendMessage(Long doctorId, Long patientId, String sender, String text);
    List<Message> getConversation(Long doctorId, Long patientId);
}
