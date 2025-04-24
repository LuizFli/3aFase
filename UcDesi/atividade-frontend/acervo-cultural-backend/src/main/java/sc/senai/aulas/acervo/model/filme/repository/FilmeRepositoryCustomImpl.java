package sc.senai.aulas.acervo.model.filme.repository;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import sc.senai.aulas.acervo.model.filme.dto.FilmeDTO;

public class FilmeRepositoryCustomImpl implements FilmeRepositoryCustom {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private EntityManager entityManager;
	
	public List<FilmeDTO> buscarFilmesPorFiltroGenerico(String filtro) {
		StringBuilder sql = new StringBuilder();
		sql.append("SELECT ID, TITULO, SUBTITULO, DIRETOR ");
		sql.append("	FROM FILME FILME ");
		sql.append("WHERE LOWER(FILME.TITULO) LIKE LOWER('%' || ? || '%') ");
		sql.append("	OR LOWER(FILME.DIRETOR) LIKE LOWER('%' || ? || '%') ");
		sql.append("	OR LOWER(FILME.SUBTITULO) LIKE LOWER('%' || ? || '%') ");
		
		/*Query query = entityManager.createQuery(sql.toString());
		query.getParameters().add(null);
		
		
		query.getResultList();*/
		
		return jdbcTemplate.query(sql.toString(), new BeanPropertyRowMapper<FilmeDTO>(FilmeDTO.class), filtro, filtro, filtro);
	}
}
