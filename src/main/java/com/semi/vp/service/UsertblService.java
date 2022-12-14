package com.semi.vp.service;

import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.semi.vp.dto.UserDto;
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

	/**
	 * ユーザー情報変更
	 * 
	 * @param id   ユーザーID
	 * @param form 登録情報
	 */
	public void UpdateAccount(String id, UserForm form) {
		Usertbl usertbl = UtblRepo.save(UtblRepo.findById(id).get().of(form));
		setProjectImg(form.getImgFile(), usertbl.getAddress());
	}

	public void setProjectImg(MultipartFile img, String adress) {
		if (!img.isEmpty()) {
			Path path = Paths.get("." + adress + "/ProfileImage"
					+ img.getOriginalFilename().substring(img.getOriginalFilename().lastIndexOf(".")));
			File imgFile = new File(path.toString());
			System.out.println(path.toString());
			if (imgFile.exists()) {
				try {
					Files.delete(path);
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			try (OutputStream os = Files.newOutputStream(path, StandardOpenOption.CREATE)) {
				byte[] bytes = img.getBytes();
				os.write(bytes);
			} catch (Exception e) {
			}
		}
	}

	/**
	 * ユーザー消去
	 * 
	 * @param id ユーザーID
	 */
	public void DeleteAccount(String id) {
		if (UtblRepo.existsById(id)) {
			UtblRepo.deleteById(id);
		}
	}

	// Emailチェック
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
			System.out.println("例外エラー：すでに存在するメールアドレスです");
			return false;
		}
		Usertbl usertbl = new Usertbl();
		usertbl.setPass(passwordEncoder.encode(form.getPass()));
		UtblRepo.save(usertbl.ofSignin(form));
		makeDir(usertbl.getAddress());
		return true;
	}

	/**
	 * /USERs直下にuserId名のディレクトリーが存在するかどうかを確認し、存在しない場合USERs直下にIDめいのディレクトリを新規作成する。
	 * 存在しない場合userId名でディレクトリを作成 呼び出し場所:Game_creation_copy_Controller 使っていない
	 * 
	 * @param id ユーザーID
	 */
	public void searchUserDir(String id) {
		File userFileExist = new File("." + searchId(id).getAddress());
		if (!userFileExist.exists()) {
			// USERs直下にIDディレクトリが存在しなかった場合の処理
			makeDir(searchId(id).getAddress());
		}
	}

	/**
	 * e-mailからユーザー情報の取得
	 * 
	 * @param email メールアドレス
	 * @return ユーザーDto
	 */
	public UserDto oneReco(String email) {
		return UserDto.of(UserRepo.getByEmail(email));
	}
}