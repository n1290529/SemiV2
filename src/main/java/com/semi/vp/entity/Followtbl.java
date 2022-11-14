package com.semi.vp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "follow_tbl")
public class Followtbl {

    @Id
    @Column(name = "ID")
    private Long id;

    @Column(name = "FK_FOLLOW_ID")
    private String fid;

    @Column(name = "FK_FOLLOWER_ID")
    private String kid;
}