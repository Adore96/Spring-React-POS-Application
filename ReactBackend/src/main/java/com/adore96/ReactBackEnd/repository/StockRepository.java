package com.adore96.ReactBackEnd.repository;
/*
kasun_k 
Project ReactBackEnd
On 4/20/2021
*/

import com.adore96.ReactBackEnd.mapping.StockEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockRepository extends JpaRepository<StockEntity, Integer> {
}
