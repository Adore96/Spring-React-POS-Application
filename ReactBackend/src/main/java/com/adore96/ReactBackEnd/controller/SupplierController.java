package com.adore96.ReactBackEnd.controller;
/*
kasun_k 
Project ReactBackEnd
On 4/21/2021
*/

import com.adore96.ReactBackEnd.mapping.ItemEntity;
import com.adore96.ReactBackEnd.mapping.SupplierEntity;
import com.adore96.ReactBackEnd.repository.ItemRepository;
import com.adore96.ReactBackEnd.repository.SupplierRepository;
import com.adore96.ReactBackEnd.service.spplierservice.SupplierServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("api/v1/")
public class SupplierController {

    @Autowired
    SupplierRepository supplierRepository;

    @Autowired
    ItemRepository itemRepository;

    @Autowired
    SupplierServiceImpl supplierServiceImpl;

    //list of suppliers
    @RequestMapping("/suppliers")
    public List<SupplierEntity> getSuppliers() {
        System.out.println("ListSupplier method");
        return supplierRepository.findAll();
    }

    //add supplier
    @PostMapping("/add-supplier")
    public SupplierEntity addEmployee(@RequestBody SupplierEntity supplierEntity) {
        System.out.println("ListSupplier Method");
        supplierRepository.save(supplierServiceImpl.saveSupplier(supplierEntity));
        return supplierEntity;
    }

    //delete employee by id
    @RequestMapping("/delete-supplier/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteSupplierbyId(@PathVariable Integer id) {
        SupplierEntity supplierEntity = supplierRepository.findById(id).orElse(null);
        supplierRepository.delete(supplierEntity);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    //update supplier rest api
    @PostMapping("/update-supplier/{id}")
    public SupplierEntity updatesupplier(@PathVariable Integer id, @RequestBody SupplierEntity newSupplierEntity) {
        SupplierEntity supplierEntity = supplierRepository.findById(id).orElse(null);

        supplierEntity.setName(newSupplierEntity.getName());
        supplierEntity.setTelephone(newSupplierEntity.getTelephone());
        supplierEntity.setItem1(newSupplierEntity.getItem1());
        supplierEntity.setItem2(newSupplierEntity.getItem2());
        supplierEntity.setItem3(newSupplierEntity.getItem3());

        SupplierEntity updatedSupplierEntity = supplierRepository.save(supplierEntity);
        return updatedSupplierEntity;
    }

    @GetMapping("/suppliers/{id}")
    public SupplierEntity getSupplierbyId(@PathVariable Integer id) {
        System.out.println("Delete Method Controller");
        SupplierEntity supplierEntity = supplierRepository.findById(id).orElse(null);
        return supplierEntity;
    }

    @GetMapping("/item-list")
    public List<ItemEntity> getItemsList() {
        System.out.println("List Items Method for adding Suppliers Controller");
        return itemRepository.findAll();
    }
}

