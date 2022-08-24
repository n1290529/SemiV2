package com.semi.vp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class Sign_in_Controller {
	/**
	 * サインイン画面作成
	 * @param Error　HTML側でエラーが存在するかを確認する為の変数
	 * Errorが!=nullの場合,${session['SPRING_SECURITY_LAST_EXCEPTION'].message}が呼び出される
	 * 
	 * @param model
	 * @return　HTML/001-01_Sign_in
	 */
	@RequestMapping(value = "/signin", method = RequestMethod.GET)
	public String index(@RequestParam(value = "error", required = false) String Error, Model model) {
		model.addAttribute("error", Error);
		model.addAttribute("iserror", false);

		return "HTML/001-01_Sign_in";
	}
}
