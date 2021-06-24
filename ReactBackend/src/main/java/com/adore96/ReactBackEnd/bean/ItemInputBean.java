package com.adore96.ReactBackEnd.bean;
/*
kasun_k 
Project ReactBackEnd
On 5/3/2021
*/

import com.adore96.ReactBackEnd.mapping.SupplierEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Collection;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ItemInputBean {

    private int id;
    private String name;
    private String itemCode;
    private String amountRemaining;
    private int unitPrice;
    private String createdTime;
    private Collection<SupplierEntity> suppliersById;
}
