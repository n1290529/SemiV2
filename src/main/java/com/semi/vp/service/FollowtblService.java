package com.semi.vp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.semi.vp.dto.UserDto;
import com.semi.vp.repository.FollowtblRepository;
import com.semi.vp.repository.UsertblRepository;

@Service
public class FollowtblService {
    @Autowired
    FollowtblRepository followtblRepository;
	@Autowired
	UsertblRepository UtblRepo;
    
//    public List<Followtbl> getFollowUserId (String fid){
//    	return followtblRepository.findByFid(fid);
//    }
//    
//    public List<Followtbl> getFollowerUserId (String kid){
//    	return followtblRepository.findByKid(kid);
//    }
    
    public List<UserDto> getFollowUsertbls (String fid){
    	List<UserDto> users= new ArrayList<UserDto>();
    	for(String uid : followtblRepository.findByFidToKid(fid)) {
    		users.add(UserDto.of(UtblRepo.findById(uid).get()));
    	}
    	return users;
    }
    
    public List<UserDto> getFollowerUsertbls (String kid){
    	List<UserDto> users= new ArrayList<UserDto>();
    	for(String uid : followtblRepository.findByKidToFid(kid)) {
    		users.add(UserDto.of(UtblRepo.findById(uid).get()));
    	}
    	return users;
    }
}