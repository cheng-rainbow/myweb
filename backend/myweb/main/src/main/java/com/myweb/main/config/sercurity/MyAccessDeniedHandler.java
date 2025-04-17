package com.myweb.main.config.sercurity;

import com.alibaba.fastjson2.JSON;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerMapping;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

// 重写 AccessDeniedHandler 接口
@Component
public class MyAccessDeniedHandler implements AccessDeniedHandler {

    @Autowired
    private RequestMappingHandlerMapping requestMappingHandlerMapping;

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException {
        Map<String, Object> mp = new HashMap<String, Object>();

        if (isResourceNotFound(request)) {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            mp.put("message", "资源不存在或请求方式不正确");
        } else {
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            mp.put("message", "没有权限");
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