package com.semi.vp.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.Data;

//answerflg_tblのEntity宣言
@Entity
@Data
@Table(name = "answerflg_tbl")
public class Answerflgtbl {
	//ID
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name ="ID", nullable = false)
	private int id;
	
	// ユーザーID
	@Column(name = "FK_USER_ID", nullable = false, length = 10)
	private String uid;
	// 問題ID
	@Column(name = "TASK_ID", nullable = false, length = 5)
	private String taskid;

	// スコア
	@Column(name = "SCORE", nullable = false)
	private int score = 0;

	// 開始時間
	@Column(name = "START_TIME")
	@CreationTimestamp private LocalDateTime starttime;
	//終了時間
	@Column(name = "END_TIME")
	@UpdateTimestamp private LocalDateTime endtime;
}
