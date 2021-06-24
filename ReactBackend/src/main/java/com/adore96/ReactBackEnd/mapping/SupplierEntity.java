package com.adore96.ReactBackEnd.mapping;
/*
kasun_k 
Project ReactBackEnd
On 5/5/2021
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
@Table(name = "supplier", schema = "jwt", catalog = "")
public class SupplierEntity {

    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "telephone")
    private String telephone;

    @Column(name = "item1")
    private String item1;

    @Column(name = "item2")
    private String item2;

    @Column(name = "item3")
    private String item3;

    @Column(name = "created_time")
    private String createdTime;

    @ManyToOne(cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "itemid_fk", referencedColumnName = "id")
    @JsonIgnore
    private ItemEntity itemByItemidFk;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getItem1() {
        return item1;
    }

    public void setItem1(String item1) {
        this.item1 = item1;
    }

    public String getItem2() {
        return item2;
    }

    public void setItem2(String item2) {
        this.item2 = item2;
    }

    public String getItem3() {
        return item3;
    }

    public void setItem3(String item3) {
        this.item3 = item3;
    }

    public String getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(String createdTime) {
        this.createdTime = createdTime;
    }

    public ItemEntity getItemByItemidFk() {
        return itemByItemidFk;
    }

    public void setItemByItemidFk(ItemEntity itemByItemidFk) {
        this.itemByItemidFk = itemByItemidFk;
    }
}
