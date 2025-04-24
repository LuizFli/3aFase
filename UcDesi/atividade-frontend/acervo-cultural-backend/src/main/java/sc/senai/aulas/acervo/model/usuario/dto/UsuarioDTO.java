package sc.senai.aulas.acervo.model.usuario.dto;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import sc.senai.aulas.acervo.model.usuario.entity.Permissao;
import sc.senai.aulas.acervo.model.usuario.entity.Usuario;

public class UsuarioDTO implements UserDetails {
	
	private static final long serialVersionUID = -6953198262767816602L;
	
	private String login;
	private String senha;
	private Boolean ativo;
	private List<Permissao> permissoes;
	
	public UsuarioDTO(Usuario usuario) {
		this.login = usuario.getLogin();
		this.senha = usuario.getSenha();
		this.ativo = usuario.getAtivo();
		this.permissoes = usuario.getPermissoes();
	}
	
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	public Boolean getAtivo() {
		return ativo;
	}
	public void setAtivo(Boolean ativo) {
		this.ativo = ativo;
	}
	public List<Permissao> getPermissoes() {
		return permissoes;
	}
	public void setPermissoes(List<Permissao> permissoes) {
		this.permissoes = permissoes;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return permissoes;
		
		/*return getPermissoes().stream()
				.map(permissao -> new SimpleGrantedAuthority(permissao.getRole()))
				.collect(Collectors.toList());*/
	}

	@Override
	public String getPassword() {
		return senha;
	}

	@Override
	public String getUsername() {
		return login;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return ativo;
	}
}
