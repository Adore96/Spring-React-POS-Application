package com.adore96.ReactBackEnd.service.supplierservice;
/*
kasun_k 
Project ReactBackEnd
On 5/5/2021
*/

import com.adore96.ReactBackEnd.mapping.SupplierEntity;
import org.springframework.stereotype.Service;

@Service
public interface SupplierService {

    SupplierEntity saveSupplier(SupplierEntity supplierEntity);
}
