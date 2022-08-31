package com.semi.vp.controller;


import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


//User_tblのController
@Controller
@RequestMapping
public class Game_creation_copy_Controller {
    @GetMapping(value = "/a")
    public String index() {
        return "HTML/004-02_Game_creation_copy";
    }

    @PostMapping("/bbb")
    @ResponseBody
    public String note(@RequestParam String bbb) {
        String json = "{\"note\":\"" + bbb+ "\"}";
        System.out.println("HEllo"+json);
        return json;
    }
	
}