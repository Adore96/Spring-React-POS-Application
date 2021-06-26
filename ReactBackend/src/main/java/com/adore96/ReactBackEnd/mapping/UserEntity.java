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

    @Column(name = "username")
    private String username;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "created_time")
    private String createdTime;

    @Column(name = "fname")
    private String fname;

    @Column(name = "lname")
    private String lname;

    @Column(name = "designation")
    private Integer designation;

    @Column(name = "telephone")
    private Integer telephone;

    @Column(name = "timestamp")
    private String timestamp;

    @OneToMany(mappedBy = "userByUseridfk")
    private Collection<BillEntity> billsById;

}
