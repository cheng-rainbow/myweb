package com.myweb.main.config.sercurity;

import com.alibaba.fastjson2.JSON;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Component
public class MyAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Autowired
    private RequestMappingHandlerMapping requestMappingHandlerMapping;

    @Override
    public void commence(
            HttpServletRequest request,
            HttpServletResponse response,
            AuthenticationException authException
    ) throws IOException {
        Map<String, Object> mp = new HashMap<String, Object>();
        if (isResourceNotFound(request)) {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            mp.put("message", "资源不存在或请求方式不正确");
        } else {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            mp.put("message", "请先登录");
        }
        String res = JSON.toJSONString(mp);
        response.setContentType("application/json;charset=UTF-8");
        response.getWriter().write(res);
    }

    private boolean isResourceNotFound(HttpServletRequest request) {
        try {
            return requestMappingHandlerMapping.getHandler(request) == null;
        } catch (Exception e) {
            return true;
        }
    }
}