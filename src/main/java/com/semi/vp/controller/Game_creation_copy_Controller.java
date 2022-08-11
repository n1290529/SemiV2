package com.semi.vp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.semi.vp.entity.Followtbl;
import com.semi.vp.entity.Projecttbl;
import com.semi.vp.entity.Usertbl;
import com.semi.vp.service.FollowtblService;
import com.semi.vp.service.ProjectService;
import com.semi.vp.service.UsertblService;

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