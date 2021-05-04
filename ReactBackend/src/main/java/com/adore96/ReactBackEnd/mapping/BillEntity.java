package com.adore96.ReactBackEnd.mapping;
/*
kasun_k 
Project ReactBackEnd
On 4/28/2021
*/

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "bill", schema = "jwt", catalog = "")
public class BillEntity {

    @Id
    @GeneratedValue
    private int id;

    private int billamount;
    private String createdtime;
    private int payment;
    private String paymentmethod;

    private String useridname;

}
