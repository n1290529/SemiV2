package com.semi.vp.form;

import java.io.Serializable;

import lombok.Data;

@Data
public class UserRequest implements Serializable {
/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

private String F_email;

private String F_password;

}