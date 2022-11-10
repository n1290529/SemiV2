package com.semi.vp.dto;

import java.time.LocalDateTime;

import com.semi.vp.entity.Projecttbl;

import lombok.Data;

@Data
public class ProjectDto {
	// プロジェクトID
	private String id;

	// 外部のユーザーID
	private String uid;

	// プロジェクト名
	private String name;

	// プロジェクトのpath
	private String address;

	// プロジェクトのジャンル
	private String genre;

	// プロジェクト公開非公開
	private boolean openflg;

	// ダウンロード許可
	private boolean dlflg;

	// プロジェクトを最後に触った時間
	private LocalDateTime lasttime;

	// プロジェクトをアップロードした時間
	private LocalDateTime uptime;

	// プロジェクトを作成した時間
	private LocalDateTime maketime;

	// 閲覧数
	private int browcnt;

	// DL数
	private int dlcnt;

	// プロジェクトの紹介文
	private String intro;

	public static ProjectDto of(Projecttbl entty) {
		ProjectDto projectDto = new ProjectDto();
		projectDto.setId(entty.getId());
		projectDto.setUid(entty.getUid());
		projectDto.setName(entty.getName());
		projectDto.setAddress(entty.getAddress());
		projectDto.setGenre(entty.getGenre());
		projectDto.setOpenflg(entty.isOpenflg());
		projectDto.setDlflg(entty.isDlflg());
		projectDto.setLasttime(entty.getLasttime());
		projectDto.setUptime(entty.getUptime());
		projectDto.setMaketime(entty.getMaketime());
		projectDto.setBrowcnt(entty.getBrowcnt());
		projectDto.setDlcnt(entty.getDlcnt());
		projectDto.setIntro(entty.getIntro());
		return projectDto;
	}
}
