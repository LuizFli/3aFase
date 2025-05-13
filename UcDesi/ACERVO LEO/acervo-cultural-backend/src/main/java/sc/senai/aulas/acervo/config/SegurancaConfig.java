package sc.senai.aulas.acervo.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import sc.senai.aulas.acervo.model.usuario.service.AutenticacaoUsuarioService;
import sc.senai.aulas.acervo.seguranca.AutenticacaoFilter;

@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true, jsr250Enabled = true)
public class SegurancaConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private DataSource dataSource;
	
	@Autowired
	private AutenticacaoFilter autenticacaoFilter;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable().authorizeRequests()
			/*.antMatchers("/seguranca/login").permitAll()
			.antMatchers("/usuario/**").permitAll()*/
			.anyRequest().permitAll();
		
		//http.addFilterBefore(autenticacaoFilter, UsernamePasswordAuthenticationFilter.class);
	}
	
	/* Autenticação em Memória */
	/*@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication().passwordEncoder(new BCryptPasswordEncoder())
			.withUser("LEO")
			.password("$2a$10$ARppQC0FRWaGP4pnZqYbpuVyYOWIp4q1r2ViT3PGYK6BafD5PXFiS")
			.roles("ADMIN")
			.and()
			.withUser("GODOFREDO")
			.password("$2a$10$ARppQC0FRWaGP4pnZqYbpuVyYOWIp4q1r2ViT3PGYK6BafD5PXFiS")
			.roles("USER");
	}*/
	/* */
	
	/* Autenticação via JDBC */
	/*private static final String CONSULTA_PERMISSOES = 
			"SELECT U.LOGIN, 'ROLE_' || P.ROLE "
			+ "FROM USUARIO U "
			+ "INNER JOIN USUARIOPERMISSAO UP "
			+ "	ON UP.USUARIOD-ID = U.ID "
			+ "INNER JOIN PERMISSAO P "
			+ "	ON P.ID = UP.PERMISSAOID "
			+ "WHERE U.LOGIN = ? ";
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.jdbcAuthentication().passwordEncoder(new BCryptPasswordEncoder())
			.dataSource(dataSource)
			.usersByUsernameQuery("SELECT LOGIN, SENHA, ATIVO FROM USUARIO WHERE LOGIN = ? ")
			.authoritiesByUsernameQuery(CONSULTA_PERMISSOES);
	}*/
	/* */
	
	/* JPA */
	
	@Autowired
	private AutenticacaoUsuarioService autenticacaoService;
	
	@Bean
	public DaoAuthenticationProvider daoAuthenticationProvider() {
		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
		provider.setPasswordEncoder(new BCryptPasswordEncoder());
		provider.setUserDetailsService(autenticacaoService);
		return provider;
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(daoAuthenticationProvider());
	}
	/* */
}
