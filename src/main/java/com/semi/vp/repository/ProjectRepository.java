package com.semi.vp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.semi.vp.entity.Projecttbl;
import com.semi.vp.entity.Usertbl;

//User_tblのRepository宣言
@Repository
public interface ProjectRepository extends JpaRepository<Projecttbl, String> {
	List<Usertbl> findByIdAndName(String id, String name);
	List<Usertbl> findByIdAndUid(String id, String uid);
	List<Usertbl> findByUid(String uid);
}