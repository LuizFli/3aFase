package sc.senai.aulas.acervo.model.genero.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import sc.senai.aulas.acervo.model.filme.entity.Filme;

@Entity
public class Genero {

	@Id
	@Column(name = "GENEROID")
	private Integer id;
	
	@Column(length = 150, nullable = false)
	private String descricao;
	
	@OneToMany(mappedBy = "genero")
	private List<Filme> filmes;
}
