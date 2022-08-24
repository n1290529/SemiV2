package com.semi.vp.controller;





import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import com.semi.vp.service.UserDetailsServiceImpl;


@Controller
public class MainController {

	
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