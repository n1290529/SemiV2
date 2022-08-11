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
    @Column(name = "FK_USER_ID")
    private String id;
	
	@Column(name = "FOLLOW_USER_ID")
    private String fid;
}
