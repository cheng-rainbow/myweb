package com.myweb.main.controller.user;


import com.myweb.main.mapper.UserMapper;
import com.myweb.main.service.user.LoginService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@AllArgsConstructor
public class LoginController {

    private final LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<Map> login(@RequestBody Map<String, Object> mp) {
        String email = (String) mp.get("email");
        String password = (String) mp.get("password");
        return loginService.login(email, password);
    }
}
