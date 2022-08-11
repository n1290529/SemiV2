package com.semi.vp.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.semi.vp.repository.TaskRepository;

public class TaskService {
	@Autowired
	TaskRepository taskRepo;
}
