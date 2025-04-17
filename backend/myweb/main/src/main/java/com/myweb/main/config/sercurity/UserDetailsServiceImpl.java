package com.myweb.main.config.sercurity;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.myweb.main.mapper.UserMapper;
import com.myweb.main.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    UserMapper userMapper;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        QueryWrapper<User> queryWrapper = new QueryWrapper<User>();
        queryWrapper.eq("email", email);	// 这里不止可以用username，你可以自定义，主要根据你自己写的查询逻辑
        User user = userMapper.selectOne(queryWrapper);
        if (user == null) {
            throw new UsernameNotFoundException(email);
        }
        return new UserDetailsImpl(user);	// UserDetailsImpl 是我们实现的类
    }
}
