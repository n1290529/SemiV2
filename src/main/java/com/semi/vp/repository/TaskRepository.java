package com.semi.vp.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.semi.vp.entity.Tasktbl;

@Repository
public interface TaskRepository extends JpaRepository<Tasktbl, String> {
}
