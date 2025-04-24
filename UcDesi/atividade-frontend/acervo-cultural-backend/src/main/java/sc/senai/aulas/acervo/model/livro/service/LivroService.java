package sc.senai.aulas.acervo.model.livro.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sc.senai.aulas.acervo.model.livro.dto.LivroDTO;
import sc.senai.aulas.acervo.model.livro.entity.Livro;
import sc.senai.aulas.acervo.model.livro.repository.LivroRepository;

@Service
public class LivroService {
	
	@Autowired
	private LivroRepository livroRepository;
	
	public List<LivroDTO> buscarLivros() {
		return livroRepository.findAll().stream().map(livro -> livro.toLivroDTO()).collect(Collectors.toList());
	}
	
	public LivroDTO buscarLivroPorId(Integer id) {
		return livroRepository.findById(id).orElse(new Livro()).toLivroDTO();
	}
	
	public void salvarLivro(LivroDTO livro) {
		livroRepository.save(livro.toLivro());
	}
	
	public void excluirLivro(Integer id) {
		livroRepository.deleteById(id);
	}
	
	
	
}
