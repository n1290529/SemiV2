package com.semi.vp.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.semi.vp.service.TaskService;
import com.semi.vp.service.UsertblService;

@Controller
public class AnswerCheack {
	
	@Autowired
	UsertblService usertblservice;
	@Autowired
	TaskService taskService;
	
	@RequestMapping(value = "/problem/{id}/scoring", method = RequestMethod.GET)
	public String answerCheack(HttpServletRequest request, Model model, @PathVariable String id) {
		HttpSession session = request.getSession();
		SecurityContext securityContext = (SecurityContext) session.getAttribute("SPRING_SECURITY_CONTEXT");
		if (securityContext != null) {
			org.springframework.security.core.Authentication authentication = securityContext.getAuthentication();
			model.addAttribute("user", usertblservice.oneReco(authentication.getName()));
		}
		model.addAttribute("taskName", taskService.getOneRecode(id));
		return "/HTML/006-05_Problem_AnswerCheck";
	}
}
