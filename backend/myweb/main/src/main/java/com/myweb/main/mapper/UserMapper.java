package com.myweb.main.mapper;


import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.myweb.main.pojo.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper extends BaseMapper<User> {
}
