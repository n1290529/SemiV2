package com.semi.vp.controller;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.semi.vp.form.SignupForm;
import com.semi.vp.service.UsertblService;

import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;

@Controller
public class Sign_up_Controller {
	@Autowired
	UsertblService userService;

	/**
	 * サインアップ画面の表示
	 * 
	 * @param Model
	 * @param form  サインアップの入力値
	 * @return 001-02_Sign_up
	 */
	@RequestMapping(value = "/signup", method = RequestMethod.GET)
	public String displayAdd(Model Model, @Valid @ModelAttribute("form") SignupForm form, BindingResult result) {

		return "HTML/001-02_Sign_up";
	}

	/**
	 * サインアップ画面,アカウント登録処理
	 * 
	 * @param Model
	 * @param form               サインアップの入力値
	 * @param result             エラー結果
	 * @param redirectAttributes
	 * @return
	 */
	@RequestMapping(value = "/signup/register", method = RequestMethod.POST)
	public String displayAdd2(Model Model, @Valid @ModelAttribute("form") SignupForm form, BindingResult result,
			RedirectAttributes redirectAttributes, HttpServletRequest request) {

		// emai重複用変数
		Model.addAttribute("emailC", false);

		if (result.hasErrors()) {
			// 正ならnull,入力エラーの場合Field error in object 'form' on field 'email': rejected value
			// [1 1];をstringで取得?
			// defaultmessageを使用する場合nullExceptonが発生。
			redirectAttributes.addFlashAttribute("emailCheck", result.getFieldError("email"));
			redirectAttributes.addFlashAttribute("usernameCheck", result.getFieldError("username"));
			redirectAttributes.addFlashAttribute("passCheck", result.getFieldError("pass"));
			redirectAttributes.addFlashAttribute("repassCheck", result.getFieldError("repass"));
			redirectAttributes.addFlashAttribute("birthCheck", result.getFieldError("birth"));

			// 上記5つと違い、間違っていた場合false,正しい場合true
			if (!form.isSexValid()) {
				redirectAttributes.addFlashAttribute("sexCheck", "性別を正しく入力してください");
			}

			if (!form.isPasswordValid()) {
				redirectAttributes.addFlashAttribute("passABCheck", "パスワードが確認用と一致しません");
			}
			if (!form.isCheckValid()) {
				redirectAttributes.addFlashAttribute("cboxCheck", "利用規約に同意してください");
			}

			return "redirect:/signup";
		}

		//アカウント作成,Form経由でUsertblServiceのuserRegistrationを使用
		// emailが既に存在する場合falseが返ってくる
		if (!userService.userRegistration(form)) {
			redirectAttributes.addFlashAttribute("emailC", true);
			return "redirect:/signup";
		}

		//重複がない場合,ログイン処理を実行
		// SecurityContext は、セキュリティ情報を定義する。この際sessionIdを取得している。
		// Authentication オブジェクトから、ユーザー名や権限情報（ロール）なども取得することができます
		SecurityContext context = SecurityContextHolder.getContext();
		Authentication authentication = context.getAuthentication();

		//ログイン状態の場合にログアウトを行う処理
		// authenticationに存在する項目,PrincipalがanonymousUserなのかを確認する
		if (authentication instanceof AnonymousAuthenticationToken == false) {
			SecurityContextHolder.clearContext();
		}
		//ログイン処理
		// SecurityContextHolder.getContext()で取得したSessionIdにログイン情報を付与させている？
		try {
			request.login(form.getEmail(), form.getPass());
		} catch (ServletException e) {
			e.printStackTrace();
		}

		return "redirect:/top";
	}

}
