package com.adore96.ReactBackEnd.service.billservice;
/*
kasun_k 
Project ReactBackEnd
On 5/5/2021
*/

import com.adore96.ReactBackEnd.mapping.BillEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public interface BillService {

    BillEntity saveBill(@RequestBody BillEntity billEntity);
}
