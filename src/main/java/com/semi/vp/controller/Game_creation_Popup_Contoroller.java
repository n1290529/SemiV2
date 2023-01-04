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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.semi.vp.service.ProjectService;
import com.semi.vp.service.UsertblService;

@Controller
public class Game_creation_Popup_Contoroller {
	@Autowired
	UsertblService usertblservice;
	@Autowired
	ProjectService projectservice;
	
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
			// TODO 自動生成された catch ブロック
			e.printStackTrace();
		}
		return "HTML/006-03_Game_creation_problem";
	}
	
}
