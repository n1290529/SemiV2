package com.semi.vp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class Email_re_regist_Controller {
		/**
	 * ユーザー情報一覧画面を表示
	 * @param model Model
	 * @return ユーザー情報一覧画面のHTML
	 */
	@RequestMapping(value = "/HTML/001-05_Email-re-regist", method = RequestMethod.GET)	
	public String displayList(Model model) {
	  	return "HTML/001-05_Email-re-regist";
	}
}
