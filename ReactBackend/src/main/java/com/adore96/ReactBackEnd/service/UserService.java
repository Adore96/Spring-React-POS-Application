package com.adore96.ReactBackEnd.service;/*
kasun_k 
Project ReactBackEnd
On 4/28/2021
*/

import com.adore96.ReactBackEnd.mapping.UserEntity;
import com.adore96.ReactBackEnd.util.TimeStampGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class UserService {

    @Autowired
    TimeStampGenerator timeStampGenerator;

    public UserEntity saveUser(@RequestBody UserEntity userEntity) {
        UserEntity newuser = new UserEntity();
        newuser.setUsername(userEntity.getUsername());
        newuser.setEmail(userEntity.getEmail());
        newuser.setPassword(userEntity.getPassword());
        newuser.setCreatedtime(timeStampGenerator.getTimestamp());
        newuser.setFname(userEntity.getFname());
        newuser.setLname(userEntity.getLname());
        newuser.setDesignation(userEntity.getDesignation());
        newuser.setTelephone(userEntity.getTelephone());
        return newuser;
    }
}
