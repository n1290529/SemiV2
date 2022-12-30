package com.semi.vp.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.semi.vp.form.BlocklyJson;
import com.semi.vp.service.ProjectService;
import com.semi.vp.service.UsertblService;

@Controller
public class MainController {

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
	UsertblService usertblservice;
	@Autowired
	UserDetailsService uds;
	@Autowired
	ProjectService projectService;

	@GetMapping("/user")
	public String user(HttpServletRequest request, Model model) {
		HttpSession session = request.getSession();
		SecurityContext securityContext = (SecurityContext) session.getAttribute("SPRING_SECURITY_CONTEXT");
		org.springframework.security.core.Authentication authentication = securityContext.getAuthentication();

		System.out.println(authentication);
		System.out.print(usertblservice.oneReco(authentication.getName()));

		model.addAttribute("udsi", usertblservice.oneReco(authentication.getName()));
		return "user";
	}

	@GetMapping("/Test/{id}")
	public String TestCot(HttpServletRequest request, @PathVariable String id, Model model) throws IOException {
//	public HttpEntity<byte[]> TestCot(HttpServletRequest request,@PathVariable String id, Model model) throws IOException {
		HttpSession session = request.getSession();
		SecurityContext securityContext = (SecurityContext) session.getAttribute("SPRING_SECURITY_CONTEXT");
		if (securityContext != null) {
			org.springframework.security.core.Authentication authentication = securityContext.getAuthentication();
			model.addAttribute("user", usertblservice.oneReco(authentication.getName()));
		}

		return "Test";
	}

	@RequestMapping("/getProfileImg/{id}")
	@ResponseBody
	public HttpEntity<byte[]> getProfileImg(@PathVariable String id) {
		File fileImg = new File("." + usertblservice.searchId(id).getAddress() + "/ProfileImage.png");
		byte[] byteImg = null;
		HttpHeaders headers = null;
		try {
			// バイト列に変換
			byteImg = Files.readAllBytes(fileImg.toPath());
			headers = new HttpHeaders();

			// Responseのヘッダーを作成
			headers.setContentType(MediaType.IMAGE_PNG);
			headers.setContentLength(byteImg.length);
		} catch (IOException e) {
			return null;
		}
		return new HttpEntity<byte[]>(byteImg, headers);
	}

	@RequestMapping("/getProjectImg/{id}")
	@ResponseBody
	public HttpEntity<byte[]> getProjectImg(HttpServletRequest request, @PathVariable String id) {
		File fileImg = new File("." + projectService.searchId(id).getAddress() + "/thumbnail.png");
		byte[] byteImg = null;
		HttpHeaders headers = null;
		try {
			// バイト列に変換
			byteImg = Files.readAllBytes(fileImg.toPath());
			headers = new HttpHeaders();

			// Responseのヘッダーを作成
			headers.setContentType(MediaType.IMAGE_PNG);
			headers.setContentLength(byteImg.length);
		} catch (IOException e) {
			return null;
		}
		return new HttpEntity<byte[]>(byteImg, headers);
	}

	@RequestMapping("/responseTest")
	@ResponseBody
	public String responseTest(@RequestBody String data) {
		System.out.println("hello");
		System.out.println(data);
		return "通信完了";
	}

	/**
	 * 問題読み込み
	 * @param dataType
	 * @return
	 */
	@RequestMapping("/getBlocklyData/{dataType}")
	@ResponseBody
	public String getBlocklyData(@PathVariable String dataType) {
		
		Path path;
		if (dataType.equals("default")) {
			path = Paths.get("./src/main/resources/static/DEFAULT_DATA/DefaultXml.xml");
		}else {
			path = Paths.get("./src/main/resources/static/DEFAULT_DATA/"+dataType+".xml");
		}

		String content;
		try {
			content = Files.readString(path);
			return content;
		} catch (IOException e) {
			System.out.println("error");
			return null;
		}

	}
	
}