package com.myweb.main.config.sercurity;

import com.myweb.main.mapper.UserMapper;
import com.myweb.main.pojo.User;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.stereotype.Component;

import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;

@Component
public class JwtAuthenticationTokenFilter extends OncePerRequestFilter {

    @Autowired
    private UserMapper userMapper;

    @Override
    protected void doFilterInternal(HttpServletRequest request, @NotNull HttpServletResponse response, @NotNull FilterChain filterChain) throws ServletException, IOException {
        // 1. 检查 SecurityContext 是否已有认证信息，避免重复执行
        if (SecurityContextHolder.getContext().getAuthentication() != null) {
            filterChain.doFilter(request, response);
            return;
        }

        // 2. 从请求头获取 X-UserId
        String userIdHeader = request.getHeader("X-UserId");
        if (userIdHeader == null || userIdHeader.isEmpty()) {
            // gateway 放行的接口
            filterChain.doFilter(request, response);
            return;
        }
        try {
            // 3. 查询数据库
            Integer userId = Integer.parseInt(userIdHeader);
            User user = userMapper.selectById(userId);

            if (user == null) {
                // 用户不存在
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                return;
            }

            // 4. 封装 UserDetailsImpl 并存入 SecurityContext
            UserDetailsImpl loginUser = new UserDetailsImpl(user);
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                    loginUser, null, loginUser.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        } catch (NumberFormatException e) {
            // 解析 userId 失败，跳过认证
            System.err.println("X-UserId 格式错误: " + e.getMessage());
        }

        // 5. 继续过滤链
        filterChain.doFilter(request, response);
    }
}