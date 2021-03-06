package com.adore96.ReactBackEnd.controller;
/*
kasun_k 
Project ReactBackEnd
On 4/28/2021
*/

import com.adore96.ReactBackEnd.mapping.BillEntity;
import com.adore96.ReactBackEnd.repository.BillReposiory;
import com.adore96.ReactBackEnd.service.billservice.BillService;
import com.adore96.ReactBackEnd.service.userservice.UserServiceImpl;
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
public class BillController {

    @Autowired
    BillReposiory billReposiory;

    @Autowired
    BillService billService;

    @Autowired
    UserServiceImpl userServiceImpl;

    //list of bills
    @RequestMapping("/bills")
    public List<BillEntity> getBills() {
        log.info("ListBills Controller");
        return billReposiory.findAll();
    }

    //add bill
    @PostMapping("/add-bill")
    public BillEntity addbill(@RequestBody BillEntity billEntity) {
        log.info("AddBill Controller");
        billReposiory.save(billService.saveBill(billEntity));
        return billEntity;
    }

    //delete bill by id
    @RequestMapping("/delete-bill/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteBillbyId(@PathVariable Integer id) {
        log.info("Deletebill Controller");
        BillEntity billEntity = billReposiory.findById(id).orElse(null);
        billReposiory.delete(billEntity);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    //update bill rest api
    @PostMapping("/update-bill/{id}")
    public BillEntity updatebill(@PathVariable Integer id, @RequestBody BillEntity newBillEntity) {
        log.info("UpdateBill Controller");
        BillEntity billEntity = billReposiory.findById(id).orElse(null);

        billEntity.setBillAmount(newBillEntity.getBillAmount());
        billEntity.setPaymentMethod(newBillEntity.getPaymentMethod());
        billEntity.setPayment(newBillEntity.getPayment());

        BillEntity updatedBillEntity = billReposiory.save(billEntity);
        return updatedBillEntity;
    }

    @GetMapping("/bills/{id}")
    public BillEntity getBillbyId(@PathVariable Integer id) {
        log.info("getBillbyId Method Controller");
        BillEntity billEntity = billReposiory.findById(id).orElse(null);
        return billEntity;
    }

//    @RequestMapping("/itemsupplier/{id}")
//    public String BillSupplier(@PathVariable Integer id) {
//        System.out.println("get BillSupplier by supplier id Method Controller");
//        BillEntity billEntity = billReposiory.findById(id).orElse(null);
//        String billName = billEntity();
//        return supplierName;
//    }

}
