package sc.senai.aulas.acervo.model.filme.dto;

import sc.senai.aulas.acervo.model.filme.entity.Filme;

public class FilmeDTO {

	private Integer id;
	private String titulo;
	private String subtitulo;
	private String diretor;
	
	public FilmeDTO() {
		
	}
	
	public FilmeDTO(String titulo, String subtitulo) {
		this.titulo = titulo;
		this.subtitulo = subtitulo;
	}
	
	public FilmeDTO(Integer id, String titulo, String subtitulo, String diretor) {
		this.id = id;
		this.titulo = titulo;
		this.subtitulo = subtitulo;
		this.diretor = diretor;
	}
	
	public Filme toFilme() {
		return new Filme(id, titulo, subtitulo, diretor);
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getSubtitulo() {
		return subtitulo;
	}

	public void setSubtitulo(String subtitulo) {
		this.subtitulo = subtitulo;
	}

	public String getDiretor() {
		return diretor;
	}

	public void setDiretor(String diretor) {
		this.diretor = diretor;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		FilmeDTO other = (FilmeDTO) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
}
