package com.myweb.main.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestControler {

    @Autowired
    PasswordEncoder passwordEncoder;

    @GetMapping("/test")
    public String test() {
        System.out.println(passwordEncoder.encode("123"));
        return "Hello, World!";
    }
}
