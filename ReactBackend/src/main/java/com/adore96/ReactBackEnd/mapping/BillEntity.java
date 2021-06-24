package com.adore96.ReactBackEnd.mapping;
/*
kasun_k 
Project ReactBackEnd
On 5/6/2021
*/

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "bill", schema = "jwt", catalog = "")
public class BillEntity {

    @Id
    @Column(name = "id")
    private int id;

    @Basic
    @Column(name = "bill_amount")
    private int billAmount;

    @Column(name = "created_time")
    private String createdTime;

    @Column(name = "payment")
    private int payment;

    @Column(name = "payment_method")
    private String paymentMethod;

    @Column(name = "userid_name")
    private String useridName;

    @Column(name = "items_description")
    private String itemsDescription;

    @Column(name = "useridfk", nullable = false)
    private Integer useridfk;

    @ManyToOne(cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "useridfk", referencedColumnName = "id", insertable = false, updatable = false)
    @JsonIgnore
    private UserEntity userByUseridfk;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getBillAmount() {
        return billAmount;
    }

    public void setBillAmount(int billAmount) {
        this.billAmount = billAmount;
    }

    public String getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(String createdTime) {
        this.createdTime = createdTime;
    }

    public int getPayment() {
        return payment;
    }

    public void setPayment(int payment) {
        this.payment = payment;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public String getUseridName() {
        return useridName;
    }

    public void setUseridName(String useridName) {
        this.useridName = useridName;
    }

    public String getItemsDescription() {
        return itemsDescription;
    }

    public void setItemsDescription(String itemsDescription) {
        this.itemsDescription = itemsDescription;
    }

    public Integer getUseridfk() {
        return useridfk;
    }

    public void setUseridfk(Integer useridfk) {
        this.useridfk = useridfk;
    }

    public UserEntity getUserByUseridfk() {
        return userByUseridfk;
    }

    public void setUserByUseridfk(UserEntity userByUseridfk) {
        this.userByUseridfk = userByUseridfk;
    }
}
