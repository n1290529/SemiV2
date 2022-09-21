package com.semi.vp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.semi.vp.entity.Projecttbl;
import com.semi.vp.entity.Usertbl;

//User_tblのRepository宣言
@Repository
public interface ProjectRepository extends JpaRepository<Projecttbl, String> {
	List<Usertbl> findByIdAndName(String id, String name);
	List<Usertbl> findByIdAndUid(String id, String uid);

	List<Projecttbl> findByUid(String uid);
	Optional<Projecttbl> findByUidAndName(String uid, String title);
	
	/**
	 * idとtitleからレコードが存在するか確認する。
	 * @param uid userId
	 * @param title アラートの入力値
	 * @return
	 */
	Boolean existsByUidAndName(String uid,String title);
	
	/**
	 * idからレコードが存在するかを確認する
	 * @param id 10桁の乱数
	 */
	boolean existsById(String id);
}