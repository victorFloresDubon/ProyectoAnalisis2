package app.ventas.back.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import app.ventas.back.model.categoria_negocio;

public interface CategoriaNegocioRepository extends JpaRepository<categoria_negocio, Long>{

	@Query("select p from producto p where p.id_tienda = ?1")
	List<categoria_negocio> findByCategoriaNegocio(int idtienda);
	
	
}
