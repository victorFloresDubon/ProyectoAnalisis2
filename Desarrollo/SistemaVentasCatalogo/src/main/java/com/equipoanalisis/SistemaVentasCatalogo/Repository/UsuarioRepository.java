package com.equipoanalisis.SistemaVentasCatalogo.Repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.equipoanalisis.SistemaVentasCatalogo.entity.Usuario;

@Repository
public interface UsuarioRepository  extends JpaRepository<Usuario, Integer>{

	@Query("SELECT usr \r\n"
			+ "FROM Usuario usr \r\n"
			+ "WHERE usr.correo = ?1 and usr.contrasenia = ?2")
	List<Usuario> buscarDatosUsuario(String usuario, String contrasenia);

}
