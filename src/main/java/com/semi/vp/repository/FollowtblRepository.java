package com.semi.vp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.semi.vp.entity.Followtbl;

//User_tblのRepository宣言
@Repository
public interface FollowtblRepository extends JpaRepository<Followtbl, String> {
	List<Followtbl> findByFid(String fid);

	List<Followtbl> findByKid(String kid);
	@Query("select f.kid from Followtbl f where f.fid = ?1")
	List<String> findByFidToKid(String fid);
	@Query("select f.fid from Followtbl f where f.kid = ?1")
	List<String> findByKidToFid(String kid);
}