package com.adore96.ReactBackEnd.mapping;
/*
kasun_k 
Project ReactBackEnd
On 5/6/2021
*/

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "user", schema = "jwt", catalog = "")
public class UserEntity {
    @Id
    @Column(name = "id")
    private int id;

    @Basic
    @Column(name = "username")
    private String username;

    @Basic
    @Column(name = "email")
    private String email;

    @Basic
    @Column(name = "password")
    private String password;

    @Basic
    @Column(name = "created_time")
    private String createdTime;

    @Basic
    @Column(name = "fname")
    private String fname;

    @Basic
    @Column(name = "lname")
    private String lname;

    @Basic
    @Column(name = "designation")
    private Integer designation;

    @Basic
    @Column(name = "telephone")
    private Integer telephone;

    @Basic
    @Column(name = "timestamp")
    private String timestamp;

    @OneToMany(mappedBy = "userByUseridfk")
    private Collection<BillEntity> billsById;

}
