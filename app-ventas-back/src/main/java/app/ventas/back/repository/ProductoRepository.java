package app.ventas.back.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import app.ventas.back.model.producto;

public interface ProductoRepository extends JpaRepository<producto, Long>{

	@Query("select p from producto p where p.id_tienda = ?1")
	List<producto> findByTienda(int idtienda);
	
	
}
