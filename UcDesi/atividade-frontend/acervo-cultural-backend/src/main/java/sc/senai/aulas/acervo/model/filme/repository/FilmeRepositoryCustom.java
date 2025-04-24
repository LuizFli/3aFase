package sc.senai.aulas.acervo.model.filme.repository;

import java.util.List;

import sc.senai.aulas.acervo.model.filme.dto.FilmeDTO;

public interface FilmeRepositoryCustom {

	List<FilmeDTO> buscarFilmesPorFiltroGenerico(String filtro);
}
