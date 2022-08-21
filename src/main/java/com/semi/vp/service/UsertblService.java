package com.semi.vp.service;

import java.nio.charset.Charset;
import java.time.LocalDate;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.semi.vp.entity.Usertbl;
import com.semi.vp.form.SignupForm;
import com.semi.vp.form.UserForm;
import com.semi.vp.repository.UsertblRepository;

@Service
public class UsertblService {

	@Autowired
	UsertblRepository UtblRepo;
	@Autowired
	PasswordEncoder passwordEncoder;

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
		UtblRepo.save(newA);
	}

	public void UpdateAccount(String id, UserForm form) {
		Usertbl changeStatusUser = UtblRepo.getOne(id);
		changeStatusUser.setName(form.getName());
		changeStatusUser.setBirth(form.getBirth());
		changeStatusUser.setSex(form.getSex());
		changeStatusUser.setJob(form.getJob());
		changeStatusUser.setFav(form.getFav());
		changeStatusUser.setProfile(form.getProfile());
		UtblRepo.save(changeStatusUser);
	}

	public void DeleteAccount(String id) {
		if (UtblRepo.existsById(id)) {
			UtblRepo.deleteById(id);
		}
	}


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
		
		Usertbl user = new Usertbl();
			user.setId(nId);
			user.setName(form.getUsername());
			user.setPass(passwordEncoder.encode(form.getPass()));
			user.setSex(Integer.parseInt(form.getSex()));
			user.setBirth(form.getBirth());
			user.setJob(form.getJob());
			user.setEmail(form.getEmail());
			user.setEntry(java.sql.Date.valueOf(LocalDate.now()));
			user.setAddress(nId+"/");
			user.setRole("USER");
			UtblRepo.save(user);
			return true;
	}
}