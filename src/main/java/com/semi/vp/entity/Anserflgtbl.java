package com.semi.vp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

//answerflg_tblのEntity宣言
@Entity
@Data
@Table(name = "answerflg_tbl")
public class Anserflgtbl {
	//ID
	@Column(name ="ID", nullable = false)
	private int id;
	
	// ユーザーID
	@Column(name = "FK_USER_ID", nullable = false, length = 10)
	private String uid;
	// 問題ID
	@Id
	@Column(name = "TASK_ID", nullable = false, length = 5)
	private String taskid;

	// スコア
	@Column(name = "SCORE", nullable = false)
	private int score = 0;

	// タイム
	@Column(name = "TIME", nullable = false)
	private int time = 0;
}
