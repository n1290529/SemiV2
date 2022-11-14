package com.semi.vp.dto;

import java.time.LocalDateTime;

import com.semi.vp.entity.Usertbl;

import lombok.Data;

@Data
public class UserDto {
	// ID
	private String id;

	// 名前
	private String name;

	// 性別
	private long sex;

	// 生年月日
	private java.sql.Date birth;

	// 仕事
	private String job;

	// 自己紹介
	private String profile;

	// お気に入りのジャンル
	private String fav;

	// 登録日時
	private LocalDateTime entry;

	/**
	 * UsertblエンティティをUsertblDtoに変換
	 * 
	 * @param usertbl Usertblエンティティ
	 * @return UsertblDto
	 */
	public static UserDto of(Usertbl usertbl) {
		UserDto dto = new UserDto();
		dto.setId(usertbl.getId());
		dto.setName(usertbl.getName());
		dto.setSex(usertbl.getSex());
		dto.setBirth(usertbl.getBirth());
		dto.setJob(usertbl.getJob());
		dto.setProfile(usertbl.getProfile());
		dto.setFav(usertbl.getFav());
		dto.setEntry(usertbl.getEntry());
		return dto;
	}
}
