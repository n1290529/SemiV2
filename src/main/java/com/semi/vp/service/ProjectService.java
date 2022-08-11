package com.semi.vp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.semi.vp.entity.Projecttbl;
import com.semi.vp.repository.ProjectRepository;

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

}