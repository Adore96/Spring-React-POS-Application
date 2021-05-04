package com.adore96.ReactBackEnd.mapping;
/*
kasun_k 
Project ReactBackEnd
On 4/19/2021
*/

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "supplier", schema = "jwt", catalog = "")
public class SupplierEntity {

    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String telephone;
    private String item1;
    private String item2;
    private String item3;
    private String createdtime;

    //returned value from the foreignkey.
    private String stockidname;
}
