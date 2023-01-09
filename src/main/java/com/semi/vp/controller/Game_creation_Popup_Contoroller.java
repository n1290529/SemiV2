package com.semi.vp.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.semi.vp.service.AnswerflgService;
import com.semi.vp.service.ProjectService;
import com.semi.vp.service.UsertblService;

import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Engine;
import org.graalvm.polyglot.Source;

@Controller
public class Game_creation_Popup_Contoroller {
	@Autowired
	UsertblService usertblservice;
	@Autowired
	ProjectService projectservice;
	@Autowired
	AnswerflgService answerflgservice;

	/**
	 * 問題解答画面をポップアップに表示する 起動時にタイムスタンプとフラグをANSWERflgtblに格納
	 * 
	 * @param request
	 * @param model
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/problems/{id}/slove", method = RequestMethod.GET)
	public String displayList(HttpServletRequest request, Model model, @PathVariable String id) {
		HttpSession session = request.getSession();
		SecurityContext securityContext = (SecurityContext) session.getAttribute("SPRING_SECURITY_CONTEXT");
		if (securityContext != null) {
			org.springframework.security.core.Authentication authentication = securityContext.getAuthentication();
			model.addAttribute("user", usertblservice.oneReco(authentication.getName()));
		}
		Path path = Paths.get("./src/main/resources/static/DEFAULT_DATA/save.json");

		String content;
		try {
			content = Files.readString(path);
			model.addAttribute("inputJson", content);
		} catch (IOException e) {
		}
		//answerflgservice.answerCreate("test03","A001");

		return "HTML/006-03_Game_creation_problem";
	}

	/**
	 * Blocklyコードの受信 Blocklyコードのチェック 結果の保存
	 * 
	 * @param data
	 * @param id
	 */
	@RequestMapping("/problems/{id}/check")
	@ResponseBody
	public void responseTest(@RequestBody String data, @PathVariable String id) {

		try (Engine engine = Engine.create()) {
			Source source = Source.create("js", "function sum(a, b) { return a + b }");
			Source source2 = Source.create("js", "sum(21, 22)");
			try (Context context = Context.newBuilder().engine(engine).build()) {
				context.eval(source);
				int v = context.eval(source2).asInt();
				System.out.println(v);
			}
		}

		System.out.println("hello");
		System.out.println(data);
	}
}
