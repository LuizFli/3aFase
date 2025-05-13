package sc.senai.aulas.acervo.model.filme.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sc.senai.aulas.acervo.model.filme.dto.FilmeDTO;
import sc.senai.aulas.acervo.model.filme.entity.Filme;
import sc.senai.aulas.acervo.model.filme.entity.TituloAcervo;

public interface FilmeRepository extends JpaRepository<Filme, Integer>, FilmeRepositoryCustom {

	List<TituloAcervo> findByTitulo(String titulo);
	
	@Query("SELECT f FROM Filme f WHERE f.titulo like %:titulo%")
	List<Filme> findByTituloLike(@Param("titulo") String titulo, Sort ordenacao);
	
	List<Filme> findByGeneroDescricaoContaining(String genero);
	
	List<Filme> findByTituloAndDiretor(String titulo, String diretor);
	
	List<FilmeDTO> buscarPorTituloEDiretor(@Param(value = "titulo") String titulo, 
										@Param("diretor") String diretor);
}
