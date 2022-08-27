package com.semi.vp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.semi.vp.entity.Projecttbl;
import com.semi.vp.form.ProjectConfigForm;
import com.semi.vp.repository.ProjectRepository;

import java.util.Date;

//User_tblのService宣言
@Service
public class ProjectService {

//User_tblのRpository呼び出しとUtblRepoでの実装
	@Autowired
	ProjectRepository ProjctRepo;

	// ユーザーTBLの内容を全検索
	public List<Projecttbl> searchAll() {
		return ProjctRepo.findAll();
	}

	public Optional<Projecttbl> searchId(String id) {
		return ProjctRepo.findById(id);
	}
	
	/**
	 * USER_IDに引っかかるproject_tblのレコードをすべて取得
	 * @param uId USER_ID
	 * @return projectRecord
	 */
	public List<Projecttbl> getProjects(String uId) {
		List<Projecttbl> projectRecord=ProjctRepo.findByUid(uId);
		return projectRecord;
	}
	/**
	 * USER_IDとPROJ_NAMEに引っかかるプロジェクトレコードをすべて取得(一意)
	 * @param uId USER_ID
	 * @param title PROJ_NAME
	 * URLから取得したtitleをPROJ_NAMEとしてDB検索を行う
	 * @return projectRecord
	 */
	public Projecttbl getProjectOneReco(String uId,String title){
		Projecttbl projectRecord=ProjctRepo.findByUidAndName(uId,title).get();
		return projectRecord;
	}
	
	/**
	 * project_tbl更新用メソッド
	 * @param form ProjectConfigForm
	 * @param id PROJ_ID
	 */
	public void projectUpdate(ProjectConfigForm form,String id) {
		Date dateObj = new Date();
		
		Projecttbl updateStatus=ProjctRepo.findById(id).get();
		
		updateStatus.setName(form.getName());
		updateStatus.setIntro(form.getIntro());
		updateStatus.setOpenflg(form.isOpenflg());
		updateStatus.setDlflg(form.isDlflg());
		updateStatus.setGenre(form.getGenre1()+","+form.getGenre2());
		updateStatus.setLasttime(dateObj);
		ProjctRepo.save(updateStatus);
	}
}