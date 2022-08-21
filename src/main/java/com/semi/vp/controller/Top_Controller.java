package com.semi.vp.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.semi.vp.service.UserDetailsServiceImpl;

@Controller
public class Top_Controller {
	@Autowired
	UserDetailsServiceImpl userservise;
	/**
	 * ユーザー情報一覧画面を表示
	 * 
	 * @param model Model
	 * @return ユーザー情報一覧画面のHTML
	 */
	@RequestMapping(value = "/top", method = RequestMethod.GET)
	public String displayList(HttpServletRequest request, Model model) {
		try {
			HttpSession session = request.getSession();
			SecurityContext securityContext = (SecurityContext) session.getAttribute("SPRING_SECURITY_CONTEXT");
			org.springframework.security.core.Authentication authentication = securityContext.getAuthentication();
			System.out.println("aaaaa"+authentication.getName());
			model.addAttribute("user", userservise.oneReco(authentication.getName()));			
		} catch (Exception e) {
			// TODO: handle exception
		}
		return "HTML/002-01-01_Top";
	}
}
