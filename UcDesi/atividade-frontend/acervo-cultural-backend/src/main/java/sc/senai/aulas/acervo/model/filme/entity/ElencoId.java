package sc.senai.aulas.acervo.model.filme.entity;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class ElencoId implements Serializable {
	
	private static final long serialVersionUID = -7927477997845676038L;
	
	private Integer filmeId;
	private Integer atorId;
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((atorId == null) ? 0 : atorId.hashCode());
		result = prime * result + ((filmeId == null) ? 0 : filmeId.hashCode());
		return result;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ElencoId other = (ElencoId) obj;
		if (atorId == null) {
			if (other.atorId != null)
				return false;
		} else if (!atorId.equals(other.atorId))
			return false;
		if (filmeId == null) {
			if (other.filmeId != null)
				return false;
		} else if (!filmeId.equals(other.filmeId))
			return false;
		return true;
	}

}
