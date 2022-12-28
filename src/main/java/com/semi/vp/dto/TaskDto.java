package com.semi.vp.dto;

import com.semi.vp.entity.Tasktbl;

import lombok.Data;

@Data
public class TaskDto {
    private String id;
    private String title;
    private String dif;
    private float correct;
    private String timeaverage;
    private double scoreaverage;
    private long rate;
    private long num;
    private String timeLimit;
    
    public static TaskDto of(Tasktbl tasktbl) {
		TaskDto dto = new TaskDto();
		dto.setId(tasktbl.getId());
		dto.setTitle(tasktbl.getTitle());
		dto.setDif(tasktbl.getDif());
		dto.setCorrect(tasktbl.getCorrect());
		long sec=tasktbl.getTimeaverage();
		long hour = sec / 3600;
        long min = (sec%3600) / 60;
        sec = sec % 60;
        
		dto.setTimeaverage(hour+":"+min+":"+sec);
		dto.setScoreaverage(tasktbl.getScoreaverage());
		dto.setRate(tasktbl.getRate());
		dto.setNum(tasktbl.getNum());
		sec=tasktbl.getTimeLimit();
        min = sec / 60;
		dto.setTimeLimit(min+"分");
		return dto;
	}
}