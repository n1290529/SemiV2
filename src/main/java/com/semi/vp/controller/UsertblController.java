package com.semi.vp.controller;

import java.nio.charset.Charset;
import java.time.LocalDate;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.semi.vp.entity.Followtbl;
import com.semi.vp.entity.Projecttbl;
import com.semi.vp.entity.Usertbl;
import com.semi.vp.service.FollowtblService;
import com.semi.vp.service.ProjectService;
import com.semi.vp.service.UsertblService;

//User_tblのController
@Controller
public class UsertblController {

//User_tblのServiceをUtblSer名でインスタンス
	@Autowired
	UsertblService UtblSer;
	@Autowired
	FollowtblService FollowSer;
	@Autowired
	ProjectService ProjectSer;

	/**
	 * ユーザー情報一覧画面を表示
	 * 
	 * @param model Model
	 * @return ユーザー情報一覧画面のHTML
	 */
	@RequestMapping(value = "/usertbl/tst", method = RequestMethod.GET)
	public String displayList(Model model) {

		// テストコード
//		System.out.println("こんにちは世界");
//		System.out.println(getRandomString(10));
		String  newId = getRandomString(10);
		Usertbl newA = new Usertbl(newId, "test", "123456", 0 , 0, "job", newId + "@bbb", "profile", "aaa", java.sql.Date.valueOf(LocalDate.now()), "test/" + newId + "/", "USER");
		System.out.println(newA);
		UtblSer.Singup(newA);
		System.out.println(UtblSer.searchId("banana"));
		Usertbl UpdateA = UtblSer.searchId("banana");
		UpdateA.setPass("1290529");
		UtblSer.UpdateAccount(UpdateA);
		UtblSer.DeleteAccount(newA.getId());

		//
		List<Usertbl> usertbllist = UtblSer.searchAll();
		model.addAttribute("UtblSer", usertbllist);

		List<Followtbl> followtbllist = FollowSer.searchAll();
		model.addAttribute("FollowSer", followtbllist);

		List<Projecttbl> Projecttbllist = ProjectSer.searchAll();
		model.addAttribute("ProjectSer", Projecttbllist);

		// テストコード
		System.out.println(UtblSer.SigninId("01otetesta", "123456"));
		System.out.println(UtblSer.SigninEmail("John", "123456"));

		//

		return "usertbl/tst";
	}

	static String getRandomString(int i) {

		// bind the length
		byte[] bytearray;
		bytearray = new byte[256];
		String mystring;
		StringBuffer thebuffer;
		String theAlphaNumericS;

		new Random().nextBytes(bytearray);

		mystring = new String(bytearray, Charset.forName("UTF-8"));

		thebuffer = new StringBuffer();

		// remove all spacial char
		theAlphaNumericS = mystring.replaceAll("[^A-Z0-9]", "");

		// random selection
		for (int m = 0; m < theAlphaNumericS.length(); m++) {

			if (Character.isLetter(theAlphaNumericS.charAt(m)) && (i > 0)
					|| Character.isDigit(theAlphaNumericS.charAt(m)) && (i > 0)) {

				thebuffer.append(theAlphaNumericS.charAt(m));
				i--;
			}
		}

		// the resulting string
		return thebuffer.toString();
	}
}