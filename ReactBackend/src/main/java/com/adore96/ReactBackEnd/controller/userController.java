package com.adore96.ReactBackEnd.controller;
/*
kasun_k 
Project ReactBackEnd
On 3/25/2021
*/

import com.adore96.ReactBackEnd.mapping.UserEntity;
import com.adore96.ReactBackEnd.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("api/v1/")
public class userController {

    @Autowired
    UserRepository userRepository;

    //list of users
    @RequestMapping("/users")
    public List<UserEntity> getUsers() {
        System.out.println("ListUser method");
        return userRepository.findAll();
    }

    //add user
    @PostMapping("/add")
    public UserEntity addEmployee(@RequestBody UserEntity userEntity) {
        System.out.println("ListUser Method");
        userRepository.save(userEntity);
        return userEntity;
    }

    //delete employee by id
    @RequestMapping("/deleteuser/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUserbyId(@PathVariable Integer id) {
        UserEntity userEntity = userRepository.findById(id).orElse(null);
        userRepository.delete(userEntity);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    //update user rest api
    @PostMapping("/updateuser/{id}")
    public UserEntity updateuser(@PathVariable Integer id, @RequestBody UserEntity newUserEntity) {
        UserEntity userEntity = userRepository.findById(id).orElse(null);

        userEntity.setUsername(newUserEntity.getUsername());
        userEntity.setPassword(newUserEntity.getPassword());
        userEntity.setTelephone(newUserEntity.getTelephone());
        userEntity.setEmail(newUserEntity.getEmail());

        UserEntity updatedUserEntity = userRepository.save(userEntity);
        return updatedUserEntity;
    }

    @GetMapping("/users/{id}")
    public UserEntity getUserbyId(@PathVariable Integer id) {
        System.out.println("Delete Method Controller");
        UserEntity userEntity = userRepository.findById(id).orElse(null);
        return userEntity;
    }
}
