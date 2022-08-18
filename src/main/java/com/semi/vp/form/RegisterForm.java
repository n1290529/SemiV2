package com.semi.vp.form;

import javax.validation.constraints.NotBlank;


public class RegisterForm {
	@NotBlank(message="メールアドレスを正しく入力してください")
	private String email;
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
}
