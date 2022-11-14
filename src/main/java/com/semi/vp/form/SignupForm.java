package com.semi.vp.form;

import java.sql.Date;

import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.PastOrPresent;
import javax.validation.constraints.Size;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.sun.istack.NotNull;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Email;


public class SignupForm {
	@NotEmpty
	@Email
	private String email;

	@NotEmpty
	@Size(max = 30)
	private String username;

	@NotEmpty
	@Size(min = 6, max = 30)
	private String pass;

	@NotEmpty
	@Size(min = 6, max = 30)
	private String repass;

	@NotNull
	private Long sex;
	@NotEmpty
	private String job;
	@NotEmpty
	private String check;
//	@NotEmpty　使えないっぽい
	@PastOrPresent
	private Date birth;

	@Autowired
	static PasswordEncoder passwordEncoder;
	@AssertTrue
	public boolean isPasswordValid() {
		if (pass == null || repass == null) {
			return false;
		}
		return pass.equals(repass);
	}

	@AssertTrue
	public boolean isSexValid() {
		if (sex == null) {
			return true;
		} else if (sex == 0) {
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

	@AssertTrue
	public boolean isBirthValid() {
		if (birth == null) {
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

	public Long getSex() {
		return sex;
	}
	public void setSex(Long sex) {
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
	
	public Date getBirth() {
		return birth;
	}
	public void setBirth(Date birth) {
		this.birth = birth;
	}
}
