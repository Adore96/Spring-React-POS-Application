package com.adore96.ReactBackEnd.repository;
/*
kasun_k 
Project ReactBackEnd
On 4/21/2021
*/

import com.adore96.ReactBackEnd.mapping.SupplierEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SupplierRepository extends JpaRepository<SupplierEntity, Integer> {


}
