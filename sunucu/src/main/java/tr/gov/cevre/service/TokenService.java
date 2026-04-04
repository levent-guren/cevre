package tr.gov.cevre.service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class TokenService {

	@Value("${SECRET_KEY:-oFJdHSCwRbHW_lES1OWMayWjdbV-bCjaNsX6DaMsRIPX2F77yFvKE1SUOMwODPLQalUCpsvbafixRevu3CFHA}")
	private String KEY;

	public String createToken(String username, String password) {
		JwtBuilder builder = Jwts.builder();

		// Instant tarih = Instant.now().plus(15, ChronoUnit.MINUTES);
		Instant tarih = Instant.now().plus(1, ChronoUnit.DAYS);
		builder = builder.subject("login").id(username).issuedAt(new Date());
		builder = builder.expiration(Date.from(tarih));
		return builder.signWith(getKey()).compact();
	}

	public Claims tokenKontrol(String token) {
		JwtParser builder = Jwts.parser().verifyWith(getKey()).build();
		return builder.parseSignedClaims(token).getPayload();
	}

	private SecretKey getKey() {
		SecretKey key = Keys.hmacShaKeyFor(KEY.getBytes());
		return key;
	}

}
