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
	// 問題ID
	@Id
	@Column(name = "TASK_ID", nullable = false, length = 5)
	private String id;

	// ユーザーID
	@Column(name = "FK_USER_ID", nullable = false, length = 10)
	private String uid;

	// スコア
	@Column(name = "SCORE", nullable = false)
	private int score = -1;

	// タイム
	@Column(name = "TIME", nullable = false)
	private int time = -1;
}
