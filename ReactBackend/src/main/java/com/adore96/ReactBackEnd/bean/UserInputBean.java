package com.adore96.ReactBackEnd.bean;
/*
kasun_k 
Project ReactBackEnd
On 4/5/2021
*/

import com.adore96.ReactBackEnd.mapping.BillEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserInputBean {

    private int id;
    private String username;
    private String email;
    private String password;
    private String createdTime;
    private String fname;
    private String lname;
    private Integer designation;
    private Integer telephone;
    private String timestamp;
    private Collection<BillEntity> billsById;
}
