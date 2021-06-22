package com.adore96.ReactBackEnd.service.supplierservice;
/*
kasun_k 
Project ReactBackEnd
On 4/28/2021
*/

import com.adore96.ReactBackEnd.mapping.SupplierEntity;
import com.adore96.ReactBackEnd.util.TimeStampGenerator;
import org.springframework.stereotype.Service;

@Service
public class SupplierServiceImpl implements SupplierService {
    @Override
    public SupplierEntity saveSupplier(SupplierEntity supplierEntity) {
        SupplierEntity supplierEntity1 = new SupplierEntity();
        supplierEntity1.setName(supplierEntity.getName());
        supplierEntity1.setItem1(supplierEntity.getItem1());
        supplierEntity1.setItem2(supplierEntity.getItem2());
        supplierEntity1.setItem3(supplierEntity.getItem3());
        supplierEntity1.setTelephone(supplierEntity.getTelephone());
        supplierEntity1.setCreatedTime(new TimeStampGenerator().getTimestamp());

        return supplierEntity1;
    }
}
