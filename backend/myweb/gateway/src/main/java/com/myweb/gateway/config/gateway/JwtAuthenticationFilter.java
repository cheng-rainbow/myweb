package com.myweb.gateway.config.gateway;

import io.jsonwebtoken.Claims;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.Ordered;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.util.Arrays;
import java.util.List;

@Component
public class JwtAuthenticationFilter implements GlobalFilter, Ordered {

    // 定义无需认证的路径白名单
    private static final List<String> WHITE_LIST = Arrays.asList(
            "/public/**"
    );

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        String path = exchange.getRequest().getURI().getPath();

        // 如果请求路径在白名单中，跳过 JWT 验证
        if (isWhiteListed(path)) {
            return chain.filter(exchange);
        }

        // 从请求头中获取 Authorization
        String authHeader = exchange.getRequest().getHeaders().getFirst(HttpHeaders.AUTHORIZATION);

        // 检查是否包含 Bearer token
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }

        // 提取 JWT token
        String token = authHeader.substring(7);

        try {
            // 使用你的 JwtUtil 解析和验证 JWT
            Claims claims = JwtUtil.parseJWT(token);

            // 将用户信息（如 subject）添加到请求头中，供下游服务使用
            exchange.getRequest().mutate()
                    .header("X-UserId", claims.getSubject()) // 可选：传递 用户 的 ID
                    .build();

            // 继续请求链
            return chain.filter(exchange);
        } catch (Exception e) {
            // JWT 验证失败（过期、签名错误等）
            exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
            return exchange.getResponse().setComplete();
        }
    }

    @Override
    public int getOrder() {
        return -100; // 设置优先级，确保在其他过滤器之前执行
    }

    // 检查路径是否在白名单中
    private boolean isWhiteListed(String path) {
        return WHITE_LIST.stream().anyMatch(
                whitePath -> whitePath.endsWith("/**") ?
                        path.startsWith(whitePath.substring(0, whitePath.length() - 3)) :
                        whitePath.equals(path)
        );
    }
}