package sc.senai.aulas.acervo.model.filme.helper;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import sc.senai.aulas.acervo.model.filme.dto.FilmeDTO;

@Component
public class FilmeValidador {
	
	@Value("${nome.aplicacao:Acervo}")
	private String contextoAplicacao;
	
	/*public FilmeValidador(String contextoAplicacao) {
		this.contextoAplicacao = contextoAplicacao;
	}*/
	
	public String validarFilme(FilmeDTO filme) {
		if (filme.getTitulo() == null || filme.getTitulo().isEmpty()) {
			return contextoAplicacao.concat(" - ")
					.concat("O Título deve ser preenchido");
		}
		
		if (filme.getDiretor() == null || filme.getDiretor().isEmpty()) {
			return contextoAplicacao.concat(" - ")
					.concat("O Diretor deve ser preenchido");
		}
		
		return "";
	}

}
