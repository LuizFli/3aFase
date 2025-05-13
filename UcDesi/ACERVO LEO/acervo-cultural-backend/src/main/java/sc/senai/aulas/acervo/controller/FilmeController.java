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

import sc.senai.aulas.acervo.model.filme.dto.FilmeDTO;
import sc.senai.aulas.acervo.model.filme.entity.Filme;
import sc.senai.aulas.acervo.model.filme.service.FilmeService;

@RestController
@RequestMapping(path = "/filme")
/*@CrossOrigin(origins = "*", 
methods = {RequestMethod.GET, RequestMethod.OPTIONS} )*/
/*@CrossOrigin(origins = {"http://localhost:3001", "http://localhost:5000"}, 
			methods = {RequestMethod.GET, RequestMethod.DELETE} )*/
public class FilmeController {
	
	@Autowired
	private FilmeService filmeService;
	
	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	//@RolesAllowed({"USER", "ADMIN"})
	public ResponseEntity<List<FilmeDTO>> buscarFilmes() {
		return new ResponseEntity<>(filmeService.buscarFilmes(), HttpStatus.OK);
	}
	
	@GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	//@RolesAllowed("ADMIN")
	public ResponseEntity<FilmeDTO> buscarFilmePorId(@PathVariable Integer id) {
		return new ResponseEntity<>(filmeService.buscarFilmePorId(id), HttpStatus.OK);
	}
	
	@GetMapping(path = "titulo-diretor", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<FilmeDTO>> buscarFilmesPorTituloEDiretor() {
		return new ResponseEntity<>(filmeService.buscarFilmesPorTituloEDiretor(), HttpStatus.OK);
	}
	
	@GetMapping(path = "generico/{texto}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<FilmeDTO>> buscarFilmesPorFiltroGenerico(@PathVariable(name = "texto") String filtro) {
		return new ResponseEntity<>(filmeService.buscarFilmesPorFiltroGenerico(filtro), HttpStatus.OK);
	}
	
	@GetMapping(path = "exemplo", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Filme>> buscarFilmesComExemplo() {
		return new ResponseEntity<>(filmeService.buscarFilmesComExemplo(), HttpStatus.OK);
	}
	
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Void> inserirFilme(@RequestBody FilmeDTO filme) {
		try {
			filmeService.salvarFilme(filme);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (IllegalArgumentException e) {
			return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
		}
	}
	
	@PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Void> atualizarFilme(@RequestBody FilmeDTO filme) {
		try {
			filmeService.salvarFilme(filme);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (IllegalArgumentException e) {
			return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
		}
	}
	
	@DeleteMapping("/{id}")
	//@CrossOrigin(origins = "http://localhost:5000")
	public ResponseEntity<Void> excluirFilme(@PathVariable Integer id) {
		System.out.println("ID: " + id);
		filmeService.excluirFilme(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}
