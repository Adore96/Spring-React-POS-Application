package com.adore96.ReactBackEnd.service.userservice;
/*
kasun_k 
Project ReactBackEnd
On 5/5/2021
*/

import com.adore96.ReactBackEnd.bean.UserInputBean;
import com.adore96.ReactBackEnd.mapping.UserEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

    String saveUser(UserInputBean userInputBean);

    List<UserEntity> UserList();

    String updateUser(Integer id, UserInputBean userInputBean);

    String deleteUserById(Integer id);

    UserEntity getUser(Integer id);
}
