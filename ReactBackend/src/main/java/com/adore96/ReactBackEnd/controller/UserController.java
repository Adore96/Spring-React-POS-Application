package com.adore96.ReactBackEnd.controller;
/*
kasun_k 
Project ReactBackEnd
On 3/25/2021
*/

import com.adore96.ReactBackEnd.bean.UserInputBean;
import com.adore96.ReactBackEnd.mapping.UserEntity;
import com.adore96.ReactBackEnd.repository.UserRepository;
import com.adore96.ReactBackEnd.service.userservice.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("api/v1/")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    //list of users
    @RequestMapping("/users")
    public List<UserEntity> getUsers() {
        log.info("ListUser method");
        List<UserEntity> userEntities = userService.UserList();
        return userEntities;
    }

    //add user
    @PostMapping("/add-user")
    public String addUser(@RequestBody UserInputBean userInputBean) {
        log.info("Add Uer Method");
        String status = userService.saveUser(userInputBean);
        return status;
    }

    //delete employee by id
    @RequestMapping("/delete-user/{id}")
    public String deleteUserbyId(@PathVariable Integer id) {
        log.info("deleteUserbyId Method Controller");
        String status = userService.deleteUserById(id);

        return status;
    }

    //update user rest api
    @PostMapping("/update-user/{id}")
    public String updateUser(@PathVariable Integer id, @RequestBody UserInputBean userInputBean) {
        log.info("Updateuser Method Controller");
        String status = userService.updateUser(id, userInputBean);
        return status;
    }

    @GetMapping("/users/{id}")
    public UserEntity getUserbyId(@PathVariable Integer id) {
        log.info("getUserbyId Method Controller");

        UserEntity userEntity = userService.getUser(id);

        return userEntity;
    }
}
