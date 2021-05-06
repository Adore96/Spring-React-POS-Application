package com.adore96.ReactBackEnd.mapping;
/*
kasun_k 
Project ReactBackEnd
On 5/6/2021
*/

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "user", schema = "jwt", catalog = "")
public class UserEntity {
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

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "username")
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Basic
    @Column(name = "email")
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Basic
    @Column(name = "password")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Basic
    @Column(name = "created_time")
    public String getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(String createdTime) {
        this.createdTime = createdTime;
    }

    @Basic
    @Column(name = "fname")
    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    @Basic
    @Column(name = "lname")
    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    @Basic
    @Column(name = "designation")
    public Integer getDesignation() {
        return designation;
    }

    public void setDesignation(Integer designation) {
        this.designation = designation;
    }

    @Basic
    @Column(name = "telephone")
    public Integer getTelephone() {
        return telephone;
    }

    public void setTelephone(Integer telephone) {
        this.telephone = telephone;
    }

    @Basic
    @Column(name = "timestamp")
    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserEntity that = (UserEntity) o;
        return id == that.id && Objects.equals(username, that.username) && Objects.equals(email, that.email) && Objects.equals(password, that.password) && Objects.equals(createdTime, that.createdTime) && Objects.equals(fname, that.fname) && Objects.equals(lname, that.lname) && Objects.equals(designation, that.designation) && Objects.equals(telephone, that.telephone) && Objects.equals(timestamp, that.timestamp);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, email, password, createdTime, fname, lname, designation, telephone, timestamp);
    }

    @OneToMany(mappedBy = "userByUseridfk")
    public Collection<BillEntity> getBillsById() {
        return billsById;
    }

    public void setBillsById(Collection<BillEntity> billsById) {
        this.billsById = billsById;
    }
}
