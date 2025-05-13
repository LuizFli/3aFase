package sc.senai.aulas.acervo.model.filme.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;

import sc.senai.aulas.acervo.model.filme.dto.FilmeDTO;
import sc.senai.aulas.acervo.model.genero.entity.Genero;
import sc.senai.aulas.acervo.model.itemacervo.entity.ItemAcervo;

@Entity
//@DiscriminatorValue(value = "F")
@NamedQuery(name = "Filme.buscarPorTituloEDiretor",
	query = "SELECT new sc.senai.aulas.acervo.model.filme.dto.FilmeDTO(filme.titulo, filme.subtitulo) FROM Filme filme where filme.diretor = :diretor and filme.titulo = :titulo ")
public class Filme extends ItemAcervo {

	@Column(length = 100, nullable = false)
	private String diretor;
	
	@ManyToOne
	@JoinColumn(name = "GENEROID", referencedColumnName = "GENEROID")
	private Genero genero;
	
	@OneToOne
	@JoinColumn(name = "SEQUENCIAID", referencedColumnName = "ID")
	private Filme sequencia;
	
	/*@ManyToMany
	@JoinTable(name = "ELENCO",
	joinColumns = {
			@JoinColumn(name = "FILMEID", referencedColumnName = "ID")
	},
	inverseJoinColumns = {
			@JoinColumn(name = "ATORID", referencedColumnName = "ID")
	})
	private List<Ator> atores;*/
	
	/*@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "FILMEID", referencedColumnName = "ID", nullable = true)
	private List<Elenco> personagens;*/
	
	public Filme() {
		
	}
	
	public Filme(Integer id, String titulo, String subtitulo, String diretor) {
		setId(id);
		setTitulo(titulo);
		setSubtitulo(subtitulo);
		this.diretor = diretor;
	}
	
	public FilmeDTO toFilmeDTO() {
		return new FilmeDTO(getId(), getTitulo(), getSubtitulo(), diretor);
	}
	
	public String getDiretor() {
		return diretor;
	}
	
	public void setDiretor(String diretor) {
		this.diretor = diretor;
	}
}
