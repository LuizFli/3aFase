package sc.senai.aulas.acervo.model.livro.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import sc.senai.aulas.acervo.model.genero.entity.Genero;
import sc.senai.aulas.acervo.model.itemacervo.entity.ItemAcervo;
import sc.senai.aulas.acervo.model.livro.dto.LivroDTO;

@Entity
//@DiscriminatorValue(value = "L")
public class Livro extends ItemAcervo {

	@Column(length = 100, nullable = false)
	private String autor;
	
	@Column(length = 100, nullable = false)
	private String isbn;
	
	@ManyToOne
	@JoinColumn(name = "GENEROID", referencedColumnName = "GENEROID")
	private Genero genero;
	
	public Livro() {
		
	}
	
	public Livro(Integer id, String titulo, String subtitulo, String autor, String isbn) {
		setId(id);
		setTitulo(titulo);
		setSubtitulo(subtitulo);
		this.autor = autor;
		this.isbn = isbn;
	}
	
	public LivroDTO toLivroDTO() {
		return new LivroDTO(getId(), getTitulo(), getSubtitulo(), autor, isbn);
	}
	
	public String getAutor() {
		return autor;
	}
	
	public void setAutor(String autor) {
		this.autor = autor;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}
}
