package com.klef;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {"com.klef"})
@EnableJpaRepositories(basePackages = "com.klef.repo")
@EntityScan(basePackages = "com.klef.entity")
public class HealthRecordBackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(HealthRecordBackendApplication.class, args);
        System.out.println("Backend is Running...");
    }
}
