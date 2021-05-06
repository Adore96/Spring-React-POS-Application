package com.adore96.ReactBackEnd.service.userservice;
/*
kasun_k 
Project ReactBackEnd
On 4/28/2021
*/

import com.adore96.ReactBackEnd.mapping.UserEntity;
import com.adore96.ReactBackEnd.util.TimeStampGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    TimeStampGenerator timeStampGenerator;

    @Override
    public UserEntity saveUser(UserEntity userEntity) {
        UserEntity newuser = new UserEntity();
        newuser.setUsername(userEntity.getUsername());
        newuser.setEmail(userEntity.getEmail());
        newuser.setPassword(userEntity.getPassword());
        newuser.setCreatedTime(timeStampGenerator.getTimestamp());
        newuser.setFname(userEntity.getFname());
        newuser.setLname(userEntity.getLname());
        newuser.setDesignation(userEntity.getDesignation());
        newuser.setTelephone(userEntity.getTelephone());
        return newuser;
    }
}
