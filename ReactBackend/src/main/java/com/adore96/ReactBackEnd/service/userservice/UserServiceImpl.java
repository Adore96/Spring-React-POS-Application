package com.adore96.ReactBackEnd.service.userservice;
/*
kasun_k 
Project ReactBackEnd
On 4/28/2021
*/

import com.adore96.ReactBackEnd.bean.UserInputBean;
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
    public String saveUser(UserInputBean userInputBean) {
        UserEntity newuser = new UserEntity();
        newuser.setUsername(userInputBean.getUsername());
        newuser.setEmail(userInputBean.getEmail());
        newuser.setPassword(userInputBean.getPassword());
        newuser.setCreatedTime(timeStampGenerator.getTimestamp());
        newuser.setFname(userInputBean.getFname());
        newuser.setLname(userInputBean.getLname());
        newuser.setDesignation(userInputBean.getDesignation());
        newuser.setTelephone(userInputBean.getTelephone());

        userRepository.save(newuser);
        return "sucess";
    }

    @Override
    public List<UserEntity> UserList() {
        List<UserEntity> userEntities = userRepository.findAll();
        return userEntities;
    }

    @Override
    public String updateUser(Integer id, UserInputBean userInputBean) {
        String status;
        UserEntity userEntity = userRepository.findById(id).orElse(null);

        if (userEntity != null) {
            userEntity.setUsername(userInputBean.getUsername());
            userEntity.setPassword(userInputBean.getPassword());
            userEntity.setTelephone(userInputBean.getTelephone());
            userEntity.setEmail(userInputBean.getEmail());

            userRepository.save(userEntity);

            status = "success";
        } else {
            log.info("User not found");
            status = "fail";
        }
        return status;
    }

    @Override
    public String deleteUserById(Integer id) {
        String status;
        UserEntity userEntity = userRepository.findById(id).orElse(null);

        if (userEntity != null) {
            userRepository.delete(userEntity);
            status = "success";
        } else {
            status = "failed";
        }
        return status;
    }

    @Override
    public UserEntity getUser(Integer id) {
        UserEntity userEntity = userRepository.findById(id).orElse(null);
        return userEntity;
    }

}
