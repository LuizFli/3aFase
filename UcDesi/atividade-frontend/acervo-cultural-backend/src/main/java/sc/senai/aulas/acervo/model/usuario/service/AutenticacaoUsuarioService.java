package sc.senai.aulas.acervo.model.usuario.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import sc.senai.aulas.acervo.model.usuario.dto.UsuarioDTO;
import sc.senai.aulas.acervo.model.usuario.entity.Usuario;
import sc.senai.aulas.acervo.model.usuario.repository.UsuarioRepository;

@Service
public class AutenticacaoUsuarioService implements UserDetailsService {

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Usuario usuario = usuarioRepository.findByLogin(username);
		return new UsuarioDTO(usuario);
	}

	
}
