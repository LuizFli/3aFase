package sc.senai.aulas.acervo.model.usuario.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sc.senai.aulas.acervo.model.usuario.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{

	Usuario findByLogin(String login);
}
