package com.adore96.ReactBackEnd.bean;
/*
kasun_k 
Project ReactBackEnd
On 5/3/2021
*/

import com.adore96.ReactBackEnd.mapping.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BillInputBean {

    private int id;
    private int billAmount;
    private String createdTime;
    private int payment;
    private String paymentMethod;
    private String useridName;
    private String itemsDescription;
    private Integer useridfk;
    private UserEntity userByUseridfk;
}
