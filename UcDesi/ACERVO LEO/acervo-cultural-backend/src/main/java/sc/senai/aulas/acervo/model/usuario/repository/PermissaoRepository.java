package sc.senai.aulas.acervo.model.usuario.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sc.senai.aulas.acervo.model.usuario.entity.Permissao;

public interface PermissaoRepository extends JpaRepository<Permissao, Integer>{

}
