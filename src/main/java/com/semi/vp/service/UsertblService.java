package com.semi.vp.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

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
	@Autowired
	UsertblRepository UserRepo;

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
		Usertbl changeStatusUser = UtblRepo.findById(id).get();
		changeStatusUser.setName(form.getName());
		changeStatusUser.setBirth(form.getBirth());
		changeStatusUser.setSex(form.getSex());
		changeStatusUser.setJob(form.getJob());
		changeStatusUser.setFav(form.getFav());
		changeStatusUser.setProfile(form.getProfile());
		System.out.println(form.getFav());
		UtblRepo.save(changeStatusUser);
	}

	public void DeleteAccount(String id) {
		if (UtblRepo.existsById(id)) {
			UtblRepo.deleteById(id);
		}
	}

//Emailチェック
	// 未使用?
	public boolean check(String name) {
		return UtblRepo.existsByEmail(name);
	}

	/**
	 * ユーザーディレクトリ作成用関数 呼び出し場所:userRegistration
	 * 
	 * @param adress プロジェクトアドレス
	 */
	public void makeDir(String adress) {

		Path p = Paths.get("." + adress);

		System.out.println("ディレクトリを作成" + p);

		try {
			Files.createDirectory(p);
		} catch (IOException e) {
			System.out.println("ユーザーディレクトリ作成用関数" + e);
		}
	}

	// アカウント作成
	public boolean userRegistration(SignupForm form) {
		// emailが存在した場合,if分にはtrueが返ってくる。
		if (UtblRepo.existsByEmail(form.getEmail())) {
			System.out.println("email exists");
			return false;
		}

		UUID uuid = UUID.randomUUID();
		String nId = uuid.toString();

		Usertbl user = new Usertbl();
		user.setId(nId);
		user.setName(form.getUsername());
		user.setPass(passwordEncoder.encode(form.getPass()));
		user.setSex(Integer.parseInt(form.getSex()));
		user.setBirth(form.getBirth());
		user.setJob(form.getJob());
		user.setEmail(form.getEmail());

		// \SemiV2\src\main\resources\static\USERs/nId
		user.setAddress("/users/" + nId);

		user.setRole("USER");
		UtblRepo.save(user);

		makeDir("/users/" + nId);
		return true;
	}

	/**
	 * /USERs直下にuserId名のディレクトリーが存在するかどうかを確認し、存在しない場合USERs直下にIDめいのディレクトリを新規作成する。
	 * 存在しない場合userId名でディレクトリを作成 呼び出し場所:Game_creation_copy_Controller
	 * 
	 * @param id ユーザーID
	 */
	public void searchUserDir(String id) {
		File userFileExist = new File("."+searchId(id).getAddress());
		if (!userFileExist.exists()) {
			// USERs直下にIDディレクトリが存在しなかった場合の処理
			makeDir(searchId(id).getAddress());
		}
	}

	public Usertbl oneReco(String str) {
		return UserRepo.getByEmail(str);
	}
}