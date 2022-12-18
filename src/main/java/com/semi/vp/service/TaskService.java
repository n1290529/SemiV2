package com.semi.vp.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.session.FindByIndexNameSessionRepository;
import org.springframework.stereotype.Service;

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
    
    public TaskDto getOneRecode(String id) {
    	return TaskDto.of(TaskRepo.findById(id).get());
    }
}
