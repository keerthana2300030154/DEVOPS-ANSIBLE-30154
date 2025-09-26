package com.klef.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class WebSecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
          .csrf().disable() // disable CSRF for testing
          .authorizeHttpRequests(auth -> auth
              .requestMatchers(
                  "/patient/**",
                  "/admin/**",
                  "/api/doctor/auth/**",
                  "/api/auth/**"
              ).permitAll()
              .anyRequest().authenticated()
          )
          .httpBasic(); // optional, for testing API with Postman

        return http.build();
    }
}
