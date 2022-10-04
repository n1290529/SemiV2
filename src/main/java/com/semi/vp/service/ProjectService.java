package com.semi.vp.service;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.semi.vp.entity.Projecttbl;
import com.semi.vp.form.ProjectConfigForm;
import com.semi.vp.repository.ProjectRepository;

/**
 * プロジェクトテーブルサービス
 */
@Service
public class ProjectService {

//User_tblのRpository呼び出しとUtblRepoでの実装
	@Autowired
	ProjectRepository ProjctRepo;
	@Autowired
	UsertblService usertblservice;

	/**
	 * プロジェクトテーブルを全検索
	 * 
	 * @return プロジェクト情報（全件）
	 */
	public List<Projecttbl> searchAll() {
		return ProjctRepo.findAll();
	}

	/**
	 * プロジェクトIDをきーに プロジェクトテーブルを検索
	 * 
	 * @param id プロジェクトID
	 * @return プロジェクト情報（一件）
	 */
	public Optional<Projecttbl> searchId(String id) {
		return ProjctRepo.findById(id);
	}

	/**
	 * USER_IDをキープロジェクトをすべて取得
	 * 
	 * @param uId ユーザーID
	 * @return プロジェクト情報
	 */
	public List<Projecttbl> getProjects(String uId) {
		List<Projecttbl> projectRecord = ProjctRepo.findByUid(uId);
		return projectRecord;
	}

	/**
	 * USER_IDとPROJ_NAMEをキーにプロジェクトを取得
	 * 
	 * @param uId   ユーザーID
	 * @param title プロジェクトタイトル URLから取得したtitleをPROJ_NAMEとしてDB検索を行う
	 * @return プロジェクト情報
	 */
	public Projecttbl getProjectOneReco(String uId, String title) {
		Projecttbl projectRecord = ProjctRepo.findByUidAndName(uId, title).get();
		return projectRecord;
	}

	/**
	 * uidとtitleを用いて一意のレコードが存在するか確認する。
	 * 
	 * @param uid   ユーザーID
	 * @param title プロジェクトタイトル
	 * @return
	 */
	public boolean existOneReco(String uid, String title) {
		return ProjctRepo.existsByUidAndName(uid, title);
	}

	/**
	 * project_tbl更新用メソッド
	 * 
	 * @param form  更新データ
	 * @param uid   ユーザーID
	 * @param title プロジェクトタイトル
	 */
	public void projectUpdate(ProjectConfigForm form, String uid, String title) {

		Projecttbl project = getProjectOneReco(uid, title);
		String newName = form.getName();
		changeProjectDir(project, newName);
		project.setName(newName);
		project.setAddress(usertblservice.searchId(project.getUid()).getAddress() + "/" + newName);
		project.setIntro(form.getIntro());
		project.setOpenflg(form.isOpenflg());
		project.setDlflg(form.isDlflg());
		project.setGenre(form.getGenre1() + "," + form.getGenre2());
		setProjectImg(form.getImgFile(), project);

		ProjctRepo.save(project);
	}

	/**
	 * 主にGame_creation_copy_Controllerで使用するProjectTblに新規レコードを追加するための関数。
	 * アラートから取得したtitleと同名のディレクトリが存在しない場合に使用される。 IDは10桁の乱数を使用
	 * 
	 * @param uid   ユーザーID
	 * @param title プロジェクトタイトル
	 * @return 保存したプロジェクトレコード
	 */
	public Projecttbl projectCreate(String uid, String title) {
		UUID uuid = UUID.randomUUID();
		String projectId = uuid.toString();

		Projecttbl createStatus = new Projecttbl();
		createStatus.setId(projectId);
		createStatus.setAddress(usertblservice.searchId(uid).getAddress() + "/" + title);
		createStatus.setUid(uid);
		createStatus.setName(title);
		return ProjctRepo.save(createStatus);
	}

	/**
	 * 主にGame_creation_copy_Controllerで使用するProjectTblのLasttimeを更新する関数 いらない
	 * 
	 * @param uid   ユーザーID
	 * @param title プロジェクトタイトル
	 */
	public void projectUpdateLasttime(String uid, String title) {
		Projecttbl UpdateStatus = ProjctRepo.findByUidAndName(uid, title).get();
		ProjctRepo.save(UpdateStatus);
	}

	/**
	 * サムネイル保存処理
	 * 
	 * @param img     保存画像ファイル
	 * @param project 変更を実行するプロジェクト
	 */
	public void setProjectImg(MultipartFile img, Projecttbl project) {
		if (!img.isEmpty()) {
			Path path = Paths.get("." + project.getAddress() + "/thumbnail"
					+ img.getOriginalFilename().substring(img.getOriginalFilename().indexOf(".")));
			File imgFile = new File(path.toString());
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
	 * プロジェクトデータ変更処理
	 * 
	 * @param project    変更対象プロジェクト
	 * @param afterTitle 変更するプロジェクト名
	 */
	public void changeProjectDir(Projecttbl project, String afterTitle) {
		// 作業ディレクトリの名称が変更されている
		if (!project.getName().equals(afterTitle)) {// 作業ディレクトリが存在するかの条件文
			File userFileExist = new File("." + project.getAddress());
			File newName = new File("." + usertblservice.searchId(project.getUid()).getAddress() + "/" + afterTitle);
			if (userFileExist.exists()) {
				userFileExist.renameTo(newName);
				System.out.println("名前変更完了");
			} else {
				System.out.println("例外エラー,作業ディレクトリが存在しない");// 消さないで
			}
		}

	}

	/**
	 * /USERs/ID/直下にアラートから取得したtitleと同一の作業ディレクトリが存在するか確認し、 存在する場合、save.jsonを上書き保存する。
	 * 存在しなかった場合、作業ディレクトリを新規作成した後、save.jsonを作成する
	 * 
	 * @param project プロジェクトレコード
	 * @param json    保存情報JSON
	 */
	public void searchProjctDir(Projecttbl project, Object json) {
		File userFileExist = new File("." + project.getAddress());
		System.out.println(userFileExist);
		System.out.println(!userFileExist.exists());
		if (!userFileExist.exists()) {
			// 作業ディレクトリが存在しない場合の処理
			usertblservice.makeDir(project.getAddress());
		}
		// json保存処理
		String savepath = "." + project.getAddress() + "/save.json";
		try (PrintWriter out = new PrintWriter(new FileWriter(savepath))) {
			out.write(json.toString());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * プロジェクトのjsonを登録か変更かを判定しそれぞれの処理を呼ぶ処理
	 * 
	 * @param uid       ユーザーID
	 * @param title     プロジェクトタイトル
	 * @param inputJson 保存JSON
	 */
	public void setProjectJson(String uid, String title, String inputJson) {
		if (existOneReco(uid, title)) {// レコードが存在するかどうかの条件文
			System.out.println("レコードが存在する");

			Projecttbl project = getProjectOneReco(uid, title);
			searchProjctDir(project, inputJson);
			// DB更新処理
			ProjctRepo.save(project);
		} else {
			System.out.println("レコードが存在しない");

			searchProjctDir(projectCreate(uid, title), inputJson);
		}
	}
}