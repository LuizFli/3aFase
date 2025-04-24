package sc.senai.aulas.acervo.model.filme.entity;

import org.springframework.beans.factory.annotation.Value;

public interface TituloAcervo {

	String getTitulo();
	String getSubtitulo();
	GeneroDescricao getGenero();
	
	@Value("#{target.titulo + ' - ' + target.subtitulo}")
	String getTituloCompleto();
	
	default String getTituloConcatenado() {
		if (getTitulo() != null) {
			return getTitulo().concat(" - ").concat(getSubtitulo());
		}
		
		return getSubtitulo();
	}
}
