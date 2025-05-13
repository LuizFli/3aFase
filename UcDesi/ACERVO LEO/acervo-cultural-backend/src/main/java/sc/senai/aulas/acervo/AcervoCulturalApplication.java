package sc.senai.aulas.acervo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AcervoCulturalApplication {

	/*@Value("${nome.aplicacao}")
	private String nomeAplicacao;
	*/
	public static void main(String[] args) {
		SpringApplication.run(AcervoCulturalApplication.class, args);
	}
	
	/*@Bean
	public FilmeValidador filmeValidador() {
		return new FilmeValidador(nomeAplicacao);
	}*/

}
