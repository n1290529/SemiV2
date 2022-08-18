package com.semi.vp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
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

	// 生年月日
	@Column(name = "USER_BIRTH")
	private java.sql.Date birth;

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
	
	
//	public Usertbl(String emil, String username, String pass,long sex,long age,String job,String role) {
//		this.email = emil;
//		this.name = username;
//		this.pass = pass;
//		this.sex = sex;
//		this.age = age;
//		this.job = job;
//		this.role = role;
//	}
//	public String getId() {
//		return id;
//	}
//
//	public void setId(String id) {
//		this.id = id;
//	}
//	
//	public String getName() {
//		return name;
//	}
//	public void set(String name) {
//		this.name = name;
//	}
//	
//	public String getPass() {
//		return pass;
//	}
//	public void setPass(String pass) {
//		this.pass = pass;
//	}
//	
//	public long getAge() {
//		return age;
//	}
//	public void setAge(long age) {
//		this.age = age;
//	}
//	
//	public String getJob() {
//		return job;
//	}
//	public void setJob(String job) {
//		this.job =job;
//	}
//	
//	public String getEmail() {
//		return email;
//	}
//	public void setEmail(String email) {
//		this.email = email;
//	}
//	
//	public String getProfile() {
//		return profile;
//	}
//	public void setProfile(String profile) {
//		this.profile = profile;;
//	}
//	
//	public String getFav() {
//		return fav;
//	}
//	public void setFav(String fav) {
//		this.fav = fav;
//	}
//	
//	public String getAddres() {
//		return address;
//	}
//	public void setAddres(String address) {
//		this.address = address;
//	}
//	
//	public String getRole() {
//		return role;
//	}
//	public void setRole(String role) {
//		this.role = role;
//	}
}