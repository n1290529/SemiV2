package com.semi.vp.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.semi.vp.entity.Projecttbl;
import com.semi.vp.form.ProjectConfigForm;

import com.semi.vp.service.ProjectService;
import com.semi.vp.service.UsertblService;

@Controller
public class Entry_verification_Controller {
	@Autowired
	UsertblService usertblservice;
	@Autowired
	ProjectService projectservice;


	/**
	 * プロジェクトの設定を行うページ
	 * Projecttbl,ProjectRepository,ProjectServiceを主に使用
	 * @param request Http
	 * @param model
	 * model("project") DBのproject_tblをHTMLに表示する為に使用。
	 * @param title /myfolderから遷移した際にプロジェクトのタイトルをGETで取得
	 * @param form ProjectConfigForm
	 * @return HTML/004-03_Entry_verification
	 */
	@RequestMapping(value = "/projectconfig/{title}", method = RequestMethod.GET)
	public String displayList2(HttpServletRequest request, Model model,@PathVariable String title) {
		HttpSession session = request.getSession();
		SecurityContext securityContext = (SecurityContext) session.getAttribute("SPRING_SECURITY_CONTEXT");
		org.springframework.security.core.Authentication authentication = securityContext.getAuthentication();
		//サイドバー用
		System.out.println("UNKOOOO"+authentication.getName());
		model.addAttribute("user", usertblservice.oneReco(authentication.getName()));
		
		//セッション(email)からusertblのユーザーIDを取得,URLのtitleと併せてprojectレコードを一意検索
		String userId=usertblservice.oneReco(authentication.getName()).getId();
		model.addAttribute("project",projectservice.getProjectOneReco(userId,title));
		
		return "HTML/004-03_Entry_verification";
	}
	
	/**
	 * 
	 * @param request HHTP
	 * @param model
	 * @param title /projectconfig/{title}から遷移した際にGETで取得
	 * @param form　ProjectConfigForm
	 * @return　redirect:/myfolder
	 */
	@RequestMapping(value = "/projectconfig/{title}/edit", method = RequestMethod.PUT)
	public String displayList3(HttpServletRequest request, Model model,@PathVariable String title,@Valid @ModelAttribute("form") ProjectConfigForm form) {
		HttpSession session = request.getSession();
		SecurityContext securityContext = (SecurityContext) session.getAttribute("SPRING_SECURITY_CONTEXT");
		org.springframework.security.core.Authentication authentication = securityContext.getAuthentication();
		//サイドバー用
		model.addAttribute("user", usertblservice.oneReco(authentication.getName()));
		
		//ユーザーID取得
		String userId=usertblservice.oneReco(authentication.getName()).getId();	
		//USER_IDとtitleからprojecttblのレコードを取得
		Projecttbl project=projectservice.getProjectOneReco(userId,title);
		model.addAttribute("project",project);
		
		String beforeTitle =project.getName();
		String afterTitle =form.getName();
		//ディレクトリ名変更用の関数
		usertblservice.changeProjectDir(userId,beforeTitle,afterTitle);
		
		projectservice.projectUpdate(form,project.getId());
		
		return "redirect:/myfolder";
	}
	
}
