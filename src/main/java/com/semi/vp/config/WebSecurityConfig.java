package com.semi.vp.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.RequiredArgsConstructor;


/**
 * Spring Securityの設定を行うクラス。
 * 1,ConfigurationとEnableWebSecurityアノテーションを付ける
 * 2,WebSecurityConfigurerAdapterを継承する
 * の2つが必要。
 * 
 */
@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	/** ログイン処理を行うインスタンスをDI */
	@Autowired
	private final UserDetailsService uds;

	/**
	 * 基本的な設定はここで行う。
	 */
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// @formatter:off
 
		// アクセス権限に関する設定
		http
			// /**はアクセス制限をかけない
			.authorizeRequests().antMatchers(
					"/CSS/**","/IMG/**","/JS/**","/users/**",
					//トップ画面
					"/top",
					//サインイン画面
					"/signin",
					//サインアップ画面
					"/signup","/signup/register",
					//パスワード再登録
					"/forgetpass","/registerpass",
					"/common",
					"/user/create").permitAll()

			// /adminはADMINロールを持つユーザだけアクセス可能
			.antMatchers("/admin").hasRole("ADMIN")
			
			// /userはUSERロールを持つユーザだけアクセス可能
			.antMatchers("/user").hasRole("USER")
			// それ以外のページは認証が必要
			.anyRequest().authenticated();

		// ログインに関する設定
		http
		//CSRFを切るやつ　使っちゃダメ
//		.csrf().disable()
			.formLogin()
			// ログインを実行するページを指定。
			// この設定だと/にPOSTするとログイン処理を行う
			.loginProcessingUrl("/signin")
			// ログイン画面の設定
			.loginPage("/signin")
			// ログインに失敗した場合の遷移先
//			.failureUrl("/signin-error")
			// ユーザIDとパスワードのname設定
			//inputのIDを使用する。この場合input="username"に入力された値
			.usernameParameter("username")
			.passwordParameter("password")
			// ログインに成功した場合の遷移先
			.defaultSuccessUrl("/common", true);
		
		// ログアウトに関する設定
		http
			.logout()
			// ログアウト処理を行うページ指定、ここにPOSTするとログアウトする
			.logoutUrl("/logout")
			// ログアウトした場合の遷移先
			.logoutSuccessUrl("/")
			.invalidateHttpSession(true)//ログアウト後に HttpSession を無効にするかどうかを指定します。true であれば、ログアウト時にセッション情報が削除されます。
			.deleteCookies("JSESSIONID");//クッキーの削除
		// @formatter:on
	}


	/**
	 * パスワードのハッシュ化を行うアルゴリズムを返す
	 */
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	/**
	 * ログイン処理の設定
	 */
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		// ログイン処理時のユーザー情報をDBから取得する
		System.out.print("Hellooooooooooooooooooooooo");
		auth.userDetailsService(uds).passwordEncoder(passwordEncoder());
//		auth.inMemoryAuthentication()
//        .withUser("yama3")
//        .password(passwordEncoder().encode("123456"))
//        .roles("USER");
	}


}