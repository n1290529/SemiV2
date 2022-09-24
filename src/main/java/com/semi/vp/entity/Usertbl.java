package com.semi.vp.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

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
	@Column(name = "USER_ID")
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String id;

	// 名前
	@Column(name = "USER_NAME")
	private String name;

	// パスワード
	@Column(name = "USER_PASS")
	private String pass;

	// 性別
	@Column(name = "USER_SEX")
	private long sex;

	// 生年月日
	@Column(name = "USER_BIRTH")
	private java.sql.Date birth;

	// 仕事
	@Column(name = "USER_JOB")
	private String job;

	// メアド
	@Column(name = "USER_EMAIL")
	private String email;

	// 自己紹介
	@Column(name = "USER_PROFILE")
	private String profile;

	// お気に入りのジャンル
	@Column(name = "USER_FAV")
	private String fav;

	// 登録日時
	@Column(name = "USER_ENTRY")
	@CreationTimestamp
	private LocalDateTime entry;

	// ゲームアドレス
	@Column(name = "USER_GAME_ADDRESS")
	private String address;

	// ログイン状況
	@Column(name = "USER_ROLE")
	private String role;

}