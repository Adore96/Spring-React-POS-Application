package com.adore96.ReactBackEnd.mapping;/*
kasun_k 
Project ReactBackEnd
On 4/20/2021
*/

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "stock", schema = "jwt", catalog = "")
public class StockEntity {
    private int id;
    private String name;
    private String itemcode;
    private int supplier;
    private String amountremaining;
    private int unitprice;

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
    @Column(name = "itemcode")
    public String getItemcode() {
        return itemcode;
    }

    public void setItemcode(String itemcode) {
        this.itemcode = itemcode;
    }

    @Basic
    @Column(name = "supplier")
    public int getSupplier() {
        return supplier;
    }

    public void setSupplier(int supplier) {
        this.supplier = supplier;
    }

    @Basic
    @Column(name = "amountremaining")
    public String getAmountremaining() {
        return amountremaining;
    }

    public void setAmountremaining(String amountremaining) {
        this.amountremaining = amountremaining;
    }

    @Basic
    @Column(name = "unitprice")
    public int getUnitprice() {
        return unitprice;
    }

    public void setUnitprice(int unitprice) {
        this.unitprice = unitprice;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        StockEntity that = (StockEntity) o;
        return id == that.id && supplier == that.supplier && unitprice == that.unitprice && Objects.equals(name, that.name) && Objects.equals(itemcode, that.itemcode) && Objects.equals(amountremaining, that.amountremaining);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, itemcode, supplier, amountremaining, unitprice);
    }
}
