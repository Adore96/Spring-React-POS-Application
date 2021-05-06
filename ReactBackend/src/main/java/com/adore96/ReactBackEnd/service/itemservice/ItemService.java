package com.adore96.ReactBackEnd.service.itemservice;
/*
kasun_k 
Project ReactBackEnd
On 5/5/2021
*/

import com.adore96.ReactBackEnd.mapping.ItemEntity;
import org.springframework.stereotype.Service;

@Service
public interface ItemService {

    ItemEntity saveStock(ItemEntity itemEntity);
}
