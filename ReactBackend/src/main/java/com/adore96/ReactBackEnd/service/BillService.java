package com.adore96.ReactBackEnd.service;
/*
kasun_k 
Project ReactBackEnd
On 4/28/2021
*/

import com.adore96.ReactBackEnd.mapping.BillEntity;
import com.adore96.ReactBackEnd.util.TimeStampGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class BillService {

    @Autowired
    TimeStampGenerator timeStampGenerator;

public BillEntity saveBill(@RequestBody BillEntity billEntity){
    BillEntity newBill = new BillEntity();
    newBill.setPayment(billEntity.getPayment());
    newBill.setBillamount(billEntity.getBillamount());
    newBill.setPaymentmethod(billEntity.getPaymentmethod());
    newBill.setCreatedtime(timeStampGenerator.getTimestamp());
    return newBill;
}
}
