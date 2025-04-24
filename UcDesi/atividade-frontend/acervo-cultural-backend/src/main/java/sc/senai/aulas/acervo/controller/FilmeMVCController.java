package sc.senai.aulas.acervo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import sc.senai.aulas.acervo.model.filme.dto.FilmeDTO;
import sc.senai.aulas.acervo.model.filme.service.FilmeService;

@Controller
@RequestMapping(path = "/mvc/filmes")
public class FilmeMVCController {

	@Autowired
	private FilmeService filmeService;

	@GetMapping
	//@RequestMapping(method=RequestMethod.GET)
	public String buscarFilmes(Model model) {
		model.addAttribute("filmes", filmeService.buscarFilmes());
		return "filmes/filmes-list";
	}
	
	@GetMapping("/{codigo}")
	public String buscarFilmePorId(
			@PathVariable(name = "codigo") Integer id, Model model) {
		model.addAttribute("filme", filmeService.buscarFilmePorId(id));
		return "filmes/filme-form";
	}
	
	@PostMapping
	public String salvarFilme(FilmeDTO filme, Model model) {
		try {
			filmeService.salvarFilme(filme);			
			return "redirect:/mvc/filmes";
		} catch (Exception e) {
			model.addAttribute("filme", filme);
			model.addAttribute("mensagem", e.getMessage());
			return "filmes/filme-form";
		}
	}
}
