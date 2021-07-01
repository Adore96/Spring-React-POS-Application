package com.adore96.ReactBackEnd.mapping;
/*
kasun_k 
Project ReactBackEnd
On 5/5/2021
*/

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "item")
public class ItemEntity {

    @Id
    @Column(name = "id")
    private int id;

    @Basic
    @Column(name = "name")
    private String name;

    @Basic
    @Column(name = "item_code")
    private String itemCode;

    @Basic
    @Column(name = "amount_remaining")
    private String amountRemaining;

    @Basic
    @Column(name = "unit_price")
    private int unitPrice;

    @Basic
    @Column(name = "created_time")
    private String createdTime;

    @OneToMany(mappedBy = "itemByItemidFk")
    private Collection<SupplierEntity> suppliersById;

}
