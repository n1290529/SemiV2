package com.semi.vp.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.semi.vp.entity.Usertbl;
import com.semi.vp.form.UserRequest;
import com.semi.vp.repository.UsertblRepository;

import java.time.LocalDate;


@Service
@Transactional(rollbackFor = Exception.class)
public class UserService {

//	@Autowired
//	private UsertblRepository usertblRepository;
//
//
//	 //ユーザー情報 全検索
//	public List<Usertbl> searchAll() {
//		return usertblRepository.findAll();
//	}
//
//	@Autowired
//	PasswordEncoder passwordEncoder;
//
//	// アカウント作成
//	public void create(UserRequest userRequest) {
//		Usertbl user = new Usertbl();
////    user.setId(5);
//		user.setId("bbbbbb012");// 重複チェック
//		user.setName("bbbbbb012");// 重複チェック？
//		user.setPass(passwordEncoder.encode(userRequest.getF_password()));
//		user.setSex(0);
////    user.setAge(0);
////    user.setJob("学生");
//		user.setEmail(userRequest.getF_email());
////    user.setProfile(null);
////    user.setFav(null);
////    user.setFav("null");
//		user.setEntry(java.sql.Date.valueOf(LocalDate.now()));
//		user.setAddress("banana12");// 重複チェック
//		user.setRole("USER");
//		usertblRepository.save(user);
//	}
//
////Emailチェック
//	public boolean check(String name) {
//		return usertblRepository.existsByEmail(name);
//	}
}