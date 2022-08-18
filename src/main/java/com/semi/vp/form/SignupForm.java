package com.semi.vp.form;

import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class SignupForm {
	@NotBlank
	@Size(min = 1, max = 20)
	private String email;

	@NotBlank
	@Size(min = 1, max = 20)
	private String username;

	@NotBlank
	@Size(min = 1, max = 20)
	private String pass;

	@NotBlank
	@Size(min = 1, max = 20)
	private String repass;

	private String age;
	private String sex;
	private String job;
	private String check;

	// passとrepassに空白はないか?
	// passとrepassは==か?
	@AssertTrue
	public boolean isPasswordValid() {
		if (pass == null || repass == null) {
			return false;
		}
		return pass.equals(repass);
	}

	// 初回起動時nullになる
	@AssertTrue
	public boolean isAgeValid() {
		//未入力の場合false
		if (age == null) {
			return true;
		} else if (Integer.parseInt(age) == 0) {
			return false;
		} else {
			return true;
		}

	}

	@AssertTrue
	public boolean isSexValid() {
		if (sex == null) {
			return true;
		} else if (Integer.parseInt(sex) == 0) {
			return false;
		} else {
			return true;
		}
	}

	@AssertTrue
	public boolean isJobValid() {
		if (job == null) {
			return true;
		} else if (Integer.parseInt(job) == 0) {
			return false;
		} else {
			return true;
		}
	}
	@AssertTrue
	public boolean isCheckValid() {
		if (check == null) {
			return false;
		} 
		return true;
	}

	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}

	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	
	public String getRepass() {
		return repass;
	}
	public void setRepass(String repass) {
		this.repass = repass;
	}

	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}

	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
			this.sex = sex;
	}
	
	public String getJob() {
		return job;
	}
	public void setJob(String job) {
		this.job = job;
	}
	
	public String getCheck() {
		return check;
	}
	public void setCheck(String check) {
		this.check = check;
	}
}
