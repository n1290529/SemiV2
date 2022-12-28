package com.semi.vp.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.semi.vp.form.ProjectConfigForm;

import lombok.Data;

//porject_tblのEntity宣言
@Entity
@Data
@Table(name = "project_tbl")
public class Projecttbl {

//プロジェクトID
	@Id
	@Column(name = "PROJ_ID", nullable = false, unique = true, length = 11)
	private String id;

//外部のユーザーID
	@Column(name = "FK_USER_ID", nullable = false, length = 10)
	private String uid;

//プロジェクト名
	@Column(name = "PROJ_NAME", nullable = false, length = 15)
	private String name;

//プロジェクトのpath
	@Column(name = "PROJ_ADDREES", nullable = false, unique = true, length = 100)
	private String address;

//プロジェクトのジャンル
	@Column(name = "PROJ_GENRE")
	private String genre = "0,0";

//プロジェクト公開非公開
	@Column(name = "PROJ_OPEN_FLG", nullable = false)
	private boolean openflg;
	
//ダウンロード許可
	@Column(name="PROJ_DL_FLG",nullable = false)
	private boolean dlflg;

//プロジェクトを最後に触った時間
	@Column(name = "PROJ_LAST_TIME")
	@UpdateTimestamp private LocalDateTime lasttime;

	// プロジェクトをアップロードした時間
	@Column(name = "PROJ_UP_TIME")
	private LocalDateTime uptime;

	// プロジェクトを作成した時間
	@Column(name = "PROJ_MAKE_TIME")
	@CreationTimestamp private LocalDateTime maketime;

	// 閲覧数
	@Column(name = "PROJ_BROW_CNT")
	private int browcnt = 0;

	// DL数
	@Column(name = "PROJ_DL_CNT")
	private int dlcnt = 0;

	// プロジェクトの紹介文
	@Column(name = "PROJ_INTRO")
	private String intro;
	
	/**
	 * ProjectConfigFormをProjecttblエンティティに変換する処理
	 * 
	 * @param ProjectConfigForm
	 * @return Projecttbl
	 */
	public Projecttbl of(ProjectConfigForm form) {
		setName(form.getName());
		setIntro(form.getIntro());
		setOpenflg(form.isOpenflg());
		setDlflg(form.isDlflg());
		setGenre(form.getGenre1() + "," + form.getGenre2());
		return this;
	}
}