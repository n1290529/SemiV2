package com.semi.vp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.semi.vp.entity.Anserflgtbl;

@Repository
public interface AnserflgRepository extends JpaRepository<Anserflgtbl, String> {

}
