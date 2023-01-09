package com.semi.vp.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.semi.vp.dto.ProblemDtoList;
import com.semi.vp.dto.TaskChallengeDto;
import com.semi.vp.dto.TaskDto;
import com.semi.vp.entity.Tasktbl;
import com.semi.vp.repository.TaskRepository;

@Service
public class TaskService {
	@Autowired
	TaskRepository TaskRepo;

	/**
	 * 
	 * @return
	 */
	public List<Tasktbl> getProblem() {
		return TaskRepo.findAll();
	}

	public List<TaskDto> getProblemDto() {
		return getProblem().stream().map(TaskDto::of).collect(Collectors.toList());
	}

	public List<Tasktbl> searchDifProblems(String dif) {
		return TaskRepo.findByDif(dif);
	}

	public List<TaskDto> searchDifProblemDtos(String dif) {
		return searchDifProblems(dif).stream().map(TaskDto::of).collect(Collectors.toList());
	}

	public ProblemDtoList searchDifProblemDtoList() {
		ProblemDtoList dto = new ProblemDtoList();
		for (int i = 0; i < 4; i++) {
			switch (i) {
			case 0:
				dto.setProblemA(searchDifProblemDtos("A"));
				break;
			case 1:
				dto.setProblemB(searchDifProblemDtos("B"));
				break;
			case 2:
				dto.setProblemC(searchDifProblemDtos("C"));
				break;
			case 3:
				dto.setProblemD(searchDifProblemDtos("D"));
				break;
			case 4:
				dto.setProblemE(searchDifProblemDtos("E"));
				break;
			}
		}
		return dto;
	}

	/**
	 * idからレコードを取得
	 * 
	 * @param id
	 * @return
	 */
	public Tasktbl searchProblem(String id) {
		return TaskRepo.findById(id).get();
	}

	/**
	 * idからTaskDtoを作成
	 * 
	 * @param id
	 * @return TaskDto
	 */
	public TaskDto getOneRecode(String id) {
		return TaskDto.of(searchProblem(id));
	}

	/**
	 * idからTaskChallengeDtoを作成
	 * 
	 * @param id
	 * @return TaskChallengeDto
	 */
	public TaskChallengeDto getProfile(String id) {
		return TaskChallengeDto.of(searchProblem(id));
	}
}
