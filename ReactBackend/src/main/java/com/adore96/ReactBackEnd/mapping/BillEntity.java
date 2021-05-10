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

    @Basic
    @Column(name = "created_time")
    private String createdTime;

    @Basic
    @Column(name = "payment")
    private int payment;

    @Basic
    @Column(name = "payment_method")
    private String paymentMethod;

    @Basic
    @Column(name = "userid_name")
    private String useridName;

    @Basic
    @Column(name = "items_description")
    private String itemsDescription;

    @Basic
    @Column(name = "useridfk", nullable = false)
    private Integer useridfk;

    @ManyToOne(cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "useridfk", referencedColumnName = "id", insertable = false, updatable = false)
    @JsonIgnore
    private UserEntity userByUseridfk;

}
