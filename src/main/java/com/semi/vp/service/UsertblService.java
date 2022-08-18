package com.semi.vp.service;

import java.nio.charset.Charset;
import java.time.LocalDate;
import java.util.List;
import java.util.Random;

import javax.validation.constraints.Email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.semi.vp.entity.Usertbl;
import com.semi.vp.form.SignupForm;

import com.semi.vp.repository.UsertblRepository;

//User_tblのService宣言
@Service
public class UsertblService {

//User_tblのRpository呼び出しとUtblRepoでの実装
	@Autowired
	UsertblRepository UtblRepo;
	@Autowired
	PasswordEncoder passwordEncoder;
	
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

//Emailチェック
	public boolean check(String name) {
		return UtblRepo.existsByEmail(name);
	}
	
	static String getRandomString(int i) {

		// bind the length
		byte[] bytearray;
		bytearray = new byte[256];
		String mystring;
		StringBuffer thebuffer;
		String theAlphaNumericS;

		new Random().nextBytes(bytearray);

		mystring = new String(bytearray, Charset.forName("UTF-8"));

		thebuffer = new StringBuffer();

		// remove all spacial char
		theAlphaNumericS = mystring.replaceAll("[^A-Z0-9]", "");

		// random selection
		for (int m = 0; m < theAlphaNumericS.length(); m++) {

			if (Character.isLetter(theAlphaNumericS.charAt(m)) && (i > 0)
					|| Character.isDigit(theAlphaNumericS.charAt(m)) && (i > 0)) {

				thebuffer.append(theAlphaNumericS.charAt(m));
				i--;
			}
		}

		// the resulting string
		return thebuffer.toString();
	}
	
	//アカウント作成
	public boolean userRegistration(SignupForm form) {
		//emailが存在した場合,if分にはtrueが返ってくる。
		if(UtblRepo.existsByEmail(form.getEmail())) {
			System.out.println("email exists");
			return false;
		}

		String nId=getRandomString(10);
		Integer count=0;
		//ID重複用wile分
		while(UtblRepo.existsById(nId)) {
			if(count>=100) {
				return false;
			}
			count++;//無限ループ用
			nId=getRandomString(10);
		}
		
//		System.out.println(nId);
//		System.out.println(UtblRepo.existsById(nId));		
//		System.out.println("email="+email);
//		System.out.println("username="+username);
//		System.out.println("pass="+pass);
//		System.out.println("sex="+sex);
//		System.out.println("age="+age);
//		System.out.println("job"+job);
//		System.out.println("生年月日"+form.getBirth());
		
		Usertbl user = new Usertbl();
			user.setId(nId);
			user.setName(form.getUsername());
			user.setPass(passwordEncoder.encode(form.getPass()));
			user.setSex(Integer.parseInt(form.getSex()));
//			user.setAge(Integer.parseInt(form.getAge()));
			user.setBirth(form.getBirth());
			user.setJob(form.getJob());
			user.setEmail(form.getEmail());
	//   user.setProfile(null);
	//   user.setFav(null);
	//   user.setFav("null");
			user.setEntry(java.sql.Date.valueOf(LocalDate.now()));
			user.setAddress(nId+"/");
			user.setRole("USER");
			UtblRepo.save(user);
			System.out.println("アカウント作成");
			return true;
	}
}