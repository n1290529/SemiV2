package com.semi.vp.form;

import java.sql.Date;

import lombok.Data;

@Data
public class UserForm {
		// 名前
		private String name;

		//生年月日
		private Date birth;

		// 性別
		private long sex;

		// 仕事
		private String job;

		// お気に入りのジャンル
		private String fav;

		// 自己紹介
		private String profile;
}