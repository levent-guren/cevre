package tr.gov.cevre.service;

import javax.security.auth.login.LoginException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
	@Autowired
	private TokenService tokenService;

	public String login(String username, String password) throws LoginException {
		if (loginCheck(username, password)) {
			return tokenService.createToken(username, password);
		}
		throw new LoginException();
	}

	private boolean loginCheck(String username, String password) {
		if ("levent".equals(username) && "guren".equals(password)) {
			return true;
		}
		if ("cevre".equals(username) && "sehir".equals(password)) {
			return true;
		}
		return false;
	}

}
