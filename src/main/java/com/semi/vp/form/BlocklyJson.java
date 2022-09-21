package com.semi.vp.form;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Map;

import antlr.collections.List;
import lombok.Data;

@Data
public class BlocklyJson implements Serializable {
	private static final long serialVersionUID = 1L;

	private Object	object_data;
	private Object check_name;
	private Object background_src;
	private Object background_cnt;
    
	private Object blockly;
	private String savename;
}