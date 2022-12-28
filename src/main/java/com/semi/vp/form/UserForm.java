package com.semi.vp.form;

import java.sql.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.springframework.web.multipart.MultipartFile;

import com.sun.istack.NotNull;

import lombok.Data;

@Data
public class UserForm {
	// 名前
	@NotEmpty
	@Size(max = 30)
	private String name;

	// 生年月日
	@NotNull
	private Date birth;

	// 性別
	@NotNull
	private long sex;

	// 仕事
	@NotEmpty
	private String job;

	// お気に入りのジャンル
	private String fav;

	// 自己紹介
	private String profile;

	private MultipartFile imgFile;
}