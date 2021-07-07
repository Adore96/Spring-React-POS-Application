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

import java.util.List;

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

    @RequestMapping("/suppliers")
    public List<SupplierEntity> getSuppliers() {
        log.info("getSuppliers method Controller");
        List<SupplierEntity> supplierEntities = supplierService.getSuppliers();
        return supplierEntities;
    }

    @PostMapping("/add-supplier")
    public String addSupplier(@RequestBody SupplierInputBean supplierInputBean) {
        log.info("addEmployee Method Controller");
        String status = null;

        if (supplierInputBean != null) {
            status = supplierService.addSupplier(supplierInputBean);
            return status;
        } else {
            status = "fail";
            return status;
        }
    }

    @RequestMapping("/delete-supplier/{id}")
    public String deleteSupplierbyId(@PathVariable Integer id) {
        log.info("deleteSupplierbyId method Controller");
        String status = null;

        if (id != null && id != 0) {
            supplierService.deleteSupplierbyId(id);
            status = "success";
            return status;
        } else {
            status = "fail";
            return status;
        }
    }

    @PostMapping("/update-supplier/{id}")
    public String updatesupplier(@PathVariable Integer id, @RequestBody SupplierInputBean supplierInputBean) {
        log.info("updatesupplier method Controller");
        String status = null;

        if (id != null && id != 0 && supplierInputBean != null) {
            status = supplierService.updatesupplier(id, supplierInputBean);
            return status;
        } else {
            return "fail";
        }
    }

    @GetMapping("/suppliers/{id}")
    public SupplierEntity getSupplierbyId(@PathVariable Integer id) {
        log.info("getSupplierbyId Method Controller");

        if (id != 0 && id != null) {
            SupplierEntity supplierEntity = supplierRepository.findById(id).orElse(null);
            return supplierEntity;
        } else {
            log.info("id is empty");
            return null;
        }
    }

    @GetMapping("/item-list")
    public List<ItemEntity> getItemsList() {
        log.info("getItemsList method Controller");

        List<ItemEntity> supplierEntities = supplierService.getItemsList();
        return supplierEntities;
    }
}

