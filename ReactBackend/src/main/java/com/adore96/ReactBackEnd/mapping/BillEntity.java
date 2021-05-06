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
@Table(name = "bill")
public class BillEntity {

    @Id
    @Column(name = "id")
    private int id;

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

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "useridfk", referencedColumnName = "id")
    @JsonIgnore
    private UserEntity userByUseridfk;

}
