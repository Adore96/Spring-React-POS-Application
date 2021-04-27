package com.adore96.ReactBackEnd.mapping;
/*
kasun_k 
Project ReactBackEnd
On 4/27/2021
*/

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "bill", schema = "jwt", catalog = "")
public class BillEntity {
    private int id;
    private int billamount;
    private Timestamp date;
    private String paymenttype;
    private String paymentmethod;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "billamount")
    public int getBillamount() {
        return billamount;
    }

    public void setBillamount(int billamount) {
        this.billamount = billamount;
    }

    @Basic
    @Column(name = "date")
    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    @Basic
    @Column(name = "paymenttype")
    public String getPaymenttype() {
        return paymenttype;
    }

    public void setPaymenttype(String paymenttype) {
        this.paymenttype = paymenttype;
    }

    @Basic
    @Column(name = "paymentmethod")
    public String getPaymentmethod() {
        return paymentmethod;
    }

    public void setPaymentmethod(String paymentmethod) {
        this.paymentmethod = paymentmethod;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BillEntity that = (BillEntity) o;
        return id == that.id && billamount == that.billamount && Objects.equals(date, that.date) && Objects.equals(paymenttype, that.paymenttype) && Objects.equals(paymentmethod, that.paymentmethod);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, billamount, date, paymenttype, paymentmethod);
    }
}
