package com.semi.vp.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


//User_tblのController
@Controller
public class Game_creation_copy_Controller {
		/**
	 * ユーザー情報一覧画面を表示
	 * @param model Model
	 * @return ユーザー情報一覧画面のHTML
	 */
	@RequestMapping(value = "/HTML/004-02_Game_creation_copy", method = RequestMethod.GET)	
	public String displayList(Model model) {
	  	return "HTML/004-02_Game_creation_copy";
	}
	
}