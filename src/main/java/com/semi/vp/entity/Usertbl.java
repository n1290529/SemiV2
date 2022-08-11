package com.semi.vp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_tbl")
public class Usertbl {

	// ID
	@Id
	@Column(name = "USER_ID", nullable = false, unique = true, length = 10)
	// @GeneratedValue(strategy = GenerationType.IDENTITY)
	private String id;

	// 名前
	@Column(name = "USER_NAME", nullable = false, length = 50)
	private String name;

	// パスワード
	@Column(name = "USER_PASS", nullable = false, length = 255)
	private String pass;

	// 性別
	@Column(name = "USER_SEX", nullable = false)
	private long sex;

	// 年齢
	@Column(name = "USER_AGE")
	private long age;

	// 仕事
	@Column(name = "USER_JOB", length = 100)
	private String job;

	// メアド
	@Column(name = "USER_EMAIL", nullable = false, unique = true, length = 319)
	private String email;

	// 自己紹介
	@Column(name = "USER_PROFILE", length = 400)
	private String profile;

	// お気に入りのジャンル
	@Column(name = "USER_FAV", length = 45)
	private String fav;

	// 登録日時
	@Column(name = "USER_ENTRY", nullable = false)
	private java.sql.Date entry;

	// ゲームアドレス
	@Column(name = "USER_GAME_ADDRESS", nullable = false, length = 100)
	private String address;

	// ログイン状況
	@Column(name = "USER_ROLE", nullable = false)
	private String role;
}