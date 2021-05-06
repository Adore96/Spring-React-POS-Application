package com.adore96.ReactBackEnd.repository;
/*
kasun_k 
Project ReactBackEnd
On 3/25/2021
*/

import com.adore96.ReactBackEnd.mapping.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserEntity,Integer> {

}
