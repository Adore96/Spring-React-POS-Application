package com.adore96.ReactBackEnd.service;/*
kasun_k 
Project ReactBackEnd
On 4/28/2021
*/

import com.adore96.ReactBackEnd.mapping.ItemEntity;
import com.adore96.ReactBackEnd.util.TimeStampGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class StockService {

    @Autowired
    TimeStampGenerator timeStampGenerator;

    public ItemEntity saveStock(ItemEntity itemEntity) {
        ItemEntity itemEntity1 = new ItemEntity();
        itemEntity1.setUnitprice(itemEntity.getUnitprice());
        itemEntity1.setAmountremaining(itemEntity.getAmountremaining());
        itemEntity1.setItemcode(itemEntity.getItemcode());
        itemEntity1.setName(itemEntity.getName());

        itemEntity1.setCreatedtime(timeStampGenerator.getTimestamp());

        return itemEntity1;
    }
}
