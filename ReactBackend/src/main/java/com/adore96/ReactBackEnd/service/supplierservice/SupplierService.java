package com.adore96.ReactBackEnd.service.supplierservice;
/*
kasun_k 
Project ReactBackEnd
On 5/5/2021
*/

import com.adore96.ReactBackEnd.bean.SupplierInputBean;
import com.adore96.ReactBackEnd.mapping.ItemEntity;
import com.adore96.ReactBackEnd.mapping.SupplierEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SupplierService {

    String addSupplier(SupplierInputBean supplierInputBean);

    String updatesupplier(Integer id, SupplierInputBean supplierInputBean);

    String deleteSupplierbyId(Integer id);

    List<SupplierEntity> getSuppliers();

    SupplierEntity getSupplierbyId(Integer id);

    List<ItemEntity> getItemsList();
}
