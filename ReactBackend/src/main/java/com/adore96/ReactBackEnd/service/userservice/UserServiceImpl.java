package com.adore96.ReactBackEnd.service.userservice;
/*
kasun_k 
Project ReactBackEnd
On 4/28/2021
*/

import com.adore96.ReactBackEnd.mapping.UserEntity;
import com.adore96.ReactBackEnd.repository.UserRepository;
import com.adore96.ReactBackEnd.util.TimeStampGenerator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    TimeStampGenerator timeStampGenerator;

    @Autowired
    UserRepository userRepository;

    @Override
    public String saveUser(UserEntity userEntity) {
        UserEntity newuser = new UserEntity();
        newuser.setUsername(userEntity.getUsername());
        newuser.setEmail(userEntity.getEmail());
        newuser.setPassword(userEntity.getPassword());
        newuser.setCreatedTime(timeStampGenerator.getTimestamp());
        newuser.setFname(userEntity.getFname());
        newuser.setLname(userEntity.getLname());
        newuser.setDesignation(userEntity.getDesignation());
        newuser.setTelephone(userEntity.getTelephone());

        userRepository.save(newuser);
        return "sucess";
    }

    @Override
    public List<UserEntity> UserList() {
        List<UserEntity> userEntities = userRepository.findAll();
        return userEntities;
    }

    @Override
    public String updateUser(Integer id, UserEntity userEntity) {
        String status;
        try {
            UserEntity newuserEntity = userRepository.findById(id).orElse(null);

            userEntity.setUsername(newuserEntity.getUsername());
            userEntity.setPassword(newuserEntity.getPassword());
            userEntity.setTelephone(newuserEntity.getTelephone());
            userEntity.setEmail(newuserEntity.getEmail());
            userRepository.save(userEntity);

            status = "success";

        } catch (Exception e) {
            status = "fail";
        }
        return status;
    }
}
