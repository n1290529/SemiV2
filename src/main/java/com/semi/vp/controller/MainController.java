package com.semi.vp.controller;



import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

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
	UsertblService userService;

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
	//アカウント登録前
	@RequestMapping(value = "/signup", method = RequestMethod.GET)
	public String displayAdd(@ModelAttribute("form") SignupForm form) {
		return "HTML/001-02_Sign_up";
	}
	//アカウント登録後
	@RequestMapping(value = "/signup", method = RequestMethod.POST)
	public String displayAdd2(Model Model,@Valid @ModelAttribute("form") SignupForm form, BindingResult result) {
		
		//emai重複用変数
		Model.addAttribute("emailC",false);
		
		Model.addAttribute("duplication","このemailは既に存在します");
//		Model.addAttribute("agemsg","年齢が選択されていません");
		Model.addAttribute("birthmsg","生年月日入力されていません");
		Model.addAttribute("sexmsg","性別が選択されていません");
		Model.addAttribute("jobmsg","仕事がありません");
		Model.addAttribute("checkmsg","利用規約に同意してください");
		
		if(result.hasErrors()) {
			return "HTML/001-02_Sign_up";
		}
		
		//アカウント作成,Form経由でUsertblServiceのuserRegistrationを使用
		//emailが既に存在する場合falseが返ってくる
		if(!userService.userRegistration(form)) {
			Model.addAttribute("emailC",true);
			return "HTML/001-02_Sign_up";
		}else {
			return "redirect:/top";
		}
		
		
	}
	
}
