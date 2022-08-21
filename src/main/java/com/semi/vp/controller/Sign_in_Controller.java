package com.semi.vp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class Sign_in_Controller {
		/**
	 * ユーザー情報一覧画面を表示
	 * @param model Model
	 * @return ユーザー情報一覧画面のHTML
	 */
	@RequestMapping(value = "/signin", method = RequestMethod.GET)
	public String index(@RequestParam(value = "error", required = false)String Error,Model model) {
		model.addAttribute("error",Error);
		model.addAttribute("iserror",false);
		
	    return "HTML/001-01_Sign_in";
	}
}
