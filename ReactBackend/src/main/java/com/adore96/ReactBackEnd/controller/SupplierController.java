package com.adore96.ReactBackEnd.controller;
/*
kasun_k 
Project ReactBackEnd
On 4/21/2021
*/

import com.adore96.ReactBackEnd.bean.SupplierInputBean;
import com.adore96.ReactBackEnd.mapping.ItemEntity;
import com.adore96.ReactBackEnd.mapping.SupplierEntity;
import com.adore96.ReactBackEnd.repository.ItemRepository;
import com.adore96.ReactBackEnd.repository.SupplierRepository;
import com.adore96.ReactBackEnd.service.supplierservice.SupplierService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("api/v1/")
public class SupplierController {

    @Autowired
    SupplierRepository supplierRepository;

    @Autowired
    ItemRepository itemRepository;

    @Autowired
    SupplierService supplierService;

    //list of suppliers
    @RequestMapping("/suppliers")
    public List<SupplierEntity> getSuppliers() {
        log.info("getSuppliers method Controller");
        List<SupplierEntity> supplierEntities = supplierService.getSuppliers();
        return supplierEntities;
    }

    //add supplier
    @PostMapping("/add-supplier")
    public String addSupplier(@RequestBody SupplierInputBean supplierInputBean) {
        log.info("addEmployee Method Controller");

        String status = supplierService.addSupplier(supplierInputBean);
        return status;
    }

    //delete employee by id
    @RequestMapping("/delete-supplier/{id}")
    public String deleteSupplierbyId(@PathVariable Integer id) {
        log.info("deleteSupplierbyId method Controller");

        supplierService.deleteSupplierbyId(id);

        SupplierEntity supplierEntity = supplierRepository.findById(id).orElse(null);
        supplierRepository.delete(supplierEntity);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return null;
    }

    //update supplier
    @PostMapping("/update-supplier/{id}")
    public String updatesupplier(@PathVariable Integer id, @RequestBody SupplierInputBean supplierInputBean) {
        log.info("updatesupplier method Controller");

        String status = supplierService.updatesupplier(id, supplierInputBean);

        return status;
    }

    @GetMapping("/suppliers/{id}")
    public SupplierEntity getSupplierbyId(@PathVariable Integer id) {
        log.info("getSupplierbyId Method Controller");

        SupplierEntity supplierEntity = supplierRepository.findById(id).orElse(null);
        return supplierEntity;
    }

    @GetMapping("/item-list")
    public List<ItemEntity> getItemsList() {
        log.info("getItemsList method Controller");

        List<SupplierEntity> supplierEntities = supplierService.getItemsList();
        return itemRepository.findAll();
    }
}

