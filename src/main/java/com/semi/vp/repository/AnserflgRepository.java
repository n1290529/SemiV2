package com.semi.vp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.semi.vp.entity.Anserflgtbl;

@Repository
public interface AnserflgRepository extends JpaRepository<Anserflgtbl, String> {
	
	/**
	 * Anserflgtblから時間平均取得
	 * @param taskid タスクID
	 * @return 時間平均
	 */
	@Query("select avg(a.time) from Anserflgtbl a where a.taskid =?1")
	float getTimeAvg(String taskid);
	
	/**
	 * Anserflgtblから100点の受験者数
	 * @param taskid タスクID
	 * @return 正答率A
	 */
	@Query("select count(a.score) from Anserflgtbl a where a.taskid =?1 AND a.score=100")
	int getCorrectA(String taskid);
	
	/**
	 * Anserflgtblから平均スコア
	 * @param taskid タスクID
	 * @return 平均スコア
	 */
	@Query("select avg(a.score) from Anserflgtbl a where a.taskid =?1")
	float getScoreAvg(String taskid);
	
	/**
	 * Anserflgtblから受験者数
	 * @param taskid タスクID
	 * @return 受験者数
	 */
	@Query("select count(a) from Anserflgtbl a where a.taskid =?1")
	int getPeopleCount(String taskid);
	
	
}
