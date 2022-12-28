package com.semi.vp.form;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class ProjectConfigForm {
	//名前
	@NotEmpty
	@Size(max = 15)
	private String name;
	
	//紹介文
	@Size(max=2000)
	private String intro;
	
	//オープンフラグ
	private boolean openflg;
	
	//ダウンロードフラグ
	private boolean dlflg;
	
	//ゲームジャンル1
	private String genre1;
	
	//ゲームジャンル2
	private String genre2;
	
	//プロジェクトサムネイル
	private MultipartFile imgFile;
}
