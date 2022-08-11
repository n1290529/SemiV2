package com.semi.vp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.semi.vp.entity.Followtbl;
import com.semi.vp.repository.FollowtblRepository;

//User_tblのService宣言
@Service
public class FollowtblService {

//User_tblのRpository呼び出しとUtblRepoでの実装
    @Autowired
    FollowtblRepository FollowRepo;
    
    // ユーザーTBLの内容を全検索
    public List<Followtbl> searchAll() {
        return FollowRepo.findAll();
    }
    
}