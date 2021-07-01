package com.adore96.ReactBackEnd.bean;
/*
kasun_k 
Project ReactBackEnd
On 5/3/2021
*/

import com.adore96.ReactBackEnd.mapping.ItemEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SupplierInputBean {

    private int id;
    private String name;
    private String telephone;
    private String item1;
    private String item2;
    private String item3;
    private String createdTime;
    private ItemEntity itemByItemidFk;
}
