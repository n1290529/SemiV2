package com.semi.vp.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.semi.vp.form.UserForm;
import com.semi.vp.service.UserDetailsServiceImpl;

@Controller
public class User_profile_Controller {
	@Autowired
	UserDetailsServiceImpl userservise;
	/**
	 * ユーザー情報一覧画面を表示
	 * 
	 * @param model Model
	 * @return ユーザー情報一覧画面のHTML
	 */
	@RequestMapping(value = "/profile", method = RequestMethod.GET)
	public String displayList(HttpServletRequest request, Model model) {
		HttpSession session = request.getSession();
		SecurityContext securityContext = (SecurityContext) session.getAttribute("SPRING_SECURITY_CONTEXT");
		org.springframework.security.core.Authentication authentication = securityContext.getAuthentication();
		
		model.addAttribute("user", userservise.oneReco(authentication.getName()));
		return "HTML/005-01_User_profile";
	}
	
	@RequestMapping(value = "/profile/edit", method = RequestMethod.PUT)
	public String edit(HttpServletRequest request, Model model, @Validated @ModelAttribute UserForm userForm) {
		return "redirect:/profile";
	}
}
