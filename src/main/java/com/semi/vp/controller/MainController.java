package com.semi.vp.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.semi.vp.form.UserRequest;
import com.semi.vp.service.UserDetailsServiceImpl;
import com.semi.vp.service.UsertblService;

@Controller
public class MainController {

	@GetMapping("/")
	public String index() {
		return "HTML/001-01_Sign_in";
	}

	@GetMapping("/common")
	public String common() {
		return "common";
	}

//	@GetMapping("/user")
//	public String user() {
//		return "user";
//	}
	@Autowired
	UserDetailsServiceImpl udsi;

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

	@GetMapping("/admin")
	public String admin() {
		return "admin";
	}

	@RequestMapping(value = "/signup", method = RequestMethod.GET)
	public String displayAdd(Model model) {
		// 入力フォームで取り扱うオブジェクトを設定
		model.addAttribute("userRequest", new UserRequest());
		// 表示するHTMLを指定
		return "HTML/001-02_Sign_up";
	}

	/**
	 * ユーザー新規登録
	 * 
	 * @param userRequest リクエストデータ
	 * @param model       Model
	 * @return ユーザー情報一覧画面
	 */
	@Autowired
	private UsertblService userService;

	@RequestMapping(value = "/user/create", method = RequestMethod.POST)
	public String create(@Validated @ModelAttribute UserRequest userRequest, BindingResult result, Model model,HttpServletRequest request) {

		if (result.hasErrors()) {
			// 入力チェックエラーの場合
			List<String> errorList = new ArrayList<String>();
			for (ObjectError error : result.getAllErrors()) {
				errorList.add(error.getDefaultMessage());
			}
			model.addAttribute("validationError", errorList);
			System.out.println("入力チェックエラー");
			return "common";
		}
		// ユーザー情報の登録
		if (userService.check(userRequest.getF_email())) {
			System.out.println("既に存在するメールアドレスです。");
			return "redirect:HTML/001-02_Sign_up";
		} else {
			System.out.println(userRequest.getF_email());
			userService.create(userRequest);
			
			try {
	            request.login(userRequest.getF_email(), userRequest.getF_password());
	        } catch (ServletException e) {
	            e.printStackTrace();
	        }
			return "redirect:/common";
		}

	}
}
