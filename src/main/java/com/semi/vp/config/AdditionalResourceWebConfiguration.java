package com.semi.vp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * 外部ファイル使用するためのコンフィグレーション
 */
@Configuration
public class AdditionalResourceWebConfiguration implements WebMvcConfigurer {
	/**
	 * usersファイルを使用できるようにする処理
	 */
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/users/**").addResourceLocations("file:users/");
	}
}
