package com.adore96.ReactBackEnd.controller;
/*
kasun_k 
Project ReactBackEnd
On 3/25/2021
*/

import com.adore96.ReactBackEnd.mapping.UserEntity;
import com.adore96.ReactBackEnd.repository.UserRepository;
import com.adore96.ReactBackEnd.service.userservice.UserServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("api/v1/")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserServiceImpl userServiceImpl;

    //list of users
    @RequestMapping("/users")
    public List<UserEntity> getUsers() {
        log.info("ListUser method");
        List<UserEntity> userEntities = userServiceImpl.UserList();
        return userEntities;
    }

    //add user
    @PostMapping("/add-user")
    public String addUser(@RequestBody UserEntity userEntity) {
        log.info("Add Uer Method");
        String status = userServiceImpl.saveUser(userEntity);
        return status;
    }

    //delete employee by id
    @RequestMapping("/delete-user/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUserbyId(@PathVariable Integer id) {
        UserEntity userEntity = userRepository.findById(id).orElse(null);
        userRepository.delete(userEntity);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    //update user rest api
    @PostMapping("/update-user/{id}")
    public UserEntity updateuser(@PathVariable Integer id, @RequestBody UserEntity newUserEntity) {
        log.info("Updateuser Method Controller");
        String status = userServiceImpl.updateUser(id, newUserEntity);

        return updatedUserEntity;
    }

    @GetMapping("/users/{id}")
    public UserEntity getUserbyId(@PathVariable Integer id) {
        log.info("Delete Method Controller");
        UserEntity userEntity = userRepository.findById(id).orElse(null);
        return userEntity;
    }
}
