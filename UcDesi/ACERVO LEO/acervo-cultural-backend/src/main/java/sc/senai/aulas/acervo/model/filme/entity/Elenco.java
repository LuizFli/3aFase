package sc.senai.aulas.acervo.model.filme.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;

@Entity
@IdClass(ElencoId.class)
public class Elenco {
	
	@Id
	//@Column(name = "FILMEID")
	private Integer filmeId;
	@Id
	//@Column(name = "ATORID")
	private Integer atorId;
	
	@Column(length = 100)
	private String personagem;

}
