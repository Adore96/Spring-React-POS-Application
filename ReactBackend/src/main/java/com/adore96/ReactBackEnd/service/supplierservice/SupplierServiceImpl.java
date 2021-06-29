package com.adore96.ReactBackEnd.service.supplierservice;
/*
kasun_k 
Project ReactBackEnd
On 4/28/2021
*/

import com.adore96.ReactBackEnd.bean.SupplierInputBean;
import com.adore96.ReactBackEnd.mapping.SupplierEntity;
import com.adore96.ReactBackEnd.repository.SupplierRepository;
import com.adore96.ReactBackEnd.util.TimeStampGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupplierServiceImpl implements SupplierService {

    @Autowired
    SupplierRepository supplierRepository;

    @Override
    public String addSupplier(SupplierInputBean supplierInputBean) {
        String status = null;
        SupplierEntity supplierEntity = new SupplierEntity();
        supplierEntity.setName(supplierInputBean.getName());
        supplierEntity.setItem1(supplierInputBean.getItem1());
        supplierEntity.setItem2(supplierInputBean.getItem2());
        supplierEntity.setItem3(supplierInputBean.getItem3());
        supplierEntity.setTelephone(supplierInputBean.getTelephone());
        supplierEntity.setCreatedTime(new TimeStampGenerator().getTimestamp());

        SupplierEntity supplierEntity1 = supplierRepository.save(supplierEntity);

        if (supplierEntity1 != null) {
            status = "success";
            return status;
        } else {
            status = "fail";
            return status;
        }
    }

    @Override
    public String updatesupplier(Integer id, SupplierInputBean supplierInputBean) {
        String status = null;
        SupplierEntity updatedSupplierEntity;

        SupplierEntity supplierEntity = supplierRepository.findById(id).orElse(null);

        supplierEntity.setName(supplierInputBean.getName());
        supplierEntity.setTelephone(supplierInputBean.getTelephone());
        supplierEntity.setItem1(supplierInputBean.getItem1());
        supplierEntity.setItem2(supplierInputBean.getItem2());
        supplierEntity.setItem3(supplierInputBean.getItem3());

        updatedSupplierEntity = supplierRepository.save(supplierEntity);

        if (updatedSupplierEntity != null) {
            status = "success";
            return status;
        } else {
            status = "fail";
            return status;
        }
    }

    @Override
    public String deleteSupplierbyId(Integer id) {
        return null;
    }

    @Override
    public List<SupplierEntity> getSuppliers() {
        return null;
    }

    @Override
    public SupplierEntity getSupplierbyId(Integer id) {
        return null;
    }

    @Override
    public List<SupplierEntity> getItemsList() {
        return null;
    }

}
