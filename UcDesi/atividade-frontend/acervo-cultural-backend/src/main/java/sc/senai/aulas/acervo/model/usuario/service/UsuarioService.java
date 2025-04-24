package sc.senai.aulas.acervo.model.usuario.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import sc.senai.aulas.acervo.model.usuario.entity.Permissao;
import sc.senai.aulas.acervo.model.usuario.entity.Usuario;
import sc.senai.aulas.acervo.model.usuario.repository.PermissaoRepository;
import sc.senai.aulas.acervo.model.usuario.repository.UsuarioRepository;
import sc.senai.aulas.acervo.seguranca.JWTHelper;

@Service
public class UsuarioService {
	
	@Autowired
	private JWTHelper jwtHelper;
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private PermissaoRepository permissaoRepository;
	
	public String efetuarLogin(Usuario usuario) {
		Usuario usuarioLogado = usuarioRepository.findByLogin(usuario.getLogin());
		
		if (usuarioLogado == null || 
			!new BCryptPasswordEncoder()
				.matches(usuario.getSenha(), usuarioLogado.getSenha())) {
			throw new IllegalArgumentException("Usuário Inválido");
		}
		
		return jwtHelper.gerarToken(usuarioLogado);
	}

	public void salvarUsuario(Usuario usuario) {
		usuarioRepository.save(usuario);
	}
	
	public void salvarPermissao(Permissao permissao) {
		permissaoRepository.save(permissao);
	}
	
	public List<Usuario> buscarUsuarios() {
		return usuarioRepository.findAll();
	}
	
	public List<Permissao> buscarPermissoes() {
		return permissaoRepository.findAll();
	}
}
