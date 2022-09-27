package com.semi.vp.service;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
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
	//未使用?
	public boolean check(String name) {
		return UtblRepo.existsByEmail(name);
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
		user.setAddress("/" + nId);

		user.setRole("USER");
		UtblRepo.save(user);

		makeDir(nId);

		return true;
	}

	/**
	 * 
	 * ユーザーディレクトリ作成用関数 呼び出し場所:userRegistration
	 * \SemiV2\src\main\resources\static\USERs/id として作成
	 * 
	 * @param str id=nId
	 * 
	 *            USERs直下にid名でディレクトリを作成する関数 呼び出し場所:UsertblService
	 *            \SemiV2\src\main\resources\static\USERs/id として作成
	 * 
	 * @param str id nId
	 * 
	 */
	public void makeDir(String id) {

		Path p = Paths.get("./src/main/resources/static/USERs/" + id);

		System.out.println("ディレクトリを作成");

		try {
			Files.createDirectory(p);
		} catch (IOException e) {
			System.out.println("ユーザーディレクトリ作成用関数" + e);
		}
		try {
			Files.createDirectory(p);
		} catch (IOException e) {
			System.out.println("ユーザーディレクトリ作成用関数:" + e);
		}
	}

	/**
	 * /USERs直下にuserId名のディレクトリーが存在するかどうかを確認し、存在しない場合USERs直下にIDめいのディレクトリを新規作成する。
	 * 存在しない場合userId名でディレクトリを作成 呼び出し場所:Game_creation_copy_Controller
	 * @param id userId
	 */
	public void searchUserDir(String id) {
		File userFileExist = new File("./src/main/resources/static/USERs/" + id);
		System.out.println("test");
		if (!userFileExist.exists()) {
			// USERs直下にIDディレクトリが存在しなかった場合の処理
			makeDir(id);
		}
	}

	/**
	 * /USERs/ID/直下にアラートから取得したtitleと同一の作業ディレクトリが存在するか確認し、 存在する場合、save.jsonを上書き保存する。
	 * 存在しなかった場合、作業ディレクトリを新規作成した後、save.jsonを作成する
	 * 
	 * @param id    ユーザーID
	 * @param title プロジェクトタイトル
	 * @param json  保存情報JSON
	 */
	public void searchProjctDir(String id, String title, Object json) {
		File userFileExist = new File("./src/main/resources/static/USERs/" + id + "/" + title);
		if (!userFileExist.exists()) {
			// 作業ディレクトリが存在しない場合の処理
			makeDir(id + "/" + title);
		}

		// json保存処理
		String savepath = "./src/main/resources/static/USERs/" + id + "/" + title + "/save.json";
		try (PrintWriter out = new PrintWriter(new FileWriter(savepath))) {
			out.write(json.toString());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * ゲーム詳細画面でタイトルを変更する際の処理
	 * @param id
	 * @param beforeTitle
	 * @param afterTitle
	 */
	public void changeProjectDir(String id, String beforeTitle, String afterTitle) {
		//作業ディレクトリの名称が変更されている
		if (beforeTitle != afterTitle) {
			File userFileExist = new File("./src/main/resources/static/USERs/" + id + "/" + beforeTitle);
			File newName = new File("./src/main/resources/static/USERs/" + id + "/" + afterTitle);
			// 作業ディレクトリが存在する場合
			try {
				if (userFileExist.exists()) {
					userFileExist.renameTo(newName);
					System.out.println("名前変更完了");
				}else {
					//消さないで。
					//このelseは処理の関係上テスト環境以外では絶対に通らない。
					System.out.println("例外エラー,作業ディレクトリが存在しない");
				}
			} catch (Exception e) {
				// TODO: handle exception
			}
		}

	}

	public Usertbl oneReco(String str) {
		return UserRepo.getByEmail(str);
	}
}