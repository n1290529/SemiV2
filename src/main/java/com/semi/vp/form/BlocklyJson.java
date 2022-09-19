package com.semi.vp.form;

import java.io.Serializable;

import lombok.Data;

@Data
public class BlocklyJson implements Serializable {
	private static final long serialVersionUID = 1L;

	private Object blockly;
	private String savename;
}