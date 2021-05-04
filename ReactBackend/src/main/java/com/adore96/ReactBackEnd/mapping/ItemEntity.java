package com.adore96.ReactBackEnd.mapping;
/*
kasun_k 
Project ReactBackEnd
On 4/20/2021
*/

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "stock", schema = "jwt", catalog = "")
public class ItemEntity {

    @Id
    @GeneratedValue
    private int id;

    private String name;
    private String itemcode;
    private String amountremaining;
    private int unitprice;
    private String createdtime;

    @OneToMany(targetEntity = SupplierEntity.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "stockidfk",referencedColumnName = "id")
    private List<SupplierEntity> suppliers;
}
