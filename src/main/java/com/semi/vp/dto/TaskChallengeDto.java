package com.semi.vp.dto;

import com.semi.vp.entity.Tasktbl;

import lombok.Data;

@Data
public class TaskChallengeDto {
	private String id;
	private String profile;

	public static TaskChallengeDto of(Tasktbl tasktbl) {
		TaskChallengeDto dto = new TaskChallengeDto();
		dto.setId(tasktbl.getId());
		dto.setProfile(tasktbl.getProfile());
		return dto;
	}
}
