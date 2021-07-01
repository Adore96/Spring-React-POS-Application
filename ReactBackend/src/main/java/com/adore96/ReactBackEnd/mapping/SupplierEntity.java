package com.adore96.ReactBackEnd.mapping;
/*
kasun_k 
Project ReactBackEnd
On 5/5/2021
*/

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
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

}
