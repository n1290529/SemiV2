package com.semi.vp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.semi.vp.entity.Followtbl;
import com.semi.vp.entity.Usertbl;

//User_tblのRepository宣言
@Repository
public interface FollowtblRepository extends JpaRepository<Followtbl, String> {
	List<Usertbl> findByFid(String fid);
}