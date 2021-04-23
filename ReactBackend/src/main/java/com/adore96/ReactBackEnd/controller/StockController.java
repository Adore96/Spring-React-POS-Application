package com.adore96.ReactBackEnd.controller;
/*
kasun_k 
Project ReactBackEnd
On 4/20/2021
*/

import com.adore96.ReactBackEnd.mapping.StockEntity;
import com.adore96.ReactBackEnd.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("api/v1/")
public class StockController {

    @Autowired
    StockRepository stockRepository;

    //list of stocks
    @RequestMapping("/stocks")
    public List<StockEntity> getStocks() {
        System.out.println("ListStock method");
        return stockRepository.findAll();
    }

    //add stock
    @PostMapping("/addstock")
    public StockEntity addstock(@RequestBody StockEntity stockEntity) {
        System.out.println("AddStock Method");
        stockRepository.save(stockEntity);
        return stockEntity;
    }

    //delete stock by id
    @RequestMapping("/deletestock/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteStockbyId(@PathVariable Integer id) {
        StockEntity stockEntity = stockRepository.findById(id).orElse(null);
        stockRepository.delete(stockEntity);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    //update stock rest api
    @PostMapping("/updatestock/{id}")
    public StockEntity updatestock(@PathVariable Integer id, @RequestBody StockEntity newStockEntity) {
        StockEntity stockEntity = stockRepository.findById(id).orElse(null);

        stockEntity.setName(newStockEntity.getName());
        stockEntity.setItemcode(newStockEntity.getItemcode());
        stockEntity.setAmountremaining(newStockEntity.getAmountremaining());
        stockEntity.setUnitprice(newStockEntity.getUnitprice());
        stockEntity.setSupplier(newStockEntity.getSupplier());

        StockEntity updatedStockEntity = stockRepository.save(stockEntity);
        return updatedStockEntity;
    }

    @GetMapping("/stocks/{id}")
    public StockEntity getStockbyId(@PathVariable Integer id) {
        System.out.println("getStockbyId Method Controller");
        StockEntity stockEntity = stockRepository.findById(id).orElse(null);
        return stockEntity;
    }
}
