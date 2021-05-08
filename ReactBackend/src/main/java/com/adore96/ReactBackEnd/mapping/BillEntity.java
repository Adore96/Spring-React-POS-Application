package com.adore96.ReactBackEnd.mapping;
/*
kasun_k 
Project ReactBackEnd
On 5/6/2021
*/

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "bill", schema = "jwt", catalog = "")
public class BillEntity {
    private int id;
    private int billAmount;
    private String createdTime;
    private int payment;
    private String paymentMethod;
    private String useridName;
    private String itemsDescription;
    private Integer useridfk;
    private UserEntity userByUseridfk;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "bill_amount")
    public int getBillAmount() {
        return billAmount;
    }

    public void setBillAmount(int billAmount) {
        this.billAmount = billAmount;
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
    @Column(name = "payment")
    public int getPayment() {
        return payment;
    }

    public void setPayment(int payment) {
        this.payment = payment;
    }

    @Basic
    @Column(name = "payment_method")
    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    @Basic
    @Column(name = "userid_name")
    public String getUseridName() {
        return useridName;
    }

    public void setUseridName(String useridName) {
        this.useridName = useridName;
    }

    @Basic
    @Column(name = "items_description")
    public String getItemsDescription() {
        return itemsDescription;
    }

    public void setItemsDescription(String itemsDescription) {
        this.itemsDescription = itemsDescription;
    }

    public void setUseridfk(Integer useridfk) {
        this.useridfk = useridfk;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BillEntity that = (BillEntity) o;
        return id == that.id && billAmount == that.billAmount && payment == that.payment && Objects.equals(createdTime, that.createdTime) && Objects.equals(paymentMethod, that.paymentMethod) && Objects.equals(useridName, that.useridName) && Objects.equals(itemsDescription, that.itemsDescription) && Objects.equals(useridfk, that.useridfk);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, billAmount, createdTime, payment, paymentMethod, useridName, itemsDescription, useridfk);
    }

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "useridfk", referencedColumnName = "id")
    @JsonIgnore
    public UserEntity getUserByUseridfk() {
        return userByUseridfk;
    }

    public void setUserByUseridfk(UserEntity userByUseridfk) {
        this.userByUseridfk = userByUseridfk;
    }
}
