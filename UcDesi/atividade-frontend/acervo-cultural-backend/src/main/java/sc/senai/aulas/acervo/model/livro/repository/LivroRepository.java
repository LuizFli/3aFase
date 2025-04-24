package sc.senai.aulas.acervo.model.livro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sc.senai.aulas.acervo.model.livro.entity.Livro;

public interface LivroRepository extends JpaRepository<Livro, Integer> {

}
