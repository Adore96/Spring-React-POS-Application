package com.adore96.ReactBackEnd.repository;
/*
kasun_k 
Project ReactBackEnd
On 4/28/2021
*/

import com.adore96.ReactBackEnd.mapping.BillEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BillReposiory extends JpaRepository<BillEntity, Integer> {

//    @Query(value = "SELECT id ,bill_amount, payment FROM bill",nativeQuery = true)
//    List<BillEntity> getAllBills();
}
