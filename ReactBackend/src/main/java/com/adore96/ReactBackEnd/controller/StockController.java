package com.adore96.ReactBackEnd.controller;
/*
kasun_k 
Project ReactBackEnd
On 4/20/2021
*/

import com.adore96.ReactBackEnd.mapping.StockEntity;
import com.adore96.ReactBackEnd.mapping.SupplierEntity;
import com.adore96.ReactBackEnd.repository.StockRepository;
import com.adore96.ReactBackEnd.repository.SupplierRepository;
import com.adore96.ReactBackEnd.util.TimeStampGenerator;
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

    @Autowired
    SupplierRepository supplierRepository;

    //list of stocks
    @RequestMapping("/items")
    public List<StockEntity> getStocks() {
        System.out.println("ListStock method");
        return stockRepository.findAll();
    }

    //add stock
    @PostMapping("/additem")
    public StockEntity addstock(@RequestBody StockEntity stockEntity) {
        System.out.println("AddStock Method");
        stockRepository.save(stockEntity);
        return stockEntity;
    }

    //delete stock by id
    @RequestMapping("/deleteitem/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteStockbyId(@PathVariable Integer id) {
        StockEntity stockEntity = stockRepository.findById(id).orElse(null);
        stockRepository.delete(stockEntity);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    //update stock rest api
    @PostMapping("/updateitem/{id}")
    public StockEntity updatestock(@PathVariable Integer id, @RequestBody StockEntity newStockEntity) {
        StockEntity stockEntity = stockRepository.findById(id).orElse(null);

        stockEntity.setName(newStockEntity.getName());
        stockEntity.setItemcode(newStockEntity.getItemcode());
        stockEntity.setAmountremaining(newStockEntity.getAmountremaining());
        stockEntity.setUnitprice(newStockEntity.getUnitprice());
        stockEntity.setSuppliers(newStockEntity.getSuppliers());

        StockEntity updatedStockEntity = stockRepository.save(stockEntity);
        return updatedStockEntity;
    }

    @GetMapping("/items/{id}")
    public StockEntity getStockbyId(@PathVariable Integer id) {
        System.out.println("getStockbyId Method Controller");
        StockEntity stockEntity = stockRepository.findById(id).orElse(null);
        return stockEntity;
    }

    @RequestMapping("/itemsupplier/{id}")
    public String StockSupplier(@PathVariable Integer id) {
        System.out.println("get StockSupplier by supplier id Method Controller");
        SupplierEntity supplierEntity = supplierRepository.findById(id).orElse(null);
        String supplierName = supplierEntity.getName();
        return supplierName;
    }
}
