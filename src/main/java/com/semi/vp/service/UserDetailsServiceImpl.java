package com.semi.vp.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.semi.vp.entity.Usertbl;
import com.semi.vp.repository.UsertblRepository;

import lombok.RequiredArgsConstructor;


/**
 * Spring Bootで使うユーザ情報の取得を行うクラス。
 */
@RequiredArgsConstructor
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	
	private final UsertblRepository usertblRepository;

	/**
	 * ユーザ情報を取得する。
	 * もし引数のユーザ情報が存在しなかったら、UsernameNotFoundExceptionを投げる。
	 */
	//ログイン認証機能
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		var user = this.usertblRepository.findByEmail(username);
		System.out.println(user);
		// もしユーザが見つからなかった場合、例外を投げる
		if (user == null) {
			System.out.println("例外エラー");
			throw new UsernameNotFoundException("User [" + username + "] not found.");
		}
		return createUser(user);
	}

	/**
	 * DBから取得したユーザ情報をSpring Bootのユーザ情報に変更する。
	 * @param user DBから取得したユーザ情報
	 * @return Spring Bootのユーザ情報
	 */
	private UserDetails createUser(com.semi.vp.entity.Usertbl user) {
		Set<GrantedAuthority> auth = new HashSet<>();
		// ロールにはROLE_というプレフィックスを付ける
		auth.add(new SimpleGrantedAuthority("ROLE_" + user.getRole()));
		User userDetails = new User(user.getEmail(), user.getPass(), auth);
		return userDetails;
	}
	
	@Autowired
	UsertblRepository UserRepo;
	public Usertbl oneReco(String str) {
        return UserRepo.getByEmail(str);
    }
}