package sc.senai.aulas.acervo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sc.senai.aulas.acervo.model.livro.dto.LivroDTO;
import sc.senai.aulas.acervo.model.livro.service.LivroService;

@RestController
@RequestMapping(path = "/livro")
/*@CrossOrigin(origins = "*", 
methods = {RequestMethod.GET, RequestMethod.OPTIONS} )*/
/*@CrossOrigin(origins = {"http://localhost:3001", "http://localhost:5000"}, 
			methods = {RequestMethod.GET, RequestMethod.DELETE} )*/
public class LivroController {
	
	@Autowired
	private LivroService livroService;
	
	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	//@RolesAllowed({"USER", "ADMIN"})
	public ResponseEntity<List<LivroDTO>> buscarLivros() {
		return new ResponseEntity<>(livroService.buscarLivros(), HttpStatus.OK);
	}
	
	@GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	//@RolesAllowed("ADMIN")
	public ResponseEntity<LivroDTO> buscarLivroPorId(@PathVariable Integer id) {
		return new ResponseEntity<>(livroService.buscarLivroPorId(id), HttpStatus.OK);
	}
	
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Void> inserirLivro(@RequestBody LivroDTO livro) {
		try {
			livroService.salvarLivro(livro);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (IllegalArgumentException e) {
			return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
		}
	}
	
	@PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Void> atualizarLivro(@RequestBody LivroDTO livro) {
		try {
			livroService.salvarLivro(livro);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (IllegalArgumentException e) {
			return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
		}
	}
	
	@DeleteMapping("/{id}")
	//@CrossOrigin(origins = "http://localhost:5000")
	public ResponseEntity<Void> excluirLivro(@PathVariable Integer id) {
		livroService.excluirLivro(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}
