package com.myweb.main.service.impl;

import com.myweb.main.config.sercurity.UserDetailsImpl;
import com.myweb.main.mapper.UserMapper;
import com.myweb.main.pojo.User;
import com.myweb.main.service.user.LoginService;
import com.myweb.main.utils.JwtUtil;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@AllArgsConstructor
public class LoginServiceImpl implements LoginService {

    private final AuthenticationManager authenticationManager;

    @Override
    public ResponseEntity<Map> login(String email, String password) {
        String jwt = null;
        Map<String, Object> res = new HashMap<>();
        try {
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(email, password);
            // 2. 验证，不存在会抛出AuthenticationException的异常
            Authentication authenticate = authenticationManager.authenticate(authenticationToken);
            UserDetailsImpl userDetails = (UserDetailsImpl) authenticate.getPrincipal();
            User user = userDetails.getUser();
            jwt = JwtUtil.createJWT(user.getId().toString());
        } catch (AuthenticationException e) {
            res.put("message", "用户名或密码错误");
            res.put("data", null);
            return ResponseEntity.status(HttpServletResponse.SC_UNAUTHORIZED).body(res);
        }
        res.put("message", "登录成功");
        res.put("data", jwt);
        return ResponseEntity.status(HttpServletResponse.SC_OK).body(res);
    }
}
