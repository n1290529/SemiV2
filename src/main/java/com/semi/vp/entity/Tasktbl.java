package com.semi.vp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

//task_tblのEntity宣言
@Entity
@Data
@Table(name = "task_tbl")
public class Tasktbl {
	// 問題ID
	@Id
	@Column(name = "TASK_ID", nullable = false, unique = true, length = 5)
	private String id;

	// 問題名
	@Column(name = "TITLE", nullable = false, unique = true, length = 45)
	private String title = "0";

	// 難易度
	@Column(name = "DIFFICULTY", nullable = false, length = 1)
	private String dif;

	// 正解率
	@Column(name = "CORRECT_ANSWER", nullable = false)
	private float correct = 0;

	// 難易度
	@Column(name = "ANSWER_RATE", nullable = false)
	private long rate = 0;

	// 平均回答時間
	@Column(name = "TIME_AVERAGE", nullable = false)
	private long timeaverage = 0;

	// 平均点
	@Column(name = "SCORE_AVERAGE", nullable = false)
	private double scoreaverage = 0;

	// 回答者数
	@Column(name = "PEOPLE_NUM", nullable = false)
	private long num = 0;

	// 問題内容、説明
	@Column(name = "TASK_PROFILE", nullable = false, length = 5200)
	private String profile;

	// 回答者数
	@Column(name = "TIME_LIMIT", nullable = false)
	private long timeLimit = 0;
}
