package sc.senai.aulas.acervo.seguranca;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import sc.senai.aulas.acervo.model.usuario.entity.Permissao;
import sc.senai.aulas.acervo.model.usuario.entity.Usuario;

@Component
public class JWTHelper {
	
	@Value("${jwt.secret}")
	private String tokenSecret;
	
	@Value("${jwt.tempo.vida}")
	private Long tempoVida;
	
	public Boolean validarToken(String token) {
		if (isTokenExpirado(token) && getUsuarioDoToken(token).isEmpty()) {
			return false;
		}
		
		return true;
		
	}
	
	public String getUsuarioDoToken(String token) {
		return (String) buscarPayloadDoToken(token).get("usuario");
	}
	
	public List<Permissao> getPermissoesDoToken(String token) {
		return (List<Permissao>) buscarPayloadDoToken(token).get("permissoes");
	}
	
	private Boolean isTokenExpirado(String token) {
		Date dataValidade = buscarPayloadDoToken(token).getExpiration();
		return dataValidade.before(new Date());
	}
	
	private Claims buscarPayloadDoToken(String token) {
		return Jwts.parser()
				.setSigningKey(tokenSecret)
				.parseClaimsJws(token).getBody();
	}

	public String gerarToken(Usuario usuario) {
		Map<String, Object> claims = new HashMap<>();
		claims.put("usuario", usuario.getLogin());
		claims.put("permissoes", usuario.getPermissoes());
		
		return Jwts.builder()
			.setClaims(claims)
			.setExpiration(new Date(System.currentTimeMillis() + (tempoVida * 1000)))
			.signWith(SignatureAlgorithm.HS512, tokenSecret)
			.compact();
	}
}
