package com.semi.vp.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

//porject_tblのEntity宣言
@Entity
@Data
@Table(name = "project_tbl")
public class Projecttbl {

//プロジェクトID
	@Id
	@Column(name = "PROJ_ID", nullable = false, unique = true, length = 11)
	private String id;

//外部のユーザーID
	@Column(name = "FK_USER_ID", nullable = false, length = 10)
	private String uid;

//プロジェクト名
	@Column(name = "PROJ_NAME", nullable = false, length = 15)
	private String name;

//プロジェクトのpath
	@Column(name = "PROJ_ADDREES", nullable = false, unique = true, length = 100)
	private String address;

//プロジェクトのジャンル
	@Column(name = "PROJ_GENRE")
	private int genre;

//プロジェクト公開非公開
	@Column(name = "PROJ_OPEN_FLG", nullable = false)
	private int openflg = 0;

//プロジェクトを最後に触った時間
	@Column(name = "PROJ_LAST_TIME")
	private Date lasttime;

	// プロジェクトをアップロードした時間
	@Column(name = "PROJ_UP_TIME")
	private Date uptime;

	// プロジェクトを作成した時間
	@Column(name = "PROJ_MAKE_TIME")
	private Date maketime;

	// 閲覧数
	@Column(name = "PROJ_BROW_CNT")
	private int browcnt = 0;

	// DL数
	@Column(name = "PROJ_DL_CNT")
	private int dlcnt = 0;

	// プロジェクトの紹介文
	@Column(name = "PROJ_INTRO")
	private String intro;
}