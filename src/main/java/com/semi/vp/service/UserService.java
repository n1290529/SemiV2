package com.semi.vp.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.semi.vp.entity.Usertbl;
import com.semi.vp.form.UserRequest;
import com.semi.vp.repository.UsertblRepository;

import java.time.LocalDate;


@Service
@Transactional(rollbackFor = Exception.class)
public class UserService {
}