package com.myweb.main.service.user;

import org.springframework.http.ResponseEntity;

import java.util.Map;

public interface LoginService {
    ResponseEntity<Map> login(String email, String password);
}
