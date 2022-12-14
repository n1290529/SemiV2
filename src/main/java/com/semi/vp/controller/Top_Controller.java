package com.semi.vp.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.semi.vp.service.UsertblService;

@Controller
public class Top_Controller {
	@Autowired
	UsertblService usertblservice;

	@RequestMapping(value = "/top", method = RequestMethod.GET)
	public String displayList(HttpServletRequest request, Model model) {

		HttpSession session = request.getSession();
		SecurityContext securityContext = (SecurityContext) session.getAttribute("SPRING_SECURITY_CONTEXT");
		System.out.println(securityContext != null);
		if (securityContext != null) {
			org.springframework.security.core.Authentication authentication = securityContext.getAuthentication();
			System.out.println("こんにちは" + authentication.getName());
			model.addAttribute("user", usertblservice.oneReco(authentication.getName()));
		}
		return "HTML/002-01-01_Top";
	}
}
