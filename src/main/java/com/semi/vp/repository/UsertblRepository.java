package com.semi.vp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.semi.vp.entity.Usertbl;

//User_tblのRepository宣言
@Repository
public interface UsertblRepository extends JpaRepository<Usertbl, String> {
	List<Usertbl> findByIdAndPass(String id, String pass);
	List<Usertbl> findByNameAndPass(String name, String pass);
	List<Usertbl> findByEmailAndPass(String email, String pass);
	
	Usertbl findByEmail(String email);
	
	@Query("select u from Usertbl u where u.email = ?1")
	List<Usertbl> findByEmail2(String email);
	
	boolean existsByEmail(String email);
	boolean existsById(String id);
}