package com.adore96.ReactBackEnd.service.billservice;
/*
kasun_k 
Project ReactBackEnd
On 4/28/2021
*/

import com.adore96.ReactBackEnd.mapping.BillEntity;
import com.adore96.ReactBackEnd.util.TimeStampGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BillServiceImpl implements BillService {

    @Autowired
    TimeStampGenerator timeStampGenerator;

    @Override
    public BillEntity saveBill(BillEntity billEntity) {
        BillEntity newBill = new BillEntity();
        newBill.setPayment(billEntity.getPayment());
        newBill.setBillAmount(billEntity.getBillAmount());
        newBill.setPaymentMethod(billEntity.getPaymentMethod());
        newBill.setCreatedTime(timeStampGenerator.getTimestamp());
        return newBill;
    }
}
