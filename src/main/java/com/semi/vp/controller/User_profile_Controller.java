package com.semi.vp.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.semi.vp.form.UserForm;
import com.semi.vp.service.UsertblService;

@Controller
public class User_profile_Controller {
	@Autowired
	UsertblService usertblservise;

	/**
	 * ユーザー情報一覧画面を表示
	 * 
	 * @param model Model
	 * @return 005-01_User_profile
	 */
	@RequestMapping(value = "/profile", method = RequestMethod.GET)
	public String profile(HttpServletRequest request, Model model) {
		HttpSession session = request.getSession();
		SecurityContext securityContext = (SecurityContext) session.getAttribute("SPRING_SECURITY_CONTEXT");
		org.springframework.security.core.Authentication authentication = securityContext.getAuthentication();

		model.addAttribute("user", usertblservise.oneReco(authentication.getName()));
		return "HTML/005-01_User_profile";
	}

	/**
	 * ユーザー情報更新
	 * 
	 * @param request  セッション情報
	 * @param userForm 更新情報
	 * @return HTML/005-01_User_profileに戻る
	 */
	@RequestMapping(value = "/profile/edit", method = RequestMethod.PUT)
	public String profileEdit(HttpServletRequest request, @Valid @ModelAttribute("form") UserForm form) {
		HttpSession session = request.getSession();
		SecurityContext securityContext = (SecurityContext) session.getAttribute("SPRING_SECURITY_CONTEXT");
		org.springframework.security.core.Authentication authentication = securityContext.getAuthentication();

		usertblservise.UpdateAccount(usertblservise.oneReco(authentication.getName()).getId(), form);
		return "redirect:/profile";
	}
}
