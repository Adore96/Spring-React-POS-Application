package com.adore96.ReactBackEnd.mapping;/*
kasun_k 
Project ReactBackEnd
On 4/19/2021
*/

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "supplier", schema = "jwt", catalog = "")
public class SupplierEntity {
    private int id;
    private String name;
    private String telephone;
    private String item1;
    private String item2;
    private String item3;

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
    @Column(name = "telephone")
    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    @Basic
    @Column(name = "item1")
    public String getItem1() {
        return item1;
    }

    public void setItem1(String item1) {
        this.item1 = item1;
    }

    @Basic
    @Column(name = "item2")
    public String getItem2() {
        return item2;
    }

    public void setItem2(String item2) {
        this.item2 = item2;
    }

    @Basic
    @Column(name = "item3")
    public String getItem3() {
        return item3;
    }

    public void setItem3(String item3) {
        this.item3 = item3;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SupplierEntity that = (SupplierEntity) o;
        return id == that.id && Objects.equals(name, that.name) && Objects.equals(telephone, that.telephone) && Objects.equals(item1, that.item1) && Objects.equals(item2, that.item2) && Objects.equals(item3, that.item3);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, telephone, item1, item2, item3);
    }
}
