package sc.senai.aulas.acervo.model.filme.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.ExampleMatcher.GenericPropertyMatchers;
import org.springframework.stereotype.Service;

import sc.senai.aulas.acervo.model.filme.dto.FilmeDTO;
import sc.senai.aulas.acervo.model.filme.entity.Filme;
import sc.senai.aulas.acervo.model.filme.helper.FilmeValidador;
import sc.senai.aulas.acervo.model.filme.repository.FilmeRepository;

@Service
public class FilmeService {
	
	@Autowired
	private FilmeValidador filmeValidador;
	
	@Autowired
	private FilmeRepository filmeRepository;
	
	private List<FilmeDTO> filmes;
	
	private List<FilmeDTO> mockFilmes() {
		if (filmes != null) {
			return filmes;
		}
		
		filmes = new ArrayList<>();
		filmes.add(new FilmeDTO(1, "O Senhor dos Anéis", "As Duas Torres", "Peter Jackson"));
		filmes.add(new FilmeDTO(2, "Homem de Ferro", null, "Jon Favreau"));
		
		return filmes;
	}

	public List<FilmeDTO> buscarFilmes() {
		return filmeRepository.findAll().stream().map(filme -> filme.toFilmeDTO()).collect(Collectors.toList());
		//return filmeRepository.findByTitulo("O Senhor dos Anéis");
		//return filmeRepository.findByTituloLike("Senhor", Sort.by(Direction.DESC, "subtitulo"));
		//return mockFilmes();
	}
	
	public List<FilmeDTO> buscarFilmesPorTituloEDiretor() {
		filmeRepository.findByTituloAndDiretor("O Senhor dos Anéis", "David Yates");
		return filmeRepository.buscarPorTituloEDiretor("O Senhor dos Anéis", "David Yates");
	}
	
	public List<FilmeDTO> buscarFilmesPorFiltroGenerico(String filtro) {
		return filmeRepository.buscarFilmesPorFiltroGenerico(filtro);
	}
	
	public List<Filme> buscarFilmesComExemplo() {
		Filme filme = new Filme();
		//filme.setTitulo("senhor".toLowerCase());
		filme.setDiretor("DAVID".toLowerCase());
		
		ExampleMatcher matcher = ExampleMatcher.matching()
				.withIgnoreCase()
				.withMatcher("titulo", GenericPropertyMatchers.contains().ignoreCase())
				.withMatcher("diretor", GenericPropertyMatchers.contains().ignoreCase())
				;
		
		return filmeRepository.findAll(Example.of(filme, matcher));
	}
	
	public FilmeDTO buscarFilmePorId(Integer id) {
		return filmeRepository.findById(id).orElse(new Filme()).toFilmeDTO();
		/*return mockFilmes().stream()
				.filter(filme -> filme.getId().equals(id))
				.findFirst().orElse(new FilmeDTO());*/
	}
	
	public void salvarFilme(FilmeDTO filme) {
		String mensagemValidacao = filmeValidador.validarFilme(filme);
		if (!mensagemValidacao.isEmpty()) {
			throw new IllegalArgumentException(mensagemValidacao);
		}
		
		if (filme.getId() != null) {
			mockFilmes().remove(filme);
		}
		
		filmeRepository.save(filme.toFilme());
		
		filme.setId(mockFilmes().size() + 1);
		mockFilmes().add(filme);
	}
	
	public void excluirFilme(Integer id) {
		/*Optional<Filme> filme = filmeRepository.findById(id);
		filme.ifPresent(f -> filmeRepository.delete(f));*/
		filmeRepository.deleteById(id);
	}
	
	
	
}
