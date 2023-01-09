package com.semi.vp.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.semi.vp.entity.Answerflgtbl;
import com.semi.vp.repository.AnswerflgRepository;

@Service
public class AnswerflgService {
	@Autowired
	AnswerflgRepository answerflgRepo;

//	/**
//	 * 時間平均
//	 * @param taskid
//	 * @return
//	 */
//	public float getTimeAverage(String taskid) {
//		return answerflgRepo.getTimeAvg(taskid);
//	}

	/**
	 * スコア平均
	 * 
	 * @param taskid
	 * @return
	 */
	public float getScoreAverage(String taskid) {
		return answerflgRepo.getScoreAvg(taskid);
	}

	/**
	 * 参加人数
	 * 
	 * @param taskid
	 * @return
	 */
	public int getPeopleCount(String taskid) {
		return answerflgRepo.getPeopleCount(taskid);
	}

	/**
	 * 100点取得率
	 * 
	 * @param taskid
	 * @return
	 */
	public float getCorrectPercent(String taskid) {
		return (float) answerflgRepo.getCorrectA(taskid) / (float) getPeopleCount(taskid) * 100;
	}

	public void answerCreate(String uid, String taskid) {
		Answerflgtbl data = new Answerflgtbl();
		data.setUid(uid);
		data.setTaskid(taskid);
		answerflgRepo.save(data);
	}

//	public void answerUpdate(String uid, String taskid) {
//
//	}

	//テスト用の採点システム
	public void test() {
		List<Boolean> answer = new ArrayList<>();
		answer.add(true);
		answer.add(false);
		answer.add(true);
		
		System.out.println(scoring(answer));
	}
	
	/**
	 * 採点を行うメソッド
	 * @param answer
	 * @param taskid
	 * @return Integer score
	 */
	public Integer scoring(List<Boolean> answer) {
		Integer score = 0;
		
		for (int i = 0; i < answer.size(); i++) {
			if (answer.get(i)) {
				score += 10;
			}
		}
		return score;
	}

	
}
