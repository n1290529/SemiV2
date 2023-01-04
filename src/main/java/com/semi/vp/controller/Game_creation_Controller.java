package com.semi.vp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.semi.vp.form.BlocklyJson;
import com.semi.vp.service.ProjectService;
import com.semi.vp.service.UsertblService;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

//User_tblのController
@Controller
@RequestMapping
public class Game_creation_Controller {
	@Autowired
	UsertblService usertblservice;
	@Autowired
	ProjectService projectservice;

	/**
	 * ゲーム制作画面コントローラー(default)
	 * 
	 * @param request セッション情報
	 * @param model   モデル
	 * @return ゲーム制作画面
	 */
	@GetMapping(value = "/create")
	public String createProject(HttpServletRequest request, Model model) {
		try {
			HttpSession session = request.getSession();
			SecurityContext securityContext = (SecurityContext) session.getAttribute("SPRING_SECURITY_CONTEXT");
			org.springframework.security.core.Authentication authentication = securityContext.getAuthentication();
			model.addAttribute("user", usertblservice.oneReco(authentication.getName()));

		} catch (Exception e) {
		}
		Path path = Paths.get("./src/main/resources/static/DEFAULT_DATA/save.json");
		String content;
		try {
			content = Files.readString(path);
			model.addAttribute("inputJson", content);
		} catch (IOException e) {
		}
		return "HTML/004-02_Game_creation";
	}

	/**
	 * ゲーム制作画面コントローラー(タイトル指定)
	 * 
	 * @param request セッション情報
	 * @param model   モデル
	 * @param title   プロジェクトタイトル
	 * @return ゲーム制作画面
	 */
	@GetMapping(value = "/create/{title}")
	public String createTitleProject(HttpServletRequest request, Model model, @PathVariable String title) {
		try {
			HttpSession session = request.getSession();
			SecurityContext securityContext = (SecurityContext) session.getAttribute("SPRING_SECURITY_CONTEXT");
			org.springframework.security.core.Authentication authentication = securityContext.getAuthentication();
			model.addAttribute("user", usertblservice.oneReco(authentication.getName()));

			String userId = usertblservice.oneReco(authentication.getName()).getId();
			Path path = Paths.get("." + projectservice.getProjectOneReco(userId, title).getAddress() + "/save.json");
			try {
				String content = Files.readString(path);
				model.addAttribute("inputJson", content);
			} catch (Exception e) {
			}
		} catch (Exception e) {
		}

		return "HTML/004-02_Game_creation";
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

			// USERs直下にuserId名のディレクトリーが存在するか確認。ない場合は新規作成 いらないかも
			// usertblservice.searchUserDir(userId);

			// userIdとtitleからDB上に一意のレコードが存在するか確認し、更新または登録を行う
			projectservice.setProjectJson(userId, title, new ObjectMapper().writeValueAsString(json));
		} catch (Exception e) {
			System.out.println(e);
		}
		return json;
	}

}