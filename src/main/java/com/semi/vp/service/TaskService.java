package com.semi.vp.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.session.FindByIndexNameSessionRepository;
import org.springframework.stereotype.Service;

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
    public List<Tasktbl> getProblem (){
    	return TaskRepo.findAll();
    }
    
    public List<TaskDto> getProblemDto (){
    	return getProblem ().stream()
    	        .map(TaskDto::of)
    	        .collect(Collectors.toList());
    }
    
    /**
     * idからレコードを取得
     * @param id
     * @return
     */
    public Tasktbl searchProblem(String id) {
    	return TaskRepo.findById(id).get();
    }
    
    /**
     * idからTaskDtoを作成
     * @param id
     * @return TaskDto
     */
    public TaskDto getOneRecode(String id) {
    	return TaskDto.of(searchProblem(id));
    }
    
    /**
     * idからTaskChallengeDtoを作成
     * @param id
     * @return TaskChallengeDto
     */
    public TaskChallengeDto getProfile(String id) {
    	return TaskChallengeDto.of(searchProblem(id));
    }
}
