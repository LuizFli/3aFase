package sc.senai.aulas.acervo.model.disco.entity;

import javax.persistence.Column;
import javax.persistence.Entity;

import sc.senai.aulas.acervo.model.itemacervo.entity.ItemAcervo;

@Entity
//@DiscriminatorValue(value = "D")
public class Disco extends ItemAcervo {

	@Column(length = 150)
	private String artista;
}
