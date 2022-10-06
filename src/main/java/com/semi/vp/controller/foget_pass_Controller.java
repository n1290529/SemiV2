package com.semi.vp.controller;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.semi.vp.form.RegisterForm;

@Controller
public class foget_pass_Controller {
	/**
	 * ユーザー情報一覧画面を表示
	 * 
	 * @param model Model
	 * @return ユーザー情報一覧画面のHTML
	 */
	//入力前
	@RequestMapping(value = "/forgetpass", method = RequestMethod.GET)
	public String displayList(Model Model,@Valid @ModelAttribute("form") RegisterForm form, BindingResult result) {

		if(Model.getAttribute("key1")!=null) {

			Model.addAttribute("value1",(String) Model.getAttribute("key1"));
		}
		
		return "HTML/001-03_foget_pass";
	}
	//入力後
	@RequestMapping(value = "/registerpass", method = RequestMethod.PUT)
	public String displayList2(Model Model,@Valid @ModelAttribute("form") RegisterForm form, BindingResult result,RedirectAttributes redirectAttributes) {
		 		 
		
		if(result.hasErrors()) {
			System.out.println(result.hasErrors());
			redirectAttributes.addFlashAttribute("key1",result.getFieldError("email").getDefaultMessage());
			System.out.println("notblannk");
			return "redirect:/forgetpass";
		}
		
		return "redirect:/forgetpass";
	}
}