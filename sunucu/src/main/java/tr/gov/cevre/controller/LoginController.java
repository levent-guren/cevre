package tr.gov.cevre.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import tr.gov.cevre.dao.LoginResponseDAO;
import tr.gov.cevre.service.LoginService;

@RestController
public class LoginController {
	@Autowired
	private LoginService loginService;

	@GetMapping("/login")
	public ResponseEntity<LoginResponseDAO> login(@RequestParam String username, @RequestParam String password) {
		try {
			String token = loginService.login(username, password);
			return ResponseEntity.ok(new LoginResponseDAO(token));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
		}
	}

}
