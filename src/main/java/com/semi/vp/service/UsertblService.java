package com.semi.vp.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.semi.vp.entity.Usertbl;
import com.semi.vp.form.UserRequest;
import com.semi.vp.repository.UsertblRepository;

//User_tblのService宣言
@Service
public class UsertblService {

//User_tblのRpository呼び出しとUtblRepoでの実装
	@Autowired
	UsertblRepository UtblRepo;

	// ユーザーTBLの内容を全検索
	public List<Usertbl> searchAll() {
		return UtblRepo.findAll();
	}

	public Usertbl searchId(String id) {
		return UtblRepo.findById(id).get();
	}

	public List<Usertbl> SigninId(String id, String pass) {// USER_IDとUSER_PASSの二つをキーにレコードを取得
		return UtblRepo.findByIdAndPass(id, pass);
	}

	public List<Usertbl> SigninEmail(String email, String pass) {// USER_NAMEとUSER_PASSの二つをキーにレコードを取得
		return UtblRepo.findByEmailAndPass(email, pass);
	}

	public void Singup(Usertbl newA) {
//		if (!UtblRepo.existsById(newA[0].getId())) {
		UtblRepo.save(newA);
//		}
	}

	public void UpdateAccount(Usertbl newA) {
		if (UtblRepo.existsById(newA.getId())) {
			UtblRepo.save(newA);
		}
	}

	public void DeleteAccount(String id) {
		if (UtblRepo.existsById(id)) {
			UtblRepo.deleteById(id);
		}
	}
	
//	 //ユーザー情報 全検索
//	public List<Usertbl> searchAll() {
//		return usertblRepository.findAll();
//	}

	@Autowired
	PasswordEncoder passwordEncoder;

	// アカウント作成
	public void create(UserRequest userRequest) {
		Usertbl user = new Usertbl();
//   user.setId(5);
		user.setId("bbbbbb014");// 重複チェック
		user.setName("bbbbbb014");// 重複チェック？
		user.setPass(passwordEncoder.encode(userRequest.getF_password()));
		user.setSex(0);
//   user.setAge(0);
   user.setJob("学生");
		user.setEmail(userRequest.getF_email());
//   user.setProfile(null);
//   user.setFav(null);
//   user.setFav("null");
		user.setEntry(java.sql.Date.valueOf(LocalDate.now()));
		user.setAddress("banana14");// 重複チェック
		user.setRole("USER");
		UtblRepo.save(user);
	}

//Emailチェック
	public boolean check(String name) {
		return UtblRepo.existsByEmail(name);
	}
}