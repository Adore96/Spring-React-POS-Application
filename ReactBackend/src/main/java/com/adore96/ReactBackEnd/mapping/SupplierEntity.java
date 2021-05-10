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

    @Basic
    @Column(name = "name")
    private String name;

    @Basic
    @Column(name = "telephone")
    private String telephone;

    @Basic
    @Column(name = "item1")
    private String item1;

    @Basic
    @Column(name = "item2")
    private String item2;

    @Basic
    @Column(name = "item3")
    private String item3;

    @Basic
    @Column(name = "created_time")
    private String createdTime;

    @ManyToOne(cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "itemid_fk", referencedColumnName = "id")
    @JsonIgnore
    private ItemEntity itemByItemidFk;

}
