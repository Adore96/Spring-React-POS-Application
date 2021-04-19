package com.adore96.ReactBackEnd.mapping;/*
kasun_k 
Project ReactBackEnd
On 4/19/2021
*/

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "stock", schema = "jwt", catalog = "")
public class StockEntity {
    private int id;
    private String name;
    private String itemCode;
    private String amountRemaining;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "itemCode")
    public String getItemCode() {
        return itemCode;
    }

    public void setItemCode(String itemCode) {
        this.itemCode = itemCode;
    }

    @Basic
    @Column(name = "amountRemaining")
    public String getAmountRemaining() {
        return amountRemaining;
    }

    public void setAmountRemaining(String amountRemaining) {
        this.amountRemaining = amountRemaining;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        StockEntity that = (StockEntity) o;
        return id == that.id && Objects.equals(name, that.name) && Objects.equals(itemCode, that.itemCode) && Objects.equals(amountRemaining, that.amountRemaining);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, itemCode, amountRemaining);
    }
}
