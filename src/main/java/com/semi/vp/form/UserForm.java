package com.semi.vp.form;

import java.sql.Date;

import javax.validation.constraints.NotBlank;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class UserForm {
	// 名前
	@NotBlank
	private String name;

	// 生年月日
	@NotBlank
	private Date birth;

	// 性別
	@NotBlank
	private long sex;

	// 仕事
	private String job;

	// お気に入りのジャンル
	private String fav;

	// 自己紹介
	private String profile;

	private MultipartFile imgFile;
}