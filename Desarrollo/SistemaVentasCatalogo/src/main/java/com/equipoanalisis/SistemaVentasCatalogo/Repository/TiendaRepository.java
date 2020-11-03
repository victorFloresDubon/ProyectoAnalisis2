package com.equipoanalisis.SistemaVentasCatalogo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.equipoanalisis.SistemaVentasCatalogo.entity.Tienda;

@Repository
public interface TiendaRepository  extends JpaRepository<Tienda, Integer>{
	
	@Query("SELECT tie FROM Tienda tie WHERE tie.id_usuario = ?1")
	List<Tienda> tiendasPorUsuario(int id_usuario);

}
