package com.adore96.ReactBackEnd.mapping;
/*
kasun_k 
Project ReactBackEnd
On 4/27/2021
*/

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user", schema = "jwt", catalog = "")
public class UserEntity {

    @Id
    @GeneratedValue
    private int id;
    private String username;
    private String email;
    private String password;
    private String createdtime;
    private String fname;
    private String lname;
    private Integer designation;
    private Integer telephone;
    private String timestamp;

    @OneToMany(targetEntity = BillEntity.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "useridfk", referencedColumnName = "id")
    private List<BillEntity> bills;
}
