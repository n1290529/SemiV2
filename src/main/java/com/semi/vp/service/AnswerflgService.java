package com.semi.vp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.semi.vp.repository.AnserflgRepository;

@Service
public class AnswerflgService {
	@Autowired 
	AnserflgRepository answerflgRepo;
	
	/**
	 * 時間平均
	 * @param taskid
	 * @return
	 */
	public float getTimeAverage(String taskid) {
		return answerflgRepo.getTimeAvg(taskid);
	}
	
	/**
	 * スコア平均
	 * @param taskid
	 * @return
	 */
	public float getScoreAverage(String taskid) {
		return answerflgRepo.getScoreAvg(taskid);
	}
	
	/**
	 * 参加人数
	 * @param taskid
	 * @return
	 */
	public int getPeopleCount(String taskid) {
		return answerflgRepo.getPeopleCount(taskid);
	}
	
	/**
	 * 100点取得率
	 * @param taskid
	 * @return
	 */
	public float getCorrectPercent(String taskid) {
		return (float)answerflgRepo.getCorrectA(taskid)/(float)getPeopleCount(taskid)*100;
	}
}
