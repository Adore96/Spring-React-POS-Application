package com.adore96.ReactBackEnd.service.itemservice;
/*
kasun_k 
Project ReactBackEnd
On 4/28/2021
*/

import com.adore96.ReactBackEnd.mapping.ItemEntity;
import com.adore96.ReactBackEnd.util.TimeStampGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemServiceImpl implements ItemService {

    @Autowired
    TimeStampGenerator timeStampGenerator;

    @Override
    public ItemEntity saveStock(ItemEntity itemEntity) {
        ItemEntity itemEntity1 = new ItemEntity();
        itemEntity1.setUnitPrice(itemEntity.getUnitPrice());
        itemEntity1.setAmountRemaining(itemEntity.getAmountRemaining());
        itemEntity1.setItemCode(itemEntity.getItemCode());
        itemEntity1.setName(itemEntity.getName());

        itemEntity1.setCreatedTime(timeStampGenerator.getTimestamp());

        return itemEntity1;
    }
}
