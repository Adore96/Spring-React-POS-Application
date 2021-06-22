package com.adore96.ReactBackEnd.controller;
/*
kasun_k 
Project ReactBackEnd
On 4/20/2021
*/

import com.adore96.ReactBackEnd.mapping.ItemEntity;
import com.adore96.ReactBackEnd.repository.ItemRepository;
import com.adore96.ReactBackEnd.service.itemservice.ItemServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@CrossOrigin
@RequestMapping("api/v1/")
public class ItemController {

    @Autowired
    ItemRepository itemRepository;

    @Autowired
    ItemServiceImpl itemServiceImpl;

    //list of stocks
    @RequestMapping("/items")
    public List<ItemEntity> getStocks() {
        log.info("ListStock method");
        return itemRepository.findAll();
    }

    //add stock
    @PostMapping("/add-item")
    public ItemEntity addstock(@RequestBody ItemEntity itemEntity) {
        log.info("AddStock Method");
        itemRepository.save(itemServiceImpl.saveStock(itemEntity));
        return itemEntity;
    }

    //delete stock by id
    @RequestMapping("/delete-item/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteStockbyId(@PathVariable Integer id) {
        ItemEntity itemEntity = itemRepository.findById(id).orElse(null);
        itemRepository.delete(itemEntity);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    //update stock rest api
    @PostMapping("/update-item/{id}")
    public ItemEntity updatestock(@PathVariable Integer id, @RequestBody ItemEntity newItemEntity) {
        ItemEntity itemEntity = itemRepository.findById(id).orElse(null);

        itemEntity.setName(newItemEntity.getName());
        itemEntity.setItemCode(newItemEntity.getItemCode());
        itemEntity.setAmountRemaining(newItemEntity.getAmountRemaining());
        itemEntity.setUnitPrice(newItemEntity.getUnitPrice());
        itemEntity.setSuppliersById(newItemEntity.getSuppliersById());

        ItemEntity updatedItemEntity = itemRepository.save(itemEntity);
        return updatedItemEntity;
    }

    @GetMapping("/items/{id}")
    public ItemEntity getStockbyId(@PathVariable Integer id) {
        log.info("getStockbyId Method Controller");
        ItemEntity itemEntity = itemRepository.findById(id).orElse(null);
        return itemEntity;
    }

    //get SUppliername from itemId for Itemlist table and update table TODO
//    @RequestMapping("/itemsupplier/{id}")
//    public String StockSupplier(@PathVariable Integer id) {
//        System.out.println("get ItemSupplier by supplier id Method Controller");
//        SupplierEntity supplierEntity = supplierRepository.findByStockidfk(id).orElse(null);
//        String supplierName = supplierEntity.getName();
//        return supplierName;
//    }
}
