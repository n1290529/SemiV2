package com.semi.vp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.semi.vp.entity.Usertbl;

import java.util.List;


@Repository
public interface UserRepository extends JpaRepository<Usertbl, Long> {

//	Usertbl findByEmail(String email);
//	
//	@Query("select u from Usertbl u where u.email = ?1")
//	List<Usertbl> findByEmail2(String email);
//	
//	boolean existsByEmail(String email);
}
