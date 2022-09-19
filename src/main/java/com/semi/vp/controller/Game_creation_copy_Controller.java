package com.semi.vp.controller;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.semi.vp.form.BlocklyJson;
import com.semi.vp.service.ProjectService;
import com.semi.vp.service.UsertblService;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

//User_tblのController
@Controller
@RequestMapping
public class Game_creation_copy_Controller {
	@Autowired
	UsertblService usertblservice;
	@Autowired
	ProjectService projectservice;

	@GetMapping(value = "/create")
	public String createProject() {
		return "HTML/004-02_Game_creation_copy";
	}

	@GetMapping(value = "/create/{title}")
	public String createTitleProject() {
		// savedataの読み込み処理

		return "HTML/004-02_Game_creation_copy";
	}

	/**
	 * Ajax()でjsonとsavenameをpostで受け取った際の処理を行うコントローラー
	 * 
	 * @param json    各種情報保存form
	 * @param request セッション情報
	 * @return json 各種情報を画面遷移せずに返す
	 */
	@PostMapping("/create/send")
	@ResponseBody
	public BlocklyJson createSendProject(@RequestBody BlocklyJson json, HttpServletRequest request) {

		try {
			// セッション情報の取得
			HttpSession session = request.getSession();
			SecurityContext securityContext = (SecurityContext) session.getAttribute("SPRING_SECURITY_CONTEXT");
			org.springframework.security.core.Authentication authentication = securityContext.getAuthentication();

			String userId = usertblservice.oneReco(authentication.getName()).getId();
			String title = json.getSavename();

			// USERs直下にuserId名のディレクトリーが存在するか確認。ない場合は新規作成
			usertblservice.searchUserDir(userId);

			// userIdとtitleからDB上に一意のレコードが存在するか確認

			if (projectservice.existOneReco(userId, title)) {
				// レコードが存在する場合の処理

				// USERs/userid/プロジェクト名が存在するかを確認し、存在する場合jsonを上書き保存。存在しない場合dir作成した後jsonを保存。
				// jsonファイルはsave.jsonで固定
				usertblservice.searchProjctDir(userId, title, json.getBlockly());
				// DB更新処理
				projectservice.projectUpdateLasttime(userId, title);
			} else {
				// レコードが存在しない場合の処理

				// DBにプロジェクトレコードを登録する為の関数
				projectservice.projectCreate(userId, title);
				usertblservice.searchProjctDir(userId, title, json.getBlockly());
			}

		} catch (Exception e) {
			System.out.println(e);
//			System.out.println("セッションが読み込めていない可能性が高い");
		}
		return json;
	}

}