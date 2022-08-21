package com.semi.vp.controller;



import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.semi.vp.form.SignupForm;

import com.semi.vp.service.UserDetailsServiceImpl;
import com.semi.vp.service.UsertblService;


@Controller
public class MainController {

//	@GetMapping("/signin")
//	public String index() {
//		return "HTML/001-01_Sign_in";
//	}

	@RequestMapping(value = "/signin", method = RequestMethod.GET)
	public String index(@RequestParam(value = "error", required = false)String test,Model model) {
		model.addAttribute("error",test);
		model.addAttribute("iserror",false);
		
	    return "HTML/001-01_Sign_in";
	}

//テスト用------------------
	@GetMapping("/common")
	public String common() {
		return "common";
	}
	@GetMapping("/admin")
	public String admin() {
		return "admin";
	}

	@Autowired
	UserDetailsServiceImpl udsi;
	@Autowired
	UserDetailsService uds;

	@GetMapping("/user")
	public String user(HttpServletRequest request, Model model) {
		HttpSession session = request.getSession();
		SecurityContext securityContext = (SecurityContext) session.getAttribute("SPRING_SECURITY_CONTEXT");
		org.springframework.security.core.Authentication authentication = securityContext.getAuthentication();
		
		System.out.println(authentication);
		System.out.print(udsi.oneReco(authentication.getName()));
		
		model.addAttribute("udsi", udsi.oneReco(authentication.getName()));
		return "user";
	}
	
//-------------------
	
}